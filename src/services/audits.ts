import { AuditType } from 'types/Api/audits';
import { ToastError } from 'components/Toasts';
import { CardType } from 'types/Api/cards';

export const getAllAudits = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/audits`);
    return response.json();
  } catch (err) {
    ToastError();
  }
};

export const postAudit = async (
  requestedBy: number | string,
  beforeValues: CardType,
  afterValues: CardType
) => {
  try {
    const bodyAudits: AuditType = {
      before: {
        name: afterValues.metadatas.name,
        status: beforeValues.status,
        digits: beforeValues.metadatas.digits,
        metadatas: {
          name: beforeValues.metadatas.name,
          digits: beforeValues.metadatas.digits
        },
        createdAt: beforeValues.createdAt ? beforeValues.createdAt : new Date()
      },
      requestedBy: Number(requestedBy)
    };

    const afterBodyAudits: AuditType = {
      after: {
        name: afterValues.metadatas.name,
        status: afterValues.status,
        digits: afterValues.metadatas.digits,
        metadatas: {
          name: afterValues.metadatas.name,
          digits: afterValues.metadatas.digits
        },
        createdAt: afterValues.id ? new Date() : ''
      }
    };

    await fetch(`${process.env.REACT_APP_API_URL}/audits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: afterValues.id
        ? JSON.stringify({ ...bodyAudits, ...afterBodyAudits })
        : JSON.stringify(bodyAudits)
    });
  } catch (err) {
    ToastError();
  }
};
