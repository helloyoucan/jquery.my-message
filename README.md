# jquery.my-message
一个消息提醒的jq插件

---

浏览器支持：IE8+



#### html

```html
<button id="btn1">普通的</button>
		<button id="btn2">成功的</button>
		<button id="btn3">警告的</button>
		<button id="btn4">错误的</button>
```

调用方式及参数说明

```javascript
var message = new MyMessage.message({
			/*默认参数，下面为默认项*/
			iconFontSize: "20px", //图标大小
			messageFontSize: "12px", //信息字体大小
			showTime: 3000, //消失时间
			align: "center", //显示的位置
			positions: { //放置信息的范围
				top: "10px",
				bottom: "10px",
				right: "10px",
				left: "10px"
			},
			message: "这是一条消息", //消息内容
			type: "normal", //消息的类型，还有success,error,warning等
});
message.setting({
	align: "right" //会覆盖前面的设置,可以创建不同的对象去避免覆盖
});
$('#btn1').click(function() {
	message.add("普通的消息");
});
$('#btn2').click(function() {
	message.add("成功的消息", "success");
});
$('#btn3').click(function() {
	message.add("警告的消息", "warning");
});
$('#btn4').click(function() {
	message.add("错误的消息", "error");
});
```

####　显示结果

![](http://opok8iwaa.bkt.clouddn.com/image/github/message/message.jpg)

