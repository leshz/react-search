import * as React from "react";
import { mount, shallow } from "enzyme";
import { SearchBox } from "../../components/SearchBox";

const searchprop = { value: "fugiat", type: 0 };

const data = [
  {
    _id: "5f0bac255aba30b1dfec055e",
    index: 0,
    isActive: true,
    conciliationName: "eu",
    sourceA: "eu",
    sourceB: "nostrud",
    balance: "$2,344.78",
    timestamp: {
      createdAt: "2016-02-14",
      updateAt: "2019-05-31",
    },
    description:
      "Culpa culpa ea enim irure in excepteur deserunt incididunt id ipsum sunt incididunt. Culpa ad minim ex magna adipisicing irure exercitation eu. Reprehenderit ullamco exercitation ullamco nisi excepteur laboris. Magna laborum nostrud fugiat irure culpa sunt sint duis in culpa ullamco labore enim proident. Pariatur est proident laborum mollit amet proident fugiat ea officia Lorem proident deserunt elit velit. Cillum minim proident magna minim laborum mollit velit quis. Eu ullamco pariatur in fugiat cillum.\r\n",
    tags: [
      "fugiat",
      "cillum",
      "exercitation",
      "occaecat",
      "veniam",
      "quis",
      "reprehenderit",
    ],
  },
];

describe("Test SearchBox", () => {
  test("Render Component", () => {
    const component = shallow(
      <SearchBox title="titulo" search={searchprop} data={data} type={0} />
    );
    const node = component.find("h1");
    expect(node.length).toEqual(0);
  });
});
