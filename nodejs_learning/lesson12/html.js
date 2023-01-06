const http = require("http");
const fs = require("fs");

console.log("Starting...");

http.createServer(function (request, response) {
    const queryUrl = request.url === "/" ? "/main" : request.url;
    const htmlFolderPath = "html";
    const queryPath = htmlFolderPath + queryUrl + ".html";

    fs.readFile(queryPath, "utf8", (err, data) => {
        response.setHeader("Content-Type", "text/html");

        if(err){
            show404Page(queryPath, response);
        } else{
            showPage(data, response);
        }
    });

}).listen(8888);

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
        if(!err)
            resp.write(data);
        else{
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