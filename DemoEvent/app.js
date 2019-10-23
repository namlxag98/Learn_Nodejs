//Khai bao module
var events = require ("events");

//Tao mot doi tuong eventEmitter
var eventEmitter = new events.EventEmitter();

//Tao mot eventHandler
var connectHandler = () => {
    console.log("Ket noi thanh cong");

    //Kich hoat su kien data received
    eventEmitter.emit("data_received");
}

//Gan ket su kien connection voi su kien eventHandler
eventEmitter.on("connection",connectHandler);

//Gan su kien data_received voi mot ham an danh
eventEmitter.on("data_received", () =>{
    console.log("Du lieu da duoc nhan thanh cong");
});

//Kich hoat su kien connection
eventEmitter.emit("connection");

console.log("Ket thuc chuong trinh");