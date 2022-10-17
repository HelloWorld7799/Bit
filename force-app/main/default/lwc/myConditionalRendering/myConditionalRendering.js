import { LightningElement } from "lwc";

export default class MyConditionalRendering extends LightningElement {
  isVisible = false;

  changeHandler(event) {
    this.isVisible = event.target.checked;
  }
}
