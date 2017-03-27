var server = "http://musicapi.duapp.com/api.php"

function getPlayList() {
	$.ajax({
		type: "get",
		url: server + "?type=topPlayList&cat=全部&offset=0&limit=6",
		async: true,
		success: function(data) {
			if(data.code == 200) {
				Console.log(data.playlists)

			}
		}

	});
}
(function() {
	getPlayList(function a(data) {
			var songlist = $("#songlist")
			var template = $("#templateItem").html();
			for(var i = 0; i < 6; i++) {
				
				$(tempate).find("div").html(data[i].playCont);
				$(tempate).find("img").attr("src",data[i].cover.ImgUrl);
				$(tempate).find("p").html(data[i].name);
				
				$(tempate).appendTo(songlist)
			}
		}

	)
})()

/*(function() {
	getPlayList();
	var songlist = $("#songlist")
	var template = $("#templateItem").html();
	for(var i = 0; i < 6; i++) {
		$(tempate).appendTo(songlist)
	}
})()*/