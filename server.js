/*
    ISC Licensed

    Copyright © 2020 Jasper P
    https://www.jxpr.eu/

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted, provided that the above
    copyright notice and this permission notice appear in all copies.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
    MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
    ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
    ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
    OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/

const http = require('http');
const fileSystem = require('fs');
const opSystem = require('os');
const parseExtension = require('./extensions.js');
const {
    port,
    directory,
    directoryIndex,
    version
} = require('./config.json');

http.createServer((request, response) => {
    logRequest(request); // Logging request
    let requestArray = parseRequestURL(request);
    let fileToReturn = requestArray.join("/");
    let extension = fileToReturn.split('.').pop();
    let contentType = parseExtension(extension);
    if (contentType) {
        response.setHeader("Content-Type", contentType);
    }
    if (fileSystem.existsSync(`./${directory}${fileToReturn}`)) {
        if (fileToReturn !== "") {
            response.statusCode = 200;
            response.write(fileSystem.readFileSync(`./${directory}${fileToReturn}`)); // Send file other than directory index
            response.end();
        } else {
            response.statusCode = 200;
            let directoryIndexExtension = directoryIndex.split('.').pop();
            response.setHeader("Content-Type", parseExtension(directoryIndexExtension));
            response.write(fileSystem.readFileSync(`./${directory}${directoryIndex}`)); // Send directory index, specified in config.json
            response.end();
        }
    } else {
        response.statusCode = 404;
        response.setHeader("Content-Type", "text/html");
        response.write(`<title>404</title><h1>404</h1><p>The requested file ${request.url} could not be found.</p><hr><p>Nopachi v${version}@${opSystem.type()} ${opSystem.release()}</p>`);
        response.end();
    }
}).listen(port);
console.log(`\nNopachi v${version} started.\nPort: ${port}\nOS: ${opSystem.type()} ${opSystem.release()}\n\nCopyright © 2020 Jasper P`); // Start message

function logRequest(request) { // Logging requests to visits.log
    // Logging any requests
    let oldLog = fileSystem.readFileSync('./visits.log'); // Reading the old log
    let currentTime = new Date(); // Getting the current date
    let formattedDate = currentTime.getFullYear() + "-" + (currentTime.getMonth() + 1) + "-" + currentTime.getDate() + " " + currentTime.getHours() + ":" + currentTime.getMinutes(); // Formatting the date
    let newLog = `${oldLog}\n(${formattedDate}) [${request.socket.remoteAddress}] requested [${request.url}]`; // Making the new log
    fileSystem.writeFileSync('./visits.log', newLog); // Writing the new log to file

}

function parseRequestURL(request) { // Parsing the request to return correct files
    let requestArray = request.url.split("/"); // Putting everything between slashes in an array
    requestArray = requestArray.slice(1, requestArray.length); // Removing the empty " ", as request.url starts with a /
    return requestArray;
}