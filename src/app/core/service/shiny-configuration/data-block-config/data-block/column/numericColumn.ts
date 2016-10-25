import { Column } from './column.abstract';

export class NumericColumn extends Column {
    constructor(readonly col_id: number,
        readonly col_name: string,
        readonly col_type = 'double') {
        super(col_id, col_name, col_type);

    }

}
