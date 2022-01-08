type logsType = {
  id?: number;
  name?: string;
  digits?: number;
  status?: string;
  metadatas?: {
    name?: string;
    digits?: number;
  };
  createdAt?: string;
};

export type AuditType = {
  id: number;
  type?: string;
  before?: logsType;
  after?: logsType;
  requestedBy?: number;
};
