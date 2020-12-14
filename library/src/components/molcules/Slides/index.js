import Slide from "../../atoms/Slide/index";

const Slides = ({ innerTexts }) => {
  return innerTexts.map((innerText) => <Slide innerText={innerText} />);
};

export default Slides;
