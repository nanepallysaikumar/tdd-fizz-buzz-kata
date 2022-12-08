import { generateNumberListByMaxCount } from "./utility/generateNumberList";
import { getReplacementTextByNumber } from "./validator/fizzBuzzRuleValidator";
import { ParaGraph } from "./components/ParaGraph";

const DEFAULT_MAX_COUNT = 100;

function App() {
  return (
    <div className="App">
      {generateNumberListByMaxCount(DEFAULT_MAX_COUNT).map((item, index) => (
        <ParaGraph
          key={index}
          item={getReplacementTextByNumber(item)}
          index={index}
        />
      ))}
    </div>
  );
}

export default App;
