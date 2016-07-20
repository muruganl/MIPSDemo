// Pie Definition page
window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer",
	{
		animationEnabled: true,
		legend: {
			verticalAlign: "bottom",
			horizontalAlign: "center"
		},
		theme: "theme1",
		data: [
		{        
			type: "pie",
			indexLabelFontFamily: "Raleway",       
			indexLabelFontSize: 20,
			indexLabelFontWeight: "bold",
			startAngle:0,
			indexLabelFontColor: "white",       
			indexLabelLineColor: "darkgrey", 
			indexLabelPlacement: "inside", 
			toolTipContent: "{name}",
			showInLegend: true,
			indexLabel: "#percent%", 
			dataPoints: [
				{  y: 50, name: "Quality", label: "Quality"},
				{  y: 10, name: "Cost", label: "Cost"},
				{  y: 15, name: "CPI", label: "CPI"},
				{  y: 25, name: "ACI", label: "ACI"}
			
			]
		}
		]
	});
	chart.render();
}