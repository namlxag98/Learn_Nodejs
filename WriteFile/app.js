var fs= require('fs');
var path= "D:\\GitHub\\Learn_Nodejs\\WriteFile\\test.txt"; 
// (trong node js phai dung dau \\)
var data = "Doc va viet tu file txt";

WriteFile(path,data);

function WriteFile(path,data) {

    fs.writeFileSync(path,data);
    console.log("Success");
}