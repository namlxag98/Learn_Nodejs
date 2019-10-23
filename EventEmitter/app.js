var events = require("events");
var eventEmitter = new events.EventEmitter();

//Khoi tao function listener 1
var listener1 = function listener1() {
    console.log("Listener1 duoc thuc thi")
}
var listener2 = function listener2(){
    console.log("Listener2 duoc thuc thi");
}
//Gan ket su kien voi ham listener1
//cach1
eventEmitter.addListener("connection".listener1);

//Gan ket su kien voi ham listener2
//cach2
eventEmitter.on("connection",listener2);

var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter,"connection");
console.log( eventListeners + "Event listener dang lang nghe cac su kien connection lan 1");

eventEmitter.emit("connection");

//Remove function listener1
eventEmitter.removeListener("connection",listener1);
console.log("function listener1 se khong duoc lay nghe (lan1)");

var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter,"connection");
console.log( eventListeners + "Event listener dang lang nghe cac su kien connection lan 2");
console.log("Ket thuc chuong trinh");