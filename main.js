function calculateCircleArea(radius) {
    return Math.PI * radius * 2;
  }
  
  function calculateCirclePerimeter(radius) {
    return 2 * Math.PI * radius;
  }
  
  // Get the radius from the user
  let radius = parseFloat(prompt("Enter the radius of the circle:"));
  
  // Calculate and display the area
  let area = calculateCircleArea(radius);
  console.log("The area of the circle is: " + area);
  
  // Calculate and display the perimeter
  let perimeter = calculateCirclePerimeter(radius);
  console.log("The perimeter of the circle is: " + perimeter);
  