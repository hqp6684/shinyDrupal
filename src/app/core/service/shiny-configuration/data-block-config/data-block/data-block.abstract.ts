import * as column from './column/column';
export enum dbType { system, compound, process };



export abstract class DataBlock {
    private columns = Array<column.Column>();
    constructor(readonly db_id: number, readonly db_name: string, readonly db_type: dbType) {

    }


    addColumn() {
        this.columns.push(new column.Column);
    }
}


