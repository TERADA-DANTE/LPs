import { Fullpage as F } from "fullpage-react";
import { Slide } from "fullpage-react";
const slides = [
  <div>hi</div>,
  "SLide two",
  "SLide three",
  "SLide four",
].map((v) => <Slide>{v}</Slide>);

const options = {
  // For PC
  scrollSensitivity: 0,

  // For Mobile
  touchSensitivity: 0,

  // Other options
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true,
  slides,
};
const Full = () => <F {...options} />;

export default Full;
