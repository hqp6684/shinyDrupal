export abstract class Column {

    constructor(
        readonly col_id: number,
        readonly col_name: string,
        readonly col_type: string) { }
}
