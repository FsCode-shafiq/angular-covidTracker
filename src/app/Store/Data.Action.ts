import { createAction, props } from "@ngrx/store";

export const listData = createAction('list',

props<{data: any}>()
)

export const findDataBYSelect = createAction('findData',
props<{option: string}>()
)
