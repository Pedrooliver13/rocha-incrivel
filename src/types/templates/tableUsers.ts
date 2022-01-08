export type Props = {
  id?: number;
  name?: string;
  BirthDate?: string;
  email?: string;
  document?: number;
  salaryBase?: number;
  metadatas?: {
    validDocument?: boolean;
    verified?: boolean;
  };
};