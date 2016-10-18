
// import { DbConfiguration } from '../datablockConfiguration/datablockConfiguration';

export class ShinyConfiguration {
    // private dbConfigs = Array<DbConfiguration>();

    // config of the db being edited
    // private activeDbConfig: DbConfiguration;

    constructor(private id?: number) {
        if (id) {
            this.reconstructConfig(id);
        } else {

        }
    }


    reconstructConfig(id: number) {
        // TODO - get config data from monet
        // and then reconstruct the config
        /**
         * let say: get config from db
         * would return Array<DbConfig>, Array<DataAnalyzeToolConfig>
         * 
         */
        return;
    }
}

