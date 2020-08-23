function sortStack(stackA) {
  const stackB = [];
  while (stackA.length) {
    console.log(stackA);
    console.log(stackB);

    const tmp = stackA.pop();

    console.log(stackA);
    console.log(stackB);
    console.log(tmp);

    if (!stackB.length || tmp >= [stackB.length - 1]) {
      stackB.push(tmp);
    }
    while (stackB.length && tmp < stackB[stackB.length - 1]) {
      console.log(stackA);
      console.log(stackB);
      console.log(tmp);
      stackA.push(stackB.pop());
    }
    // stackB.push(tmp);
  }
  return stackB;
}

console.log(sortStack([5, 3, 1]));
