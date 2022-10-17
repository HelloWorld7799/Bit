import { createElement } from "lwc";
import ParentCom from "c/parentCom";
const abc = "Ashok";
describe("c-child", () => {
  beforeEach(() => {
    // Create element
    const element = createElement("c-child", {
      is: ParentCom
    });
    document.body.appendChild(element);
  });

  it("Checking Child Component in Parent Coomponent", () => {
    // Verify displayed greeting
    const element = document.querySelector("c-child");
    const childCompo = element.shadowRoot.querySelectorAll("c-child-com");
    expect(childCompo.length).toBe(1);
  });
  it("Checking Data in Parent Coomponent", () => {
    // Verify displayed greeting
    const element = document.querySelector("c-child");
    const childCompo = element.shadowRoot.querySelector("c-child-com");
    expect(childCompo.userDetails.Name).toBe(abc);
  });
});
