import { useNavigate } from 'react-router-dom';
import { useFormik, FormikProps } from 'formik';

import Input from 'components/Input';
import FormTemplate from 'templates/FormTemplate';
import { validationSchema } from 'pages/Login/constants';
import { ToastSuccess } from 'components/Toasts';
import { useGlobalContext } from 'hooks/use-global';

import { signIn } from 'services/analysts';

type LoginForm = {
  email: string;
  password: string;
};

const Login = () => {
  const { setLoggedUserData } = useGlobalContext();
  const navigate = useNavigate();

  const formik: FormikProps<LoginForm> = useFormik<LoginForm>({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      const analyst = await signIn(values.email, values.password);

      if (!analyst) return;

      ToastSuccess('Login realizado com sucesso');
      setLoggedUserData(analyst);
      navigate('/');
      return;
    }
  });

  return (
    <FormTemplate
      title="Entre na sua conta"
      subtitle="Bem-vindo de volta!"
      buttonLabel="Entrar"
      handleSubmit={formik.handleSubmit}
    >
      <Input
        type="text"
        label="E-mail"
        placeholder="example@stone.com"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.email && formik.errors.email ? formik.errors.email : ''
        }
        required
      />
      <Input
        label="Senha"
        placeholder="********"
        name="password"
        type="password"
        isPassword
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.password && formik.errors.password
            ? formik.errors.password
            : ''
        }
        required
      />
    </FormTemplate>
  );
};

export default Login;
