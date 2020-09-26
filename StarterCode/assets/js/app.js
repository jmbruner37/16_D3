// @TODO: YOUR CODE HERE!
d3.csv("assets/data/data.csv", function(error, healthData) {
    if (error) return console.warn(error);

    console.log(healthData)

});