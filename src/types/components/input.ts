export type Props = {
  defaultValue?: string;
  name: string;
  label: string;
  value: string;
  type: string;
  placeholder?: string;
  isPassword?: boolean;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
};
