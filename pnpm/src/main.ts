import { setupCounter } from "./counter";
import "./master";

const btnClass = "t:primary bg:neutral";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Pnpm + Vite + TypeScript</h1>
      <button id="counter" type="button" class="${btnClass}"></button>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
