const fs = require("fs");

//reading a file
// fs.readFile("./docs/file.txt", (err, data) => {
//   if (err) {
//     console.log(err.message);
//   }

//   console.log(data.toString());
// });

// writing to a file

// fs.writeFile("./docs/file.txt", "The file was written", () => {
//   console.log("file was successfully written");
// });

// fs.writeFile("./docs/file1.txt", "The file was written", () => {
//   console.log("file was successfully written");
// });

// Working on Directories

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err.message);
//     }
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err.message);
//     }
//   });
// }
