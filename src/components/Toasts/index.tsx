import { toast } from 'react-toastify';

import { successMessage, errorMessage } from 'helpers/commonMessages';

export const ToastSuccess = (message?: string) => {
  return toast.success(message || successMessage, { theme: 'colored' });
};

export const ToastError = (message?: string) => {
  return toast.error(message || errorMessage, { theme: 'colored' });
};
