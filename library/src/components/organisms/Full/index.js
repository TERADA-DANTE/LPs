import { F } from "fullpage-react";
import Slides from "../../molcules/Slides/index";
const innerTexts = ["Slide one", "SLide two", "SLide three", "SLide four"];
const options = {
  // For PC
  scrollSensitivity: 0,

  // For Mobile
  touchSensitivity: 0,

  // Other options
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true,
  slides: <Slides innerTexts={innerTexts} />,
};
const FullPage = () => <F {...options} />;

export default FullPage;
