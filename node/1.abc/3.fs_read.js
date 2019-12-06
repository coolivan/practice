const fs = require('fs');

//fs.writeFile(path,data,cb)
//fs.readFile(path,cb)

// fs.writeFile('./fs.txt','test',err=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('ok');
        
//     }
// })

fs.readFile('./fs.txt',(err,data)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log(data.toString());
        
    }
    
})