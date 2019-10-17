$(function(){
	$("#an1").click(function(){
		if($("#an2").val()==""||$("#an2").val()==null){
			alert("关键词不可为空");
		}else {
			$(location).attr('href', 'Books.html');
		}
	})
})