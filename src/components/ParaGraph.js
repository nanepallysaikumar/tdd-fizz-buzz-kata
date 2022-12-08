const ParaGraph = ({ item, index }) => (
  <p data-testid={`text-${index + 1}`}>{item}</p>
);

export { ParaGraph };
