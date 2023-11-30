import * as Groundwork from "../../../lib";
import { GoCopilot } from "react-icons/go";
import { VscDebugAll } from "react-icons/vsc";

const Buttons = () => {
  return (
    <section style={{ margin: "1rem" }}>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>Normal body text here</p>
      <pre>code looks like this</pre>
      <div style={{ marginTop: "10px" }}>
        <Groundwork.MenuButton variant="filled" color="dark">
          Some Menu Here
        </Groundwork.MenuButton>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Groundwork.IconButton size="xs" style={{ marginRight: "1rem" }}>
          <GoCopilot />
        </Groundwork.IconButton>
        <Groundwork.IconButton size="sm" style={{ marginRight: "1rem" }}>
          <GoCopilot />
        </Groundwork.IconButton>
        <Groundwork.IconButton size="md" style={{ marginRight: "1rem" }}>
          <GoCopilot />
        </Groundwork.IconButton>
        <Groundwork.IconButton size="lg" style={{ marginRight: "1rem" }}>
          <GoCopilot />
        </Groundwork.IconButton>
        <Groundwork.IconButton size="xl" style={{ marginRight: "1rem" }}>
          <GoCopilot />
        </Groundwork.IconButton>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Groundwork.ButtonGroup orientation="horizontal" radius={0.25}>
          <Groundwork.Button variant="light">Left</Groundwork.Button>
          <Groundwork.Button variant="light">Button</Groundwork.Button>
          <Groundwork.Button variant="light">Right</Groundwork.Button>
        </Groundwork.ButtonGroup>
      </div>
      <div>
        <Groundwork.Button
          size="xs"
          style={{ marginRight: "1rem" }}
          leftSection={<GoCopilot />}
        >
          Button
        </Groundwork.Button>
        <Groundwork.Button size="sm" style={{ marginRight: "1rem" }}>
          Button
        </Groundwork.Button>
        <Groundwork.Button size="md" style={{ marginRight: "1rem" }}>
          Button
        </Groundwork.Button>
        <Groundwork.Button
          size="lg"
          style={{ marginRight: "1rem" }}
          rightSection={<VscDebugAll />}
        >
          Button
        </Groundwork.Button>
        <Groundwork.Button size="xl" style={{ marginRight: "1rem" }}>
          Button
        </Groundwork.Button>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <Groundwork.Button
          size="md"
          variant="primary"
          style={{ marginRight: "1rem" }}
          fullWidth
        >
          Full-Width Button
        </Groundwork.Button>
      </div>

      {[
        "dark",
        "gray",
        "red",
        "pink",
        "grape",
        "violet",
        "indigo",
        "blue",
        "cyan",
        "green",
        "lime",
        "yellow",
        "orange",
        "teal",
      ].map((color) => {
        return (
          <div key={color} style={{ marginTop: "2rem" }}>
            <h2>{color}</h2>
            <Groundwork.Button
              size="md"
              variant="filled"
              color={color}
              style={{ marginRight: "1rem" }}
            >
              Button
            </Groundwork.Button>
            <Groundwork.Button
              size="md"
              variant="light"
              color={color}
              style={{ marginRight: "1rem" }}
            >
              Button
            </Groundwork.Button>
            <Groundwork.Button
              size="md"
              variant="outline"
              color={color}
              style={{ marginRight: "1rem" }}
            >
              Button
            </Groundwork.Button>
            <Groundwork.Button
              size="md"
              variant="subtle"
              color={color}
              style={{ marginRight: "1rem" }}
            >
              Button
            </Groundwork.Button>
            <Groundwork.Button
              size="md"
              variant="transparent"
              color={color}
              style={{ marginRight: "1rem" }}
            >
              Button
            </Groundwork.Button>
          </div>
        );
      })}
    </section>
  );
};

export default Buttons;
