function calculateMinCost() {
  // Get the input value
  var input = document.getElementById("rope-lengths").value;
  
  // Split the input by comma and convert it into an array of integers
  var ropes = input.split(",").map(Number);
  
  // Sort the ropes in ascending order
  ropes.sort(function(a, b) {
    return a - b;
  });
  
  // Initialize the total cost
  var totalCost = 0;
  
  // Iterate over the ropes and calculate the total cost
  while (ropes.length > 1) {
    // Take the two smallest ropes
    var smallest1 = ropes.shift();
    var smallest2 = ropes.shift();
    
    // Connect the ropes and calculate the cost
    var cost = smallest1 + smallest2;
    
    // Add the cost to the total cost
    totalCost += cost;
    
    // Insert the connected rope back into the array
    ropes.push(cost);
    
    // Sort the array again
    ropes.sort(function(a, b) {
      return a - b;
    });
  }
  
  // Display the minimum cost in the result div
  document.getElementById("result").textContent = totalCost;
}
