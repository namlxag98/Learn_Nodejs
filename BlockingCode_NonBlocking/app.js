var fs=require('fs');

// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("End code.")

fs.readFile('input.txt',(err,data)=>{
    if(err){
        return console.error(err);
    }
    console.log(data.toString());
});

console.log('The End.')