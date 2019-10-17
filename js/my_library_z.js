$(function(){
	$("#Button1").click(function(){
		if($("#txtKeyWord").val()==""||$("#txtKeyWord").val()==null){
			alert("关键词不可为空");
			
		}else {
			$(location).attr('href', 'Books.html');		
		}
	});
});
