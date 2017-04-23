/**
 * 入口文件
 * */
require.config({
	//baseUrl: "js/", //基于的路径,如果和require.js同一目录下，则不用
	paths: {
		jquery: 'jquery1.9.min',
		/*外部引用时的名称：相应的文件名（也可以在此添加路径）*/
	},
	shim: {
		/*文件名*/
		'jquery.my-message.1.1': {
			/*该模块的依赖*/
			//deps: ['jquery1.9.min'],/*因为在paths{}里面已经引用，所以不用再引进依赖项*/
			exports: 'MyMessage' /*该模块对外提供的接口*/
		},
	}
});

//require(['jquery', 'AMD-jquery.my-message.1.1'], function($, m) {
require(['jquery', 'jquery.my-message.1.1'], function($, m) {
	var message = new m.message({
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
});