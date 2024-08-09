const fs = require('fs');
const path = require('path');

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  case 'read':
    // Read file contents
    if (!file) {
      console.log('Please provide a file name to read.');
      break;
    }
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file '${file}':`, err);
      } else {
        console.log(data);
      }
    });
    break;

  case 'delete':
    // Delete file
    if (!file) {
      console.log('Please provide a file name to delete.');
      break;
    }
    fs.unlink(file, (err) => {
      if (err) {
        console.error(`Error deleting file '${file}':`, err);
      } else {
        console.log(`File '${file}' deleted`);
      }
    });
    break;

  case 'create':
    // Create new file
    if (!file) {
      console.log('Please provide a file name to create.');
      break;
    }
    fs.writeFile(file, '', (err) => {
      if (err) {
        console.error(`Error creating file '${file}':`, err);
      } else {
        console.log(`File '${file}' created`);
      }
    });
    break;

  case 'append':
    // Append content to file
    if (!file || !content) {
      console.log('Please provide both file name and content to append.');
      break;
    }
    fs.appendFile(file, '\n' + content, (err) => {
      if (err) {
        console.error(`Error appending to file '${file}':`, err);
      } else {
        console.log(`Content appended to the file '${file}'`);
      }
    });
    break;

  case 'rename':
    // Rename file
    if (!file || !content) {
      console.log('Please provide both old and new file names.');
      break;
    }
    fs.rename(file, content, (err) => {
      if (err) {
        console.error(`Error renaming file '${file}':`, err);
      } else {
        console.log(`File '${file}' renamed to '${content}'`);
      }
    });
    break;

  case 'list':
    // List directory contents
    const dir = file || '.';
    fs.readdir(dir, (err, files) => {
      if (err) {
        console.error(`Error listing directory '${dir}':`, err);
      } else {
        console.log(`Contents of directory '${dir}':`);
        files.forEach(file => console.log(file));
      }
    });
    break;

  default:
    console.log(`Invalid operation '${operation}'`);
}