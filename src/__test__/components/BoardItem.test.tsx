import * as React from "react";
import { BoardItem } from "../../components/BoardItem";
import { mount, shallow } from "enzyme";

const data = {
  _id: "5f0badf11ea4db1df39532fb",
  index: 0,
  isActive: false,
  dashboardName: "nostrud",
  visualType: [
    {
      name: "exercitation",
    },
    {
      name: "pariatur",
    },
  ],
  visuals: [
    {
      name: "laboris",
      type: "tempor",
    },
    {
      name: "cillum",
      type: "laborum",
    },
    {
      name: "voluptate",
      type: "sint",
    },
    {
      name: "nisi",
      type: "amet",
    },
  ],
  timestamp: {
    createdAt: "2014-11-11",
    updateAt: "2019-12-20",
  },
  description:
    "Nulla dolore reprehenderit proident consequat. Minim aliquip deserunt fugiat in fugiat cupidatat incididunt ad non non minim in cillum. Nostrud voluptate qui ullamco aliquip proident mollit eu est aliquip cupidatat. Proident deserunt consectetur ullamco Lorem ea occaecat enim. Anim id cupidatat quis adipisicing duis dolor aliquip aliqua. Lorem Lorem veniam occaecat sint sit deserunt nostrud tempor mollit eiusmod duis.\r\n",
  tags: [
    "labore",
    "quis",
    "occaecat",
    "deserunt",
    "irure",
    "laboris",
    "aliquip",
  ],
  selected: "labore",
};

describe("Test Search", () => {
  test("Render Component", () => {
    const header = mount(<BoardItem {...data} />);
    expect(header.length).toEqual(1);
  });
  test("Render with data", () => {
    const component = shallow(<BoardItem {...data} />).dive();
    const node = component.find("p");
    expect(node.length).toBeGreaterThan(1);
  });
});
