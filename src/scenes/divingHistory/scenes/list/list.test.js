import { DivingListComponent } from "./components/diveTable/diveTableContainer";
import AddNew from "./components/buttons/addNew";
import DeleteBtn from "./components/buttons/delete";
import DiveTable from "./components/diveTable/diveTable";
import { prevState as mockState } from "../../mock.data";
import { getDives } from "src/data/utils";
import { shallow } from "enzyme";

import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";

const divingHistory = getDives({ diveById: mockState });

describe("Dive list: dive table container tests", () => {
  const container = shallow(
    <DivingListComponent divingHistory={divingHistory} />
  );

  it("onSelectAll: should select all dives or deselect them all", () => {
    const instance = container.instance();
    const event1 = {
      target: {
        checked: true
      }
    };

    const event2 = {
      target: {
        checked: false
      }
    };

    const selectedDives = ["abc", "def"];

    instance.onSelectAll(event1);
    expect(instance.state.selected).toEqual(selectedDives);

    instance.onSelectAll(event2);
    expect(instance.state.selected).toEqual([]);
  });

  it("onSelect: should select dive by id", () => {
    const instance = container.instance();
    const event1 = {
      target: {
        checked: true,
        value: "abc"
      }
    };

    const event2 = {
      target: {
        checked: false,
        value: "abc"
      }
    };
    // select dive

    instance.onSelect(event1);
    expect(instance.state.selected).toContain("abc");

    instance.onSelect(event2);
    expect(instance.state.selected).not.toContain("abc");
  });

  it("onDelete: should delete dive by id", () => {
    const instance = container.instance();
    const event1 = {
      target: {
        checked: true,
        value: "abc"
      }
    };

    instance.onSelect(event1);
    instance.onDelete();

    expect(instance.state.selected).toEqual([]);
  });
});

describe("Dive list: Snapshots tests", () => {
  it("addNew: should render correctly", () => {
    const addNewButton = renderer.create(
      <MemoryRouter>
        <AddNew />
      </MemoryRouter>
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
          tableData={divingHistory}
          onSelect={onSelect}
          onSelectAll={onSelectAll}
        />
      </MemoryRouter>
    );

    expect(diveTable).toMatchSnapshot();
  });
});
