import { createElement } from "lwc";
import ChildCom from "c/childCom";
const userData = {
  Name: "Ashok",
  id: 1
};
const pData = "Sorry No Data";

describe("c-hello", () => {
  it("Data Checking True Condition", () => {
    // Create element
    const element = createElement("c-hello", {
      is: ChildCom
    });
    element.userDetails = userData;
    document.body.appendChild(element);

    // Verify displayed greeting
    const div = element.shadowRoot.querySelector(".userName");
    expect(div.textContent).toBe(userData.Name);
  });

  it("Data Checking False Condition", () => {
    // Create element
    const element = createElement("c-hello", {
      is: ChildCom
    });

    document.body.appendChild(element);

    // Verify displayed greeting
    const div = element.shadowRoot.querySelector("p");
    expect(div.textContent).toBe(pData);
  });
});
