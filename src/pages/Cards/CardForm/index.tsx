/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useFormik, FormikProps } from 'formik';
import { useParams, useNavigate } from 'react-router-dom';

import Input from 'components/Input';
import Select from 'components/Select';
import Button from 'components/Button';
import Radio from 'components/Radio';
import FormTemplate from 'templates/FormTemplate';
import { useGlobalContext } from 'hooks/use-global';
import { ToastError, ToastSuccess } from 'components/Toasts';
import {
  EUserEnabledFeatures,
  initialBeforeState,
  validationSchema,
  radioOptions
} from 'pages/Cards/CardForm/constants';

import { UserType } from 'types/Api/users';
import { CardFormProps } from 'types/pages/cardForm';
import { CardType, CardTypeService } from 'types/Api/cards';

import { postAudit } from 'services/audits';
import { getAllUsers } from 'services/users';
import {
  getCardById,
  createCard,
  updateCard,
  deleteCard
} from 'services/cards';

const CardForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loggedUserData, hasAllPermission } = useGlobalContext();

  const [users, setUsers] = useState<UserType[]>([]);
  const [beforeValues, setBeforeValues] =
    useState<CardTypeService>(initialBeforeState);

  const formik: FormikProps<CardFormProps> = useFormik<CardFormProps>({
    initialValues: {
      name: '',
      userId: '',
      digits: '',
      limit: '',
      status: 'requested'
    },
    validationSchema: validationSchema(id),
    onSubmit: (values) => {
      const { name, digits, limit, status, userId } = values;

      if (beforeValues.updatedAt) {
        ToastError('Não é possível alterar um cartão mais de uma vez');
        return;
      }

      if (id && beforeValues.status === status) {
        ToastError('Altere o status do cartão');
        return;
      }

      const body: CardType = {
        ...beforeValues,
        metadatas: {
          name,
          digits,
          limit
        },
        status,
        user_id: userId
      };

      if (loggedUserData?.id) {
        postAudit(loggedUserData?.id, beforeValues, body);
      }

      if (id) {
        updateCard(body).then(() => {
          ToastSuccess('Card atualizado com sucesso');
          navigate('/cards');
        });
        return;
      }

      createCard(body).then(() => {
        ToastSuccess('Cartão criado com sucesso');
        navigate('/cards');
      });
    }
  });

  const handleDelete = (
    event:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const confirmation = window.confirm('Deseja deletar?');

    if (!confirmation) {
      event.preventDefault();
    }

    if (confirmation) {
      deleteCard(String(id)).then(() =>
        ToastSuccess('Card deletado com sucesso')
      );
      navigate('/cards');
    }
  };

  useEffect(() => {
    if (id) {
      getCardById(id)
        .then((card: CardTypeService) => {
          formik.setValues({
            ...formik.values,
            userId: card.user_id ? card.user_id : '',
            name: card.metadatas.name,
            digits: card.metadatas.digits,
            limit: card.metadatas.limit,
            status: card.status
          });
          setBeforeValues(card);
        })
        .catch(() => {
          ToastError('Cartão não encontrado');
          navigate('/cards');
        });
      return;
    }

    getAllUsers().then(setUsers);
  }, [id]);

  return (
    <FormTemplate
      title="Atualizar status do cartão"
      subtitle="Confira os cartões"
      handleSubmit={formik.handleSubmit}
      buttonLabel={id ? 'Atualizar' : 'Criar'}
      redirect="/cards"
      footerComponent={
        <>
          {id && hasAllPermission && (
            <Button isLink tertiary onClick={handleDelete}>
              Deletar
            </Button>
          )}
        </>
      }
    >
      <Input
        type="text"
        label="Nome do cartão"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.name && formik.errors.name ? formik.errors.name : ''
        }
        required
      />
      {!id && (
        <Select
          label="Usuário"
          name="userId"
          value={formik.values.userId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.userId && formik.errors.userId
              ? formik.errors.userId
              : ''
          }
        >
          {users
            .filter((item) => {
              return (
                item?.enabledFeatures &&
                item?.enabledFeatures.includes(EUserEnabledFeatures.card)
              );
            })
            .map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
        </Select>
      )}
      <Input
        type="number"
        label="Dígitos"
        name="digits"
        value={formik.values.digits}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.digits && formik.errors.digits
            ? formik.errors.digits
            : ''
        }
        disabled={!!id}
        required
      />
      {hasAllPermission && (
        <Input
          type="number"
          label="Limite"
          name="limit"
          value={formik.values.limit}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.limit && formik.errors.limit
              ? formik.errors.limit
              : ''
          }
          disabled={!!id}
          required
        />
      )}
      {id && (
        <Radio
          name="status"
          value={formik.values.status}
          onChange={formik.handleChange}
          options={radioOptions}
        />
      )}
    </FormTemplate>
  );
};

export default CardForm;
