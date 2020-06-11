
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js"></script>
<script src="ky-counties.js"></script>

<script>
var width = window.innerWidth;
var height = window.innerHeight;

var counties = {
"type": "FeatureCollection",
"features": [
{ "type": "Feature", "properties": { "COUNTYFP": "007", "NAME": "Ballard", "ALAND": 638843907 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -89.1719, 37.0682 ], [ -89.03, 37.2111 ], [ -88.9334, 37.2252 ], [ -88.816, 36.9541 ], [ -88.9888, 36.9195 ], [ -89.1008, 36.944 ], [ -89.1327, 36.9822 ], [ -89.1719, 37.0682 ] ] ] ] } },
{ "type": "Feature", "properties": { "COUNTYFP": "011", "NAME": "Bath", "ALAND": 722081626 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -83.9779, 38.1921 ], [ -83.8484, 38.2969 ], [ -83.7323, 38.2835 ], [ -83.6352, 38.1875 ], [ -83.5072, 38.0863 ], [ -83.4988, 38.0506 ], [ -83.5774, 38.0132 ], [ -83.6593, 38.0283 ], [ -83.7594, 37.9987 ], [ -83.8814, 38.1365 ], [ -83.9779, 38.1921 ] ] ] ] } } ] }

var svg = d3.select( "body" ).append( "svg" ).attr( "width", width ).attr( "height", height )

var projection = d3.geo.albers()     // create a new d3 projection function, albers equal area
    .center([0, 37.8])               // center the project within Kentucky's mid-latitude
    .rotate([85.8,0])                // rotate the globe to center with Kentucky's mid-longitude
    .scale(8000)                     // play with the scale until it's 'zoomed' about right
    .translate([width / 2, height / 2]);   // center the svg (0,0 is top, left)

var geoPath = d3.geo.path()        //  create a new geo path generator
    .projection(projection);        // assign the project we just created to it

svg.append('g')            // create and append a new SVG 'g' element to the svg
    .selectAll('path')     // selectAll the path features that haven't been created yet
    .data(counties.features)  // bind the GeoJSON features data to them
    .enter()                    // prepare to
    .append('path')        // append the newly create path elements to the 'g'
    .attr( "d", geoPath )  // define the screen coordinates of the new path(s)
    .attr('class','county');  // give each a class name of 'county'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body {
    padding: 0;
    margin: 0;
    background: whitesmoke;
}
h1 {
    position: absolute;
    left: 20px;
    top: 10px;
    font-family: "Proxima Nova", Montserrat, sans-serif;
    font-size: 2em;
    font-weight: 100;
    color: #005DAA; /* offical UK Kentucky blue */
}
.county {
    stroke: #fff;
    fill:#005DAA;
} 
</style>
