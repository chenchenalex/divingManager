import diveTableContainer from "./components/diveTable/diveTableContainer";
import AddNew from "./components/buttons/addNew";
import DeleteBtn from "./components/buttons/delete";
import DiveTable from "./components/diveTable/diveTable";
import { prevState as mockState } from "../../mock.data";
import { getDives } from "src/data/utils";

import React from "react";
import { StaticRouter, MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";

describe("Dive list: dive table container tests", () => {
  it("onSelectAll: should select all dives or deselect them all", () => {});
});

describe("Dive list: Snapshots tests", () => {
  it("addNew: should render correctly", () => {
    const addNewButton = renderer.create(
      <StaticRouter context={{}}>
        <AddNew />
      </StaticRouter>
    );

    expect(addNewButton).toMatchSnapshot();
  });

  it("delete button: should render correctly", () => {
    const onDelete = jest.fn();
    const state = { selected: [] };

    const deleteBtn = renderer.create(
      <MemoryRouter>
        <DeleteBtn onDelete={onDelete} state={state} />
      </MemoryRouter>
    );

    expect(deleteBtn).toMatchSnapshot();
  });

  it("Dive table: should render correctly", () => {
    const onSelect = jest.fn();
    const onSelectAll = jest.fn();
    const state = { selected: [] };

    const diveTable = renderer.create(
      <MemoryRouter>
        <DiveTable
          state={state}
          tableData={getDives({ diveById: mockState })}
          onSelect={onSelect}
          onSelectAll={onSelectAll}
        />
      </MemoryRouter>
    );

    expect(diveTable).toMatchSnapshot();
  });
});
