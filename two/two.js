
var y = 0; 

var toHex = function (n) {
	var hex = n.toString(16);
	while (hex.length < 2) {
		hex = '0' + hex;
	}
	return hex;
};

while (y < 256) {
	for (var i=0; i < 1400; i += 50) {
		var rect = new Rect (i, y, 10 + i * 0.025, 10);
		rect.addTo(stage)
		.attr('fillColor', '#' + 
			toHex(y) + 
			toHex(y - i * 0.2) + 
			toHex(y));
	}
	y++;
}