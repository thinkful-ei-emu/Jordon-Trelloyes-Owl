import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import List from "./List";

describe("<List />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<List header={"Header string"} cards={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("List snapshot", () => {
  it("Matches the snapshot", () => {
    const tree2 = renderer
      .create(
        <List
          header={"This is my header"}
          cards={[{ id: "b", title: "Second card", content: "lorem ipsum" }]}
        />
      )
      .toJSON();
    expect(tree2).toMatchSnapshot();
  });
});
