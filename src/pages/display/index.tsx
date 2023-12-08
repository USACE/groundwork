import * as Groundwork from "../../../lib";

const Display = () => {
  return (
    <section style={{ margin: "1rem" }}>
      <Groundwork.Card shadow="lg" radius="lg" withBorder={true}>
        <Groundwork.CardFillSection>
          <Groundwork.Image alt="saturn" src="saturn.jpg"></Groundwork.Image>
        </Groundwork.CardFillSection>
        Saturn!
      </Groundwork.Card>
    </section>
  );
};

export default Display;
