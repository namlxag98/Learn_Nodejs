var fs=require('fs');



fs.readFile('input.txt',(err,data)=>{
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});

console.log('The End.')