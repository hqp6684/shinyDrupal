// import * as column from '../column/column';
import { Datablock } from '../datablock/datablock';

interface State {
    Untouched: boolean;
    Pristine: boolean;
    Dirty: boolean;
    Submitted: boolean;
}

export class DbConfiguration {

    state: State;
    constructor(private db: Datablock) {
        this.state = <State>{ Untouched: false, Pristine: true, Submitted: false, Dirty: false };
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
}
