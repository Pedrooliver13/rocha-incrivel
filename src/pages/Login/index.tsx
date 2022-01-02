import { useNavigate } from 'react-router-dom';

import Input from 'components/Input';
import StoneLogo from 'assets/stone-logo.svg';
import { Button } from 'components/Button';
import { useForm, masks } from 'hooks/use-form';
import { useGlobalContext } from 'hooks/use-global';
import { ToastError, ToastSuccess } from 'components/Toasts';
import { requiredFieldsMessage } from 'helpers/commonMessages';

import { signIn } from 'services/analysts';
import * as S from './styles';

const Login = () => {
  const navigate = useNavigate();

  const { setLoggedUserData } = useGlobalContext();
  const email = useForm(masks.email);
  const password = useForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formIsValid = [email.validate(), password.validate()].includes(true);
    if (!formIsValid) return ToastError(requiredFieldsMessage);

    const analyst = await signIn(email.value, password.value);
    if (!analyst) return;

    ToastSuccess('Login realizado com sucesso');
    setLoggedUserData(analyst);
    navigate('/');
    return;
  };

  return (
    <S.Wrapper>
      <div className="photo">
        <img src={StoneLogo} alt="Stone Logo" />
      </div>

      <section className="login">
        <form className="content" onSubmit={handleSubmit}>
          <h1 className="content__header">
            <span>Welcome back</span>
            Login to your account
          </h1>

          <Input
            type="text"
            label="E-mail"
            placeholder="example@stone.com"
            name="email"
            value={email.value}
            onChange={email.onChange}
            onBlur={email.onBlur}
            error={email.error}
          />
          <Input
            label="Senha"
            placeholder="********"
            name="password"
            type="password"
            isPassword
            value={password.value}
            onChange={password.onChange}
            onBlur={password.onBlur}
            error={password.error}
          />
          <Button className="content__button">Entrar</Button>
        </form>
      </section>
    </S.Wrapper>
  );
};

export default Login;
