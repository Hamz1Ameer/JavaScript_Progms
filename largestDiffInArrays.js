function findLargestDifference(arr) {
  if (arr.length < 2) {
    throw new Error("Array should have at least two elements");
  }

  let minElement = arr[0];
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // Update minElement if current element is smaller
    if (arr[i] < minElement) {
      minElement = arr[i];
    }

    // Update maxElement if current element is larger
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement - minElement;
}

// Example usage:
const inputArray = [7, 1, 5, 3, 6, 4];
try {
  const result = findLargestDifference(inputArray);
  console.log("Largest Difference:", result);
} catch (error) {
  console.error(error.message);
}

// Test Case 1: Normal case
const inputArray1 = [7, 1, 5, 3, 6, 4];
console.log("Test Case 1:", findLargestDifference(inputArray1)); // Should return 6

// Test Case 2: All elements are the same
const inputArray2 = [3, 3, 3, 3, 3];
console.log("Test Case 2:", findLargestDifference(inputArray2)); // Should return 0

// Test Case 3: Array with negative numbers
const inputArray3 = [-5, -3, -1, -8, -2];
console.log("Test Case 3:", findLargestDifference(inputArray3)); // Should return 7

// Test Case 4: Array with only two elements
const inputArray4 = [10, 20];
console.log("Test Case 4:", findLargestDifference(inputArray4)); // Should return 10

// Test Case 5: Empty array (should throw an error)
const inputArray5 = [];
try {
  console.log("Test Case 5:", findLargestDifference(inputArray5));
} catch (error) {
  console.error("Test Case 5:", error.message); // Should throw "Array should have at least two elements"
}

// Test Case 6: Array with one element (should throw an error)
const inputArray6 = [5];
try {
  console.log("Test Case 6:", findLargestDifference(inputArray6));
} catch (error) {
  console.error("Test Case 6:", error.message); // Should throw "Array should have at least two elements"
}

// Test Case 6: Array with one element (should throw an error)
const inputArray7 = [undefined, null, "1"];
try {
  console.log("Test Case 7:", findLargestDifference(inputArray6));
} catch (error) {
  console.error("Test Case 7:", error.message); // Should throw "Array should have at least two elements"
}
