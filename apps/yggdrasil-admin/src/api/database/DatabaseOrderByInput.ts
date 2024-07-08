import { SortOrder } from "../../util/SortOrder";

export type DatabaseOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
