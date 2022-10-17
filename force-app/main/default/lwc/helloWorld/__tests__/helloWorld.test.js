// hello.test.js
import { createElement } from "lwc";
import HelloWorld from "c/helloWorld";

describe("c-helloWorld", () => {
  it("displays greeting", () => {
    // Create element
    const element = createElement("c-hello-world", {
      is: HelloWorld
    });
    document.body.appendChild(element);

    // Verify displayed greeting
    const firstDiv = element.shadowRoot.querySelector("div.first");
    expect(firstDiv.textContent).toBe("Hello King");
  });

  it("display greeting", () => {
    // Create element
    const element = createElement("c-hello-world", {
      is: HelloWorld
    });
    document.body.appendChild(element);

    // Verify displayed greeting
    const secondDiv = element.shadowRoot.querySelector("div.second");
    expect(secondDiv.textContent).toBe("My King");
  });
});
