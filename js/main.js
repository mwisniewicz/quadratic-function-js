var button = document.getElementById("button").addEventListener("click", mainFunction);

function mainFunction() {

	
	var first_value = parseFloat(document.getElementById("first_value").value);
	var second_value = parseFloat(document.getElementById("second_value").value);
	var third_value = parseFloat(document.getElementById("third_value").value);

	if (isNaN(first_value) || isNaN(second_value) || isNaN(third_value)) {

		alert("Give the numbers!");
	}

	else {

		var delta = deltaFunction(first_value,second_value,third_value);

		if (delta < 0){

			alert("Delta is less than zero!")

		}

		else if (delta > 0) {

			var roots_results = roots(first_value,second_value,delta);

		    document.getElementById("result").innerHTML = "<h3>Function:</h3><span>" + 
		    first_value + "x^2 + " + second_value + "x + " + third_value + "</span>" +
		    "<p><strong>Delta:</strong> " + delta + "</p>" +
		    "<p><strong>Roots:</strong> " + "x1 = " + roots_results[0] + ", x2 = " + roots_results[1] + "</p>";
		    draw_plot(first_value,second_value,third_value);
		    //CLEAN INPUTS
		    document.getElementById("first_value").value = '';
		    document.getElementById("second_value").value = '';
		    document.getElementById("third_value").value = '';
			}
		}
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

function draw_plot(a,b,c) {

	const CHART = document.getElementById("myChart");
	var x = [];
	var y = [];
	var step;

	for(i = -50; i < 50; ++i){

		step = i*0.1;
  		x.push(step);
  		y.push(a*step*step + b*step + c);

		}

	let lineChart = new Chart(CHART, {
		type: 'line',
    	data: {
    		labels: x,
        	datasets: [{
            	data: y,
            	borderColor: 'rgba(74, 85, 102, 1)',
            	backgroundColor: 'rgba(74, 85, 102, 0.2)',
            	pointRadius: 1,
				fill: true,
				borderWidth: 1
        	}],
    	},
    	options: {
    		tooltips: {
            mode: 'index'
        },
        	legend: {
        		display: false
        	}
    	}
    });
}