/**
 * This script is used to replace class names in JSX files with Tailwind CSS namespaced class names.
 * It'll get you part of the way there, but since it only catches neatly formatted "className=" attributes,
 * you'll still need to manually replace any class names that are used in other ways (e.g. as variables).
 */

const fs = require("fs");
const path = require("path");

// Regex pattern to match class names within className attribute
const regex =
  /(?<=className=".*)(?!\bxs:)(?!\bsm:)(?!\bmd:)(?!\blg:)(?!\bxl:)([\[\]\/#a-zA-Z0-9_-]+)(?!:)(?=.*")/g;

// Function to recursively process files in a directory
function processFiles(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error("Error getting file stats:", err);
          return;
        }

        if (stats.isDirectory()) {
          // If directory, recursively process its files
          processFiles(filePath);
        } else if (filePath.endsWith(".jsx")) {
          // If file is a .jsx file, process it
          processJSXFile(filePath);
        }
      });
    });
  });
}

// Function to process a single .jsx file
function processJSXFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }

    // Apply regex replacement
    const modifiedData = data.replace(regex, "gw-$1");

    // Write modified data back to the file
    fs.writeFile(filePath, modifiedData, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log(`File ${filePath} processed successfully.`);
    });
  });
}

// Start processing files in the specified directory
const directoryPath = "./src"; // Replace this with your directory path
processFiles(directoryPath);
