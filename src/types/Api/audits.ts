type logsType = {
  id?: number;
  name?: string;
  digits?: number | string;
  status?: string;
  metadatas?: {
    name?: string;
    digits?: number | string;
  };
  createdAt?: Date | string;
};

export type AuditType = {
  id?: number;
  name?: string;
  type?: string;
  before?: logsType;
  after?: logsType;
  createdAt?: Date | string;
  requestedBy?: number;
};
