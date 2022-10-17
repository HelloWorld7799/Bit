import { createElement } from "lwc";
import LoopingExample from "c/loopingExample";
const fri = ["Apple", "Mango", "Orange"];

describe("c-loop", () => {
  beforeEach(() => {
    const element = createElement("c-loop", {
      is: LoopingExample
    });
    document.body.appendChild(element);
  });

  it("Checking length", () => {
    const element = document.querySelector("c-loop");
    const data = element.shadowRoot.querySelectorAll(".forEach>li");
    expect(data.length).toBe(3);
  });

  it("Checking  data", () => {
    const element = document.querySelector("c-loop");
    const fl = Array.from(element.shadowRoot.querySelectorAll(".forEach>li"));
    const fruitData = fl.map((li) => li.textContent);
    expect(fruitData.length).toBe(3);
    expect(fruitData).toEqual(fri);
  });

  it("Checking  Iterator First Data", () => {
    const element = document.querySelector("c-loop");
    const fle = element.shadowRoot.querySelector(
      ".iterator>li:first-child>div:first-child"
    );

    expect(fle.textContent).toBe("Start the Game");
  });

  it("Checking  Iterator Last Data", () => {
    const element = document.querySelector("c-loop");
    const fle = element.shadowRoot.querySelector(
      ".iterator>li:last-child>div:last-child"
    );

    expect(fle.textContent).toBe("End the Game");
  });
});
