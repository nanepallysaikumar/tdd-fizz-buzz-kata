const fizBuzzRule = {
  matches: (number) => number % 3 === 0 && number % 5 === 0,
  getReplacementText: () => "FizzBuzz",
};

export { fizBuzzRule };
