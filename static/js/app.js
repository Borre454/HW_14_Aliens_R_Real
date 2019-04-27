// from data.js
var tableData = data;
var tbody = d3.select("tbody");

//INSERT TABLE FROM DATA
tableData.forEach(function(alienReport) {
	var row = tbody.append("tr");
	Object.entries(alienReport).forEach(function([key, value]) {
		var cell = row.append("td");
		cell.text(value);

	});
});

//Submit button handler
function handleSubmit() {
	d3.event.preventDefault();
	var dateInput = d3.select("#datetime").node().value;
  	console.log(dateInput);
  	//d3.select("#datetime").node().value = "";
  	var filteredData = tableData.filter(date => date.datetime ===dateInput);
  	console.table(filteredData)
//Remove Data
	d3.selectAll("td").remove()
//Replace with filtered data
  	filteredData.forEach(function(alienReport) {
	var row = tbody.append("tr");
	Object.entries(alienReport).forEach(function([key, value]) {
		var cell = row.append("td");
		cell.text(value);
		});
	});
};
  	


//FILTER DATA
var submit = d3.select("#filter-btn").on("click", handleSubmit)



