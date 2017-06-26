const CHART = document.getElementById("myChart");
console.log(CHART)
let lineChart = new Chart(CHART, {
	type: 'radar',
    data: {
        datasets: [{
            label: 'First dataset',
            data: [0, 20, 40, 50]
        }],
        labels: ['January', 'February', 'March', 'April']
    },
});