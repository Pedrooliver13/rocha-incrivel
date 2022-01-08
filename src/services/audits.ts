import { ToastError } from 'components/Toasts';

export const getAllAudits = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/audits`);
    return response.json();
  } catch (err) {
    ToastError();
  }
};
