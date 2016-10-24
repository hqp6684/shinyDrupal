export interface Message {

    connectionStatus?: {
        fromParentToChild?: {
            isConnected: boolean;
        };
        fromChildToParent?: {
            isConnected: boolean;
        };
    };
    data?: {
        shinyConfiguration?: {
            id: number;
        };
        node?: any
    };

}
