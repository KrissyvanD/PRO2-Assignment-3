const api = {
key: "acdd0e3fbba77ba724190f904b36165a", 
base: "https://api.openweathermap.org/data/2.5/"
}

mapboxgl.accessToken = 'pk.eyJ1Ijoia3Jpc3N5dmFuZCIsImEiOiJja3EyYjNrdnMwMmVoMnZvOXpsMHMxaDVrIn0.2npdzEusPQKMRrmZXpmDSw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-96, 37.8],
  zoom: 3
});

// code from the next step will go here!
var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [4.895, 52.370]
    },
    properties: {
      title: 'Mapbox',
      description: 'Amsterdam'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-0.118, 51.509]
    },
    properties: {
      title: 'Mapbox',
      description: 'London',
      }
    },
	{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-6.155, 53.350]
    },
    properties: {
      title: 'Mapbox',
      description: 'Dublin '
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-0.375, 39.466]
    },
    properties: {
      title: 'Mapbox',
      description: 'Valencia '
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-118.243,34.052]
    },
    properties: {
      title: 'Mapbox',
      description: 'Los Angeles '
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-95.358, 29.749]
    },
    properties: {
      title: 'Mapbox',
      description: 'Houston, Texas '
    }
  },
{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [16.363,48.210]
    },
    properties: {
      title: 'Mapbox',
      description: 'Vienna '
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [12.496, 41.902]
    },
    properties: {
      title: 'Mapbox',
      description: 'Rome'
    }
  },

  ]
};

// add markers to map
geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map

function callback(weather){
	 mapMarker = new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 15 }) // add popups
    	.setHTML('<p>' + marker.properties.description + '</p>' + `${Math.round(weather.main.temp)}<span>°C</span>`)
    	)
    .addTo(map);
}
getResults(marker.geometry.coordinates[0], marker.geometry.coordinates[1],callback);

});

function getResults(lon,lat, callback){
	fetch(`${api.base}weather?lat=${lat}&lon=${lon}&units=metric&appid=${api.key}`)
	.then(weather => {return weather.json()})
	.then(callback)
		}