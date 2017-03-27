/*$(function() {	
	!function run(m,container){
		container=container||$("#sct")
	$.ajax({
		url:"vier/vier"+m+".html",
		success:function(data){
        container.html(data)
        lodjs(m)
		}
	}()
	function lodjs(m){
		$.ajax({
		url:"../js/vire1.js",
		dataType:"script",
		})
	}
	
	
})*/
	
/*function getUrlParams(){
	var params={};
	var url=window.location.href;
	var p=url.split("#");
	if(p.length==2)
	p=p[1];
	else
	p=url;
	p=p.split("?");
	if(p.length<2){
		params.anchor=p[0];
		return params
	}

params.anchor=p[0];
p=p[1].split("&");
for(var i=0;i<p.length;i++){
	var kv=p[i].split("=");
	params[kv[0]]=kv[1];
}
return params;
}*/

//首页负责加载二级页面
!function route(m,container ){
	container=container||$("#share");
    $.ajax({
    	type:"get",
    	url:"实训项目/vier/v"+m+".html",
    	async:true,
    	success:function(data){
    		container.html(data);
    		loadjs(m);
    	}
    }); 	
}()
function loadjs(m){
      $.ajax({
      	type:"get",
      	url:"实训项目/js/v"+m+".js",
      	async:true,
      	dataType:"script"
      });
}
$(function(){
	route("home");
});

window.onload=function(){
	
}
var box=$("#box")
$("li").each(
index,function(){
	index=this.index()
	$(this).onmouseover(function(){
		k=$(this)>$("img").attr("src");
		box>$("img").attr("src","k")
	})
}
)

