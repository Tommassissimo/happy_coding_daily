var flatten_v1 = function (array) {
	//flatten an array
	return JSON.parse("["+array.toString()+"]");
}

function flatten_v2(array){
    var flat = [];
    for (var i = 0, l = array.length; i < l; i++){
        var type = Object.prototype.toString.call(array[i]).split(' ').pop().split(']').shift().toLowerCase();
        console.log("Type:",type);
        if (type) { 
        	flat = flat.concat(/^(array|collection|arguments|object)$/.test(type) ? flatten(array[i]) : array[i]); 
        }
    }
    return flat;
}
function flatten (array) {
	var output = [];
	for (var i = 0; i < array.length; i++) {
		var type = array[i] instanceof Array;
		if (type) {
			output = output.concat(flatten(array[i]));
		}else{
			output = output.concat(array[i]);
		}
	}
	return output;
}
console.log(flatten([1, [2], [3, [[4]]],5,[6,7]]));