//检索关键词不能为空
$(function(){
	$("#searchBtn").click(function(){
		if($("#searchKey").val()==""||$("#searchKey").val()==null){
			alert("关键词不可为空");
		}else {
			$(location).attr('href', 'Books.html');
		}
	})
	
})
