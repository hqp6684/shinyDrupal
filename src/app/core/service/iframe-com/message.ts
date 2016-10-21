export interface Message {
    shinyConfiguration?: {
        method: 'GET' | 'PUT' | 'SEND';
        body?: { id: number };
    };
}
