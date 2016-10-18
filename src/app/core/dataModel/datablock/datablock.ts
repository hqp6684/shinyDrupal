
import { Column } from '../column/column.abstract';

export class Datablock {
    columns = Array<Column>();
    constructor(readonly db_id?: number, readonly db_name?: string) {
    }
}
