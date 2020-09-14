/* 
    Copyright © 2020 Jasper P
    https://www.jxpr.eu/

    Do not change this, unless you know what you're doing.
*/
module.exports = function parseExtension(ext) {
    switch (ext) {
        case "html": case "htm":
            return "text/html";
            break;
        case "svg":
            return "image/svg+xml";
            break;
        case "js": case "mjs":
            return "text/javascript";
            break;
        case "json":
            return "application/json";
            break;
        case "png":
            return "image/png";
            break;
        case "mp3":
            return "audio/mpeg";
            break;
        case "mpeg":
            return "video/mpeg";
            break;
        case "gif":
            return "image/gif";
            break;
        case "css":
            return "text/css";
            break;
        case "pdf":
            return "application/pdf";
            break;
        case "txt":
            return "text/plain";
            break;
        case "webp":
            return "image/webp";
            break;
        case "xhtml":
            return "application/xhtml+xml";
            break;
        case "zip":
            return "application/zip";
            break;
        case "wav":
            return "audio/wav";
            break;
        case "webm":
            return "video/webm";
            break;
        case "ttf":
            return "font/ttf";
            break;
        case "otf":
            return "font/otf";
            break;
        case "ico":
            return "image/vnd.microsoft.icon";
            break;
        case "jpg":
        case "jpeg":
            return "image/jpeg";
            break;
        case "epub":
            return "application/epub+zip";
            break;
        case "odt":
            return "application/vnd.oasis.opendocument.text";
            break;
        case "ods":
            return "application/vnd.oasis.opendocument.spreadsheet";
            break;
        case "odp":
            return "application/vnd.oasis.opendocument.presentation";
            break;
        case "rar":
            return "application/vnd.rar";
            break;
        case "rtf":
            return "application/rtf";
            break;
        case "ppt":
            return "application/vnd.ms-powerpoint";
            break;
        case "pptx":
            return "application/vnd.openxmlformats/officedocument.presentationml.presentation";
            break;
        case "woff":
            return "font/woff";
            break;
        case "woff2":
            return "font/woff2";
            break;
        case "xml":
            return "application/xml";
            break;
        case "7z":
            return "application/x-7z-compressed";
            break;
        case "tiff":
        case "tif":
            return "image/tiff";
            break;
        case "tar":
            return "application/x-tar";
            break;
        case "bmp":
            return "image/bmp";
            break;
        case "avi":
            return "video/x-msvideo";
            break;
        case "doc":
            return "application/msword";
            break;
        case "docx":
            return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
            break;
        case "gz":
            return "application/gzip";
            break;
        case "jar":
            return "application/java-archive";
            break;
    }
}