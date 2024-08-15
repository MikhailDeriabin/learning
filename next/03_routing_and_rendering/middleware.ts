//With middleware you can do something before the each response to the client
//For example redirect user to login page, if it is not authenticated (there are different methods available in NextResponse)
import { NextResponse } from "next/server";

export function middleware(req: Request) {
    //just forward the response to client
    return NextResponse.next();
}