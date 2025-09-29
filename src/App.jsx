import { Suspense } from "react";
import "./App.css";
import PricingOptions from "./Components/PricingOptions/PricingOptions";
import ResultCharts from "./Components/ResultCharts/ResultCharts";
import axios from "axios";
import MarksChart from "./Components/MarksChart/MarksChart";

const pricingPromise = fetch("PricingData.json").then((res) => res.json());
const marksPromise = axios.get("marksData.json");

function App() {
  return (
    <>
      <header className="container mx-auto text-center">
        <h1> Axios JS Website </h1>
      </header>
      <main>
        <ResultCharts></ResultCharts>

        <Suspense
          fallback={
            <span className="loading loading-spinner text-error"></span>
          }
        >
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>

        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  );
}

export default App;
