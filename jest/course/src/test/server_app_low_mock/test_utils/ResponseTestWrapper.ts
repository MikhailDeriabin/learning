import { HTTP_CODES } from "../../../server_app/model/ServerModel";

export default class ResponseTestWrapper{
    public body?: object;
    public statusCode?: HTTP_CODES;
    public headers: object[] = [];

    public writeHead(statusCode: HTTP_CODES, header: object){
        this.statusCode = statusCode;
        this.headers.push(header);
    }

    public write(stringifiedBody: string){
        this.body = JSON.parse(stringifiedBody);
    }

    public end(){
    }

    public clearAllFields(){
        this.body = undefined;
        this.statusCode = undefined;
        this.headers = [];
    }
} 