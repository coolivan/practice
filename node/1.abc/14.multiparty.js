let multiparty = require('multiparty');
let http = require('http');


http.createServer((req,res)=>{
    let form = new multiparty.Form({
        uploadDir:'./upload'
    });

    // form.parse(req);
    // form.on('field',(name,value)=>{
    //     console.log(name,value);
    // });
    // form.on('file',(name,file)=>{
    //     console.log(name,file);
    // })
    // form.on('close',()=>{
    //     console.log('ok');
    // })
    
    /*结果如下
    name admin
    password 456
    file { fieldName: 'file',
      originalFilename: '多指操作.zip',
      path: 'upload\\_HIrkznZqIizGPKHM0wOA5Qb.zip',
      headers:
       { 'content-disposition': 'form-data; name="file"; filename="多指操作.zip"',
         'content-type': 'application/zip' },
      size: 5508 }
    */


    form.parse(req,(err,fields,files)=>{
        console.log(fields,files);
    })
    /**
     * { name: [ 'admin' ], password: [ 'abd' ] } { file:
       [ { fieldName: 'file',
       originalFilename: '多指操作.zip',
       path: 'upload\\VUmbahtSR39V0Hfe9NSxBeDg.zip',
       headers: [Object],
       size: 5508 } ] }
     */


     
}).listen(3000)



