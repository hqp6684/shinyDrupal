// import * as column from '../column/column';
import { Datablock } from '../datablock/datablock';

export interface DbConfigurationState {
    Untouched: boolean;
    Pristine: boolean;
    Dirty: boolean;
    Submitted: boolean;
}

export class DbConfiguration {

    state: DbConfigurationState;
    private datablock: Datablock;
    // constructor(private db: Datablock) {
    //     this.state = <State>{ Untouched: false, Pristine: true, Submitted: false, Dirty: false };
    // }
    constructor(private db_id: number, private db_name: string, state?: DbConfigurationState) {
        if (state) {
            this.state = state;
        } else {
            this.state = <DbConfigurationState>{ Untouched: false, Pristine: true, Submitted: false, Dirty: false };
        }

        this.datablock = new Datablock(db_id, db_name);

    }
    setDirty() {
        this.state.Dirty = false;
        this.state.Untouched = false;
    }
    setSubmitted() {
        this.state.Pristine = true;
        this.state.Dirty = false;
        this.state.Untouched = false;
    }
    setPristine() {
        this.state.Pristine = true;
        this.state.Dirty = false;
        this.state.Submitted = false;
        // todo restore to the last pristine
    }
    setUntouched() {
        this.state.Untouched = true;
        this.state.Pristine = true;
        this.state.Submitted = false;
        this.state.Submitted = false;
    }
}
