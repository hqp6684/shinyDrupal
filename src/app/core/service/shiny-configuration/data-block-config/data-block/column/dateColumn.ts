import { Column } from './column.abstract';

export class DateColumn extends Column {
    constructor(readonly col_id: number,
        readonly col_name: string,
        readonly col_type = 'timestamp') {
        super(col_id, col_name, col_type);

    }
}

