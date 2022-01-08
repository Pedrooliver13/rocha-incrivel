export const masks = {
  email: {
    mask: 'email',
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    messageError: 'E-mail inválido'
  },
  cpf: {
    mask: 'cpf',
    regex: /(\d{3})(\d{3})(\d{3})(\d{2})/,
    applyMask: '$1.$2.$3-$4',
    value: (value: string) =>
      value
        ? value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')
        : '',
    messageError: 'CPF inválido'
  }
};
