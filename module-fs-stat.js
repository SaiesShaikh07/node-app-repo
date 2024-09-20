const fs = require('fs');
const filePath='output.txt';
fs.stat(filePath,(error,stats)=>{
    if (error) {
        console.error(error);
        return;
        
    }
    // Access the properties of the stats object
    console.log('file size:',stats.size+'bytes');
    console.log('Is a file:',stats.isFile());
    console.log('Is a directory: ',stats.isDirectory());
    console.log('File birthtime: ',stats.birthtime);
    console.log('File modification time: ',stats.mtime);
     
});