import * as Yup from 'yup';

import { requiredFieldMessage } from 'helpers/commonMessages';

export const EUserEnabledFeatures = {
  card: 0
};

export const validationSchema = (id?: string | number) =>
  Yup.object().shape({
    name: Yup.string().required(requiredFieldMessage),
    digits: Yup.string()
      .length(4, 'Favor inserir 4 Dígitos')
      .required(requiredFieldMessage),
    limit: Yup.string()
      .length(4, 'Favor inserir 4 Dígitos')
      .required(requiredFieldMessage),
    userId: !id ? Yup.string().required(requiredFieldMessage) : Yup.string()
  });

export const initialBeforeState = {
  status: 'requested',
  metadatas: {
    name: '',
    digits: 0,
    limit: 0
  },
  createAt: new Date(),
  updateAt: null
};

export const radioOptions = [
  {
    optionLabel: 'Solicitado',
    optionValue: 'requested'
  },
  {
    optionLabel: 'Aprovado',
    optionValue: 'approved'
  },
  {
    optionLabel: 'Rejeitado',
    optionValue: 'rejected'
  }
];
