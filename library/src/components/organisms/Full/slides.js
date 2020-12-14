import { Slide } from "fullpage-react";

const slides = [
  <div>hi</div>,
  "SLide two",
  "SLide three",
  "SLide four",
].map((v) => <Slide>{v}</Slide>);

export default slides;
