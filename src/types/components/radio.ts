export type RadioOption = {
  optionLabel: string;
  optionValue: string;
};

export type RadioProps = {
  name: string;
  options: RadioOption[];
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
