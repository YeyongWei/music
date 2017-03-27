var audioController = {
		server: "http:musicapi.duapp.com/api.php"
		play: function (music) {
			$.ajax({
					type: "get",
					url: "http://musicapi.duapp.com/api.php?type=url&id=299594",
					async: true,
					success: function(data) {
						if(data.code === 200) {
							var audio = $("#Audio").get(0);
							audio.src = data.data[0].url;
							audio.play();
						}
					}
					});
			$("#audio_name").html(music.name)
             }
		}
(function(){})();
