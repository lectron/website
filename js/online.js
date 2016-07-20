		$(document).ready(function () {
			var interval = 3000;   //number of mili seconds between each call
			var refresh = function() {
			$.getJSON("//mcapi.ca/query/m.ly/players",function(json){
				  if (json.status !== true) {
					// error
					$("#players .p1").text('The server is Offline').addClass('server-error');
				} else {
					// success
					$("#players .p1").text('There are');
					$("#players .p2").text('players online');
					$(".player-count").html(json.players.online);
					setTimeout(function(){ $('.player-count').removeClass('zoomIn').addClass('zoomOut') }, 14350); 
					setTimeout(function(){ $('.player-count').removeClass('zoomOut').addClass('zoomIn') }, 0);
				}
			});
			setTimeout(function() {
				refresh();
					},
				interval);
					}
				refresh();
		});