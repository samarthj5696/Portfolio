import Block2Carousel from "./Block2Carousel";
const Block2 = () => {
  return (
    <div className="block-background" id="Projects">
      <div className="block2">
        <div className="heads block2-heading">&#60;Personal Projects&gt;</div>
        <div className="vertical-line " style={{ marginLeft: "2em" }}></div>
        <Block2Carousel />
      </div>
    </div>
  );
};
export default Block2;
