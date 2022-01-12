import * as Yup from 'yup';

import { requiredFieldMessage } from 'helpers/commonMessages';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required(requiredFieldMessage),
  password: Yup.string().required(requiredFieldMessage)
});
