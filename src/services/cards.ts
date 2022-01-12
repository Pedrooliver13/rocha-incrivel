import { CardType } from 'types/api/cards';
import { ToastError } from 'components/Toasts';

export const getAllCards = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/cards`);
    return response.json();
  } catch (err) {
    ToastError();
  }
};

export const getCardById = async (id: number | string) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/cards`);
    const responseJson = await response.json();

    const card = responseJson.find(
      (card: CardType) => Number(card.id) === Number(id)
    );

    return card;
  } catch (err) {
    ToastError();
  }
};

export const createCard = async (body: CardType) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    return response.json();
  } catch (err) {
    ToastError();
  }
};

export const updateCard = async (body: CardType) => {
  try {
    await fetch(`${process.env.REACT_APP_API_URL}/cards/${body.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...body, updatedAt: new Date() })
    });
    return;
  } catch (err) {
    ToastError();
  }
};

export const deleteCard = async (id: string) => {
  try {
    await fetch(`${process.env.REACT_APP_API_URL}/cards/${id}`, {
      method: 'DELETE'
    });
    return;
  } catch (err) {
    ToastError();
  }
};
