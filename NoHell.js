const {
  readdir,
  readFile,
  writeFile
} = require("fs");

const {
  join
} = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");



function NoHell() {
    try {
      let files =   readdir(inbox, (error, files) )
      //console.log(files)
/*
      files.forEach(file => {
          let readFiles = promises.readFile(join(inbox, file), "utf8");
          console.log(readFiles)
          promises.writeFile(join(outbox, file), reverseText(readFiles));
          console.log(`${readFiles} written`)
        });
             */
      }
 
      catch (err) {
        console.log(err)
      }
    }

NoHell();


    // Read and reverse contents of text files in a directory
    /*
    readdir(inbox, (error, files) => {
      if (error) return console.log("Error: Folder inaccessible");
      files.forEach(file => {
        readFile(join(inbox, file), "utf8", (error, data) => {
          if (error) return console.log("Error: File error");
          writeFile(join(outbox, file), reverseText(data), error => {
            if (error) return console.log("Error: File could not be saved!");
            console.log(`${file} was successfully saved in the outbox!`);
          });
        });
      });
    });
    */