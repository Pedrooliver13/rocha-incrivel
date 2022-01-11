export type InputProps = {
  defaultValue?: string;
  name: string;
  label: string;
  value: string | number;
  type: string;
  disabled?: boolean;
  placeholder?: string;
  isPassword?: boolean;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
};
