export const masks = {
  cpf: {
    mask: 'cpf',
    regex: /(\d{3})(\d{3})(\d{3})(\d{2})/,
    applyMask: '$1.$2.$3-$4'
  }
};
