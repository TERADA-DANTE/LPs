import { Slide } from "fullpage-react";

import One from "../../molcules/Part/One/index";

const slides = [<One />, "SLide two", "SLide three", "SLide four"].map((v) => (
  <Slide>{v}</Slide>
));

export default slides;
