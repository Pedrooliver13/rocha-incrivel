import { ToastError } from 'components/Toasts';

export const getAllCards = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/cards`);
    return response.json();
  } catch (err) {
    ToastError();
  }
};
