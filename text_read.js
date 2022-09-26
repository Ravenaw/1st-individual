const fs = require('fs')
fs.readFile('./text.txt', 'utf8', (err, text) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    console.log('File data:', text) 
})