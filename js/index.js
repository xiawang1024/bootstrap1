$(function(){
	$("#drop-list .dropdown-menu a").click(function(){
		var href=$(this).attr("data-tab");
		$("#tab-list a[href='"+href+"']").tab("show");
	});
});