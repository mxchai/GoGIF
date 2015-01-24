var http = require('http');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

var foo = require('hyperlapsenode');

function init() {


			var hyperlapse = new Hyperlapse(document.getElementById('pano'), {
				lookat: new google.maps.LatLng(37.81409525128964,-122.4775045005249),
				zoom: 1,
				use_lookat: false,
				elevation: 50
			});

			hyperlapse.onError = function(e) {
				console.log(e);
			};



			hyperlapse.onLoadComplete = function(e) {
				hyperlapse.play();
			};

			// Google Maps API stuff here...
			var directions_service = new google.maps.DirectionsService();

			var route = {
				request:{
					origin: new google.maps.LatLng(1.422194, 103.771960),
					destination: new google.maps.LatLng(1.409350, 103.772078),
					travelMode: google.maps.DirectionsTravelMode.DRIVING
				}
			};

			directions_service.route(route.request, function(response, status) {
				if (status == google.maps.DirectionsStatus.OK) {
					hyperlapse.generate( {route:response} );
				} else {
					console.log(status);
				}
			});

		}

init();


console.log('Server running at http://127.0.0.1:1337/');