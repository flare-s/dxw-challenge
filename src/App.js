import Header from "./components/Header/Header";
import ResultsSection from "./components/ResultsSection/ResultsSection";
import { useState } from "react";
function App() {
  const [result, setResult] = useState(undefined);
  return (
    <>
      <Header setResult={setResult} />
      <main>
        <ResultsSection result={result} setResult={setResult} />
      </main>
    </>
  );
}

export default App;
