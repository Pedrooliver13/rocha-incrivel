export type FormTemplateProps = {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  footerComponent?: React.ReactNode;
  redirect?: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
