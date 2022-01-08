import { ToastError } from 'components/Toasts';

export const getAllUsers = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
    return response.json();
  } catch (err) {
    ToastError();
  }
};
