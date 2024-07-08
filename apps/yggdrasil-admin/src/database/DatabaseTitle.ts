import { Database as TDatabase } from "../api/database/Database";

export const DATABASE_TITLE_FIELD = "id";

export const DatabaseTitle = (record: TDatabase): string => {
  return record.id?.toString() || String(record.id);
};
