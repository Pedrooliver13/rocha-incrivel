export type CardType = {
  status: string;
  id?: number | string;
  user_id?: number | string;
  metadatas: {
    name: string;
    digits: number | string;
    limit: number | string;
  };
  createdAt?: Date;
  updatedAt?: Date | null;
  requestedBy?: number | string;
};

export type CardTypeService = {
  id?: number;
  status: string;
  user_id?: string | number;
  metadatas: {
    name: string;
    digits: number;
    limit: number;
  };
  createdAt?: Date;
  updatedAt?: Date | null;
  requestedBy?: number;
};
