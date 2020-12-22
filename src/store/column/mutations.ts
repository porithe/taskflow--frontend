import { Column, ColumnMutations } from "@/constants/column";
import { State } from "@/store/column/module";

interface RenamePayload {
  columnUuid: string;
  name: string;
}

export default {
  [ColumnMutations.SET_COLUMN_LIST](state: State, columnList: Column[]) {
    state.columnList = columnList;
  },
  [ColumnMutations.ADD_COLUMN](state: State, column: Column) {
    state.columnList = [...state.columnList, column];
  },
  [ColumnMutations.EDIT_COLUMN_NAME](
    state: State,
    { columnUuid, name }: RenamePayload
  ) {
    const column = state.columnList.find(({ uuid }) => uuid === columnUuid);
    Object.assign(column, name);
  }
};
