const http = require("http");
const fs = require("fs");

console.log("Starting...");

http.createServer(function (request, response) {
    if(request.url.includes(".")){
        giveResource(request, response);
    }else{
        giveHtml(request, response);
    }
}).listen(8888);

const giveHtml = (req, resp) => {
    const queryUrl = req.url === "/" ? "/main" : req.url;
    const folderPath = "html";
    const queryPath = folderPath + queryUrl + ".html";

    fs.readFile(queryPath, "utf8", (err, data) => {
        resp.setHeader("Content-Type", "text/html");

        if(err){
            show404Page(queryPath, resp);
        } else{
            showPage(data, resp);
        }
    });
}

const giveResource = (req, resp) => {
    const queryUrl = req.url;
    let folderPath = "";
    let contentType = "";

    if(queryUrl.endsWith(".css")){
        folderPath = "css";
        contentType = "text/css";
    } else if(queryUrl.endsWith(".jpg") || queryUrl.endsWith(".png") || queryUrl.endsWith(".svg")){
        folderPath = "img";
        if(queryUrl.endsWith(".jpg")) contentType = "image/jpg";
        if(queryUrl.endsWith(".png")) contentType = "image/png";
        if(queryUrl.endsWith(".svg")) contentType = "image/svg+xml";
    }

    const queryPath = folderPath + queryUrl;
    console.log("Loading " + queryPath);
    if(folderPath !== "" && contentType !== ""){
        fs.readFile(queryPath, "utf8", (err, data) => {
            resp.setHeader("Content-Type", contentType);
            if(err){
                console.log("The resource " + queryPath + " not found");
                resp.writeHead(404, {"Content-Type": "text/plain"});
                resp.write("");
                resp.end();
            } else{
                resp.statusCode = 200;
                resp.end(data);
            }
        });
    } else{
        console.log("The resource " + queryPath + " not found or not supported");
        resp.writeHead(404, {"Content-Type": "text/plain"});
        resp.write("");
        resp.end();
    }
}

const showPage = (html, resp) => {
    resp.statusCode = 200;

    addPart("header", html).
    then(
        (newHtml) => {
            addPart("footer", newHtml).
                then(
                    (newHtml) => {
                        resp.write(newHtml);
                        resp.end();
                    }
                );
        }
    );
}

const show404Page = (path, resp) => {
    resp.statusCode = 404;

    fs.readFile("html/page404.html", "utf8", (err, data) => {
        if(!err) {
            resp.write(data);
        } else{
            resp.write("<h1>Page " + path + " not found :(</h1>");
        }
        resp.end();
    });
}

const addPart = async (partName, html) => {
    const partPath = "parts/" + partName + ".html";

    const promise = fs.promises.readFile(partPath, "utf8").
        then(
            //On success
            (part) => {
                const reg = "\{\{" + partName + "\}\}";
                const regExp = new RegExp(reg, "g");
                return html.replace(regExp, part);
            },
            //On reject
            () => {
                console.log("Can not read the file " + partPath);
                return html;
            }
        );

    return await promise;
}