
var x = 0; 

var toHex = function (n) {
	var hex = n.toString(16);
	while (hex.length < 2) {
		hex = '0' + hex;
	}
	return hex;
};

while (x < 256) {
	var rect = new Rect(x, x, x + x + x, x + x + x);
		rect.addTo(stage)
		.attr('fillColor', '#' + 
			toHex(x) + 
			toHex(x) + 
			toHex(x));
	x++;	
}