import * as React from "react";
import { mount } from "enzyme";
import { HeaderNav } from "../../components/Header";

describe("Test Header Nav", () => {
  test("Render Component", () => {
    const header = mount(<HeaderNav />);
    expect(header.length).toEqual(1);
  });
});
