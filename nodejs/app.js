const fs = require("fs");

const fileController = require("./fileController");
//console.log(fileController)
// const readFile = fileController.readFile;

const {readFile} = fileController;

// console.log("Hello", );
readFile("hello.txt", (fileData) => {
    console.log("Hello",fileData);
});

const obj = {
    a:10,
    b:15,
    c:25,
}

const {a,b,c,d=10} = obj;
console.log(a,b,c,d);

// console.log("Begin");
// fs.writeFile("hello.txt","Hello world!",(err) => {
//     if (err) console.log(err)
//     else console.log("Write file success");
// });
// console.log("End");

// console.log("Begin");
// fs.writeFileSync("testSync.txt","Hello sync");
// console.log("End");

// const objectData = {
//     name:"Huy",
//     age: 18
// }

// fs.writeFileSync("hello.txt", JSON.stringify(objectData));

// console.log("Begin");
// const readData = fs.readFile("hello.txt", {encoding: "utf-8" }, (err,data) => {
//     if (err) console.log(err)
//     // else console.log("File data: ", data);
//     return data;
// });
// console.log("File data: ",readData)
// console.log("End");

// console.log("Begin Sync");
// const readDataSync = fs.readFileSync("hello.txt",{encoding: "utf-8"});
// const parseData = JSON.parse(readDataSync)
// console.log("File data Sync: ", parseData.name);
// console.log("End Sync");