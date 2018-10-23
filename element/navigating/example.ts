import { step } from "@flood/element";

export default () => {
  step("Homepage", async browser => {
    await browser.visit("wordpress.loadtest.io");
    await browser.takeScreenshot();
  });
};
