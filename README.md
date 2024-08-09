# Backend-A2
Node.js File Editor

Here's a breakdown of the code:

We import the required modules: fs for file system operations and path for handling file paths.
We extract the operation, file, and content from process.argv.
We use a switch statement to handle different operations:

read: Reads and outputs the contents of the specified file.
delete: Deletes the specified file.
create: Creates a new empty file with the specified name.
append: Appends the given content to the specified file, adding a new line before the content.
rename: Renames the specified file to the new name provided.
list: Lists all files and directories in the specified directory (or current directory if not specified).


Each operation includes error handling to provide informative messages if something goes wrong.
The code checks for the presence of required arguments before performing operations.

To use this file editor, we can run commands as specified in our problem statement. For example:

node index.js read test.txt
node index.js append test.txt "new content"
node index.js delete test.txt
node index.js create test.txt
node index.js rename test.txt new.txt
node index.js list .