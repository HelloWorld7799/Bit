import { createElement } from "lwc";
import MyEventTesting from "c/myEventTesting";

describe("c-my-event-testing suite", () => {
  beforeEach(() => {
    const element = createElement("c-my-event-testing", {
      is: MyEventTesting
    });
    document.body.appendChild(element);
  });
  test("Hello", () => {
    const element = document.querySelector("c-my-event-testing");
    const text = element.shadowRoot.querySelector("p");
    expect(text.textContent).toBe("Hello, World!");
  });
});
