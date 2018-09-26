// from data.js
var sightings = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the submit buttons
var submitDate = d3.select("#date-btn");
var submitCountry = d3.select("#countries");
var submitState = d3.select("#states");
var submitCity = d3.select("#location-btn");
var submitShape = d3.select("#shape-btn");

// Date dropdown
var dateDropDown = d3.select("#datetime").append("select").attr("id", "date");
var dateOptions = dateDropDown.selectAll("option").data(d3.map(data, function(d){return d.datetime;}).keys()).enter().append("option");
dateOptions.text(function(d) {return d;}).attr("id", function(d) {return d;});

submitDate.on("click", function() {

    // // Clear old table
    d3.select("tbody").html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value property of the input element
    var dateValue = d3.select("#date").property("value");
    
    var filteredDate = sightings.filter(sighting => sighting.datetime === dateValue);

    filteredDate.forEach((filteredDate) => {
        var row = tbody.insert("tr");
        Object.entries(filteredDate).forEach(([key, value]) => {
        var cell = tbody.insert("td");
        cell.text(value);

        });
    });
});

// Country dropdown
var countryDropDown = d3.select("#countries").append("select").attr("id", "country");
var countryOptions = countryDropDown.selectAll("option").data(d3.map(data, function(d){return d.country;}).keys()).enter().append("option");
countryOptions.text(function(d) {return d;}).attr("id", function(d) {return d;});

submitCountry.on("click", function() {

        // Clear old table
        d3.select("tbody").html("");

        // Clear old dropdown
        d3.select("#states").html("");
    
        // Prevent the page from refreshing
        d3.event.preventDefault();
    
        // Get the value property of the input element
        var countryValue = d3.select("#country").property("value");
       
        var filteredCountry = sightings.filter(sighting => sighting.country === countryValue
                                                        );

        var stateList = d3.map(filteredCountry, function(d){return d.state;}).keys();

        filteredCountry.forEach((filteredCountry) => {
            var row = tbody.insert("tr");
            Object.entries(filteredCountry).forEach(([key, value]) => {
            var cell = tbody.insert("td");
            cell.text(value);
            });
        });
// State dropdown
var stateDropDown = d3.select("#states").append("select").attr("id", "state");
var stateOptions = stateDropDown.selectAll("option").data(stateList).enter().append("option");
stateOptions.text(function(d) {return d;}).attr("id", function(d) {return d;});
    
});

submitState.on("click", function() {

            // Clear old table
            d3.select("tbody").html("");

            // Clear old dropdown
            d3.select("#cities").html("");

            // Prevent the page from refreshing
            d3.event.preventDefault();

            // Get the value property of the input element
            var stateValue = d3.select("#state").property("value");
            var countryValue = d3.select("#country").property("value");
   
            var filteredState = sightings.filter(sighting => sighting.state === stateValue
                                                          && sighting.country === countryValue
                                                            );

            var cityList = d3.map(filteredState, function(d){return d.city;}).keys();
            
            filteredState.forEach((filteredState) => {
                var row = tbody.insert("tr");
                Object.entries(filteredState).forEach(([key, value]) => {
                var cell = tbody.insert("td");
                cell.text(value);
                });
            });

// City dropdown
var cityDropDown = d3.select("#cities").append("select").attr("id", "city");
var cityOptions = cityDropDown.selectAll("option").data(cityList).enter().append("option");
cityOptions.text(function(d) {return d;}).attr("id", function(d) {return d;});

});

submitCity.on("click", function() {

                // Clear old table
                d3.select("tbody").html("");

                // Prevent the page from refreshing
                d3.event.preventDefault();

                // Get the value property of the input element
                var cityValue = d3.select("#city").property("value");
                var stateValue = d3.select("#state").property("value");
                var countryValue = d3.select("#country").property("value");
   
                var filteredCity = sightings.filter(sighting => sighting.city === cityValue
                                                              && sighting.state === stateValue
                                                              && sighting.country === countryValue
                                                                );

                filteredCity.forEach((filteredCity) => {
                    var row = tbody.insert("tr");
                    Object.entries(filteredCity).forEach(([key, value]) => {
                    var cell = tbody.insert("td");
                    cell.text(value);
                });
            });
        });


// Shape dropdown
var shapeDropDown = d3.select("#shapes").append("select").attr("id", "shape");
var shapeOptions = shapeDropDown.selectAll("option").data(d3.map(data, function(d){return d.shape;}).keys()).enter().append("option");
shapeOptions.text(function(d) {return d;}).attr("id", function(d) {return d;});

submitShape.on("click", function() {

                    // Clear old table
                    d3.select("tbody").html("");

                    // Prevent the page from refreshing
                    d3.event.preventDefault();

                    // Get the value property of the input element
                    var shapeValue = d3.select("#shape").property("value");

   
                    var filteredShape = sightings.filter(sighting => sighting.shape === shapeValue
                                                            );

                    filteredShape.forEach((filteredShape) => {
                        var row = tbody.insert("tr");
                        Object.entries(filteredShape).forEach(([key, value]) => {
                        var cell = tbody.insert("td");
                        cell.text(value);
                        });
                    });
                });
            
