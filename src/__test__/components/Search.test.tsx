import * as React from "react";
import { mount } from "enzyme";
import { Search } from "../../components/Search";

describe("Test Search", () => {
  test("Render Component", () => {
    const header = mount(<Search submit={() => {}} />);
    expect(header.length).toEqual(1);
  });
});
