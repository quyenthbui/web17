const fs = require("fs");

function readFile(filePath, onReadFileDone){
    fs.readFile(
        filePath,
        {encoding: "utf-8"},
        (err,data) => {
            if(err) console.log(err)
            else{
                console.log("File data: ",data);
                onReadFileDone(data);
            }
        }
    );
}

function writeFile(filePath, fileData) {
    fs.writeFileSync(
        filePath,
        fileData,
        {encoding: "utf-8"}
    );
}

module.exports = {
    readFile,
    writeFile
}