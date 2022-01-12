/* eslint-disable no-useless-escape */
import { MaskObject } from 'types/helpers/masks';

export const formatDate = (value?: string | Date) => {
  if (!value) return;

  const date = new Date(value);
  return date.toLocaleDateString('pt-BR');
};

export const formatMoneyValue = (value?: number) => {
  if (!value) return;

  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
};

export const formatMask = (value?: number, mask?: MaskObject) => {
  if (!value || !mask) return;
  return String(value).replace(mask?.regex, mask?.applyMask);
};

export function abbreviatesStrings(value?: string) {
  if (!value) return;

  const name = value.replace(/\s+/gi, ' ').trim();
  const listName = removePrepositions(name).split(' ');

  if (listName.length > 2) {
    return listName
      .map((partOfString, index, names) =>
        index === 0 || index === names.length - 1
          ? partOfString
          : `${partOfString[0]}.`
      )
      .join(' ');
  }

  return value;
}

function removePrepositions(fullName: string) {
  return fullName.replace(/\ dos|\ das|\ dos|\ das|\ de|\ da|\ d\'/gi, '');
}
