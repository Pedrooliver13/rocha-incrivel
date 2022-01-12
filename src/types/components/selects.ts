export type SelectProps = {
  label: string;
  name: string;
  children: React.ReactNode;
  defaultValue?: string;
  value: string | number;
  error?: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
};
