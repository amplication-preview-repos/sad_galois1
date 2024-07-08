import { DatabaseWhereInput } from "./DatabaseWhereInput";
import { DatabaseOrderByInput } from "./DatabaseOrderByInput";

export type DatabaseFindManyArgs = {
  where?: DatabaseWhereInput;
  orderBy?: Array<DatabaseOrderByInput>;
  skip?: number;
  take?: number;
};
