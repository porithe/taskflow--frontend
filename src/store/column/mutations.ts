import { Column, ColumnMutations } from "@/constants/column";
import { State } from "@/store/column/module";

export default {
  [ColumnMutations.SET_COLUMN_LIST](state: State, columnList: Column[]) {
    state.columnList = columnList;
  },
  [ColumnMutations.ADD_COLUMN](state: State, column: Column) {
    state.columnList = [...state.columnList, column];
  }
};
