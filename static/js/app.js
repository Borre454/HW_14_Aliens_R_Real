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
//Select input from search bar
	var dateInput = d3.select("#datetime").node().value;
  	console.log(dateInput);
//filter data based on user input
  	var filteredData = tableData.filter(date => date.datetime ===dateInput);
  	console.table(filteredData)
//Remove Data from table
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
  	
//Select filter button and function handle
var submit = d3.select("#filter-btn").on("click", handleSubmit)



