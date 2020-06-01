/* postMessage API */

/*  参数说明 */
window.postMessage(data, origin)  // JSON.strinify({name: "hejiamin"}) 
// origin 目标窗口的源， 协议+主机+端口号[+URL]

/* 1 */
var openWindow = window.open();
openWindow.postMessage()

/* 2 */
window.opener.postMessage()

/* 3 */
window.addEventListener("message", function(event){
	console.log(event.data);
	// event.origin  调用 postMessage 时消息发送方窗口的origin
	event.source.postMessage();  // 双向通信, event.source代表发送方window
})