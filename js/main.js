var button = document.getElementById("button").addEventListener("click", mainFunction);

function mainFunction() {

	var first_value = parseFloat(document.getElementById("first_value").value);
	var second_value = parseFloat(document.getElementById("second_value").value);
	var third_value = parseFloat(document.getElementById("third_value").value);
	var delta = deltaFunction(first_value,second_value,third_value);
	var roots_results = roots(first_value,second_value,delta);

    document.getElementById("result").innerHTML = "FUNKCJA POSTACI: " + 
    first_value + "x^2 + " + second_value + "x + " + third_value + "<br>" +
    "Delta: " + delta + "<br>" +
    "Pierwiastki: " + "x1 = " + roots_results[0] + ", x2 = " + roots_results[1];
    document.getElementById("first_value").value = '';
    document.getElementById("second_value").value = '';
    document.getElementById("third_value").value = '';
}

function deltaFunction(a,b,c) {

	return (b*b - 4*a*c);	
}

function roots(a,b,delta) {

	var x1 = (-b + Math.sqrt(delta))/(2*a);
	var x2 = (-b - Math.sqrt(delta))/(2*a);
	var roots_result = [x1,x2];
	return roots_result
}