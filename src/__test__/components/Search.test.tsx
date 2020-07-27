import * as React from "react";
import { mount, shallow } from "enzyme";
import { Search } from "../../components/Search";

describe("Test Search", () => {
  test("Render Component", () => {
    const header = mount(<Search submit={() => {}} />);
    expect(header.length).toEqual(1);
  });
  test("", () => {
    const component = shallow(<Search submit={() => {}} />).dive();
    const node = component.find("form");
    expect(node.length).toEqual(1);
  });
});
