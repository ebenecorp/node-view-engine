const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./docs/blog2.txt");

// readStream.on('data', (chunk) => {
//   console.log("____NEW CHUNK OF DATA______");
//   writeStream.write("\n ____NEW CHUNK OF DATA______\n \n \n ");
//   writeStream.write(chunk)
//   console.log(chunk);
// });

//Using Piping

readStream.pipe(writeStream);
