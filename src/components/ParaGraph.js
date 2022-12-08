const ParaGraph = ({ item, index }) => (
  <p data-testid={`text-${index + 1}`} key={index}>
    {item}
  </p>
);

export { ParaGraph };
