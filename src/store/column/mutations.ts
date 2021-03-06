import { Column, ColumnMutations } from "@/constants/column";
import { State } from "@/store/column/module";
import { PushTask } from "@/constants/task";

interface RenamePayload {
  columnUuid: string;
  name: string;
}

interface DeleteTaskPayload {
  taskUuid: string;
  columnUuid: string;
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
  },
  [ColumnMutations.ADD_TASK](state: State, { task, columnUuid }: PushTask) {
    const column = state.columnList.find(({ uuid }) => uuid === columnUuid);
    column?.tasks.push(task);
  },
  [ColumnMutations.DELETE_COLUMN](state: State, columnUuid: string) {
    state.columnList = state.columnList.filter(
      ({ uuid }) => uuid !== columnUuid
    );
  },
  [ColumnMutations.DELETE_TASK](
    state: State,
    { taskUuid, columnUuid }: DeleteTaskPayload
  ) {
    const column = state.columnList.find(({ uuid }) => uuid === columnUuid);
    if (column) {
      column.tasks = column.tasks.filter(({ uuid }) => uuid !== taskUuid);
    }
  }
};
