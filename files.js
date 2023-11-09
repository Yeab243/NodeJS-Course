const fs = require('fs')


//reading files
// fs.readFile('./docs/blog1.txt', (err, data)=>{
//   if(err){
//     console.log(err);
//   }
//   console.log(data.toString());
// })

//writing files
// fs.writeFile('./docs/blog1.txt', 'Whats up!',()=>{
//     console.log("Text updated successfully!")
// })

// fs.writeFile('./docs/blog2.txt', 'Whats up!',()=>{
//     console.log("Text updated successfully!")
// })

//directories (Folders)
// if (!fs.existsSync('./assests')){
//     fs.mkdir('./assests',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("Folder created")
//     })
// } else{
//     fs.rmdir('./assests', (err)=>{
//         if(err){
//             console.log(err);
//         } else{
//             console.log("Folder removed!")
//         }
//     })
// }


//deleting files

if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('file deleted!')
    })
}