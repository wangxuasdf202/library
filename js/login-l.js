$(function(){
	function checkPhone(){
		var regExp = /^1[34578]\d{9}$/;
		if($("#userId").val()==""||$("#userId").val()==null){
			$("#userId").css("border","1px solid #0033cc")
			$("#xh-l").html("请输入学工号！");
			return false;
		}
			//正则表达式对象的test函数，如果符合要求返回真，不符合要求返回假
//		}else if(regExp.test($("#userId").val())==false){
//			$("#userId").css("border","1px solid #ff6700")
//			$("#xh-l").html("手机号格式不正确！")
//			return false;
//		}
           else{
			return true;
		}
	}
	
	function checkPwd(){
		regExp = /^[a-zA-Z\d_]{6,}$/;
		if($("#password").val()==""||$("#password").val()==null){
			$("#password").css("border","1px solid #0033cc")
			$("#mi-l").html("请输入密码！");
			return false;
			//正则表达式对象的test函数，如果符合要求返回真，不符合要求返回假
		}else if(regExp.test($("#password").val())==false){
			$("#password").css("border","1px solid #0033cc")
			$("#mi-l").html("密码格式不正确！")
			return false;
		}else{
			return true;
		}
	}
	
	$("#userId").blur(function(){
		checkPhone();
	});
	$("#userId").focus(function(){
		$(this).css("border","1px solid #0033cc");
		$("#xh-l").html("")
	});
	
	$("#password").blur(function(){
		checkPwd();
	});
	$("#password").focus(function(){
		$(this).css("border","1px solid #0033cc");
		$("#mi-l").html("")
	});
	
	$("#log-l").click(function(){
		if(checkPhone()==true && checkPwd()==true){
			return true;
		}else{
			return false;
		}
	})
})
