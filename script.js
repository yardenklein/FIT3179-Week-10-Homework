var specWorldMap = "js/map.vg.json";

vegaEmbed('#worldmap', specWorldMap).then(function(result) {
}).catch(console.error);


var specLineGraph = "js/vis2.vg.json";

vegaEmbed('#linegraph', specLineGraph).then(function(result) {
}).catch(console.error);