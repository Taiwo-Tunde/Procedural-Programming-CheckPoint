function dot_product(vector1, vector2) {
  let result = 0;
  for (let i = 0; i < vector1.length; i++) {
    for (let i = 0; i < vector2.length; i++) {
      result += vector1[i] * vector2[i];
    }
  }

  if (result === 0) {
    return (
      "Since the result is " +
      result +
      " " +
      "," +
      "Then the vectors are orthogonal vectors "
    );
  } else {
    return "Since the result is not Zero,Then the vectors are Not orthogonal vectors ";
  }
}
console.log(dot_product([1, 1, 6], [1, -1, 6]));
