//Route handler, for next API
//Notice the function names

export function GET(req: Request) {
    return Response.json({hello: 'world'});
}