import { ColumnGetters } from "@/constants/column";
import { State } from "@/store/column/module";

export default {
  [ColumnGetters.COLUMN_LIST](state: State) {
    return state.columnList;
  }
};
