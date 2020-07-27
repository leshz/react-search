import * as React from "react";
import { mount, shallow } from "enzyme";
import { HeaderNav } from "../../components/Header";

describe("Test Header Nav", () => {
  test("Render Component", () => {
    const header = mount(<HeaderNav />);
    expect(header.length).toEqual(1);
  });
  test("Test title", () => {
    const header = shallow(<HeaderNav />).dive();
    const node = header.find("h1");
    expect(node.length).toEqual(1);
  });
});
