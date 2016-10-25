import { Column } from './column.abstract';

export class FactorColumn extends Column {
    constructor(readonly col_id: number,
        readonly col_name: string,
        readonly col_type = 'varchar') {
        super(col_id, col_name, col_type);

    }
}
