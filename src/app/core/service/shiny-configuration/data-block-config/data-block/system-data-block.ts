import { DataBlock, dbType } from './data-block.abstract';

export class SystemDataBlock extends DataBlock {
    constructor(readonly db_id: number, readonly db_name: string) {
        super(db_id, db_name, dbType.system);
    }

}

