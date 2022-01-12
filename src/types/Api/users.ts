export type UserType = {
  id?: number;
  name?: string;
  BirthDate?: string;
  email?: string;
  document?: number;
  salaryBase?: number;
  enabledFeatures?: number[];
  metadatas?: {
    validDocument?: boolean;
    verified?: boolean;
  };
};
