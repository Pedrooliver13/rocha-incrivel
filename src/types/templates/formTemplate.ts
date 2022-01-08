export type FormTemplateProps = {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
