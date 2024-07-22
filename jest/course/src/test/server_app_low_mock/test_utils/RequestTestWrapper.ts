import { HTTP_METHODS } from "../../../server_app/model/ServerModel";

type TEvent = 'data' | 'error';

export default class RequestTestWrapper{
    public body?: object;
    public method?: HTTP_METHODS;
    public url?: string;
    public headers = {};

    public on(event: TEvent, callback: Function){
        if(event === 'data')
            return callback(JSON.stringify(this.body));

        callback();
    }

    public clearAllFields(){
        this.body = undefined;
        this.method = undefined;
        this.url = undefined;
        this.headers = {};
    }
} 