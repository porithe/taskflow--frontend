import { Column, ColumnMutations } from "@/constants/column";
import { State } from "@/store/column/module";

export default {
  [ColumnMutations.SET_COLUMN_LIST](state: State, columnList: Column[]) {
    state.columnList = columnList;
  }
};
