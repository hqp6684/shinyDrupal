import { Column } from './abstract/column';

export class NumericColumn extends Column {
    constructor(readonly col_id: number,
        readonly col_name: string,
        readonly col_type = 'double') {
        super(col_id, col_name, col_type);

    }

}
