import { DivingListComponent } from "./components/diveTable/diveTableContainer";
import AddNew from "./components/buttons/addNew";
import DeleteBtn from "./components/buttons/delete";
import DiveTable from "./components/diveTable/diveTable";
import { divingHistory as mockState } from "src/data/mockData";
import { getDives } from "src/data/utils";
import { shallow } from "enzyme";

import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer";

const divingHistory = getDives(mockState);

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

    const selectedDives = ["test1", "test2", "test3", "test4"];

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
        value: "test1"
      }
    };

    const event2 = {
      target: {
        checked: false,
        value: "test2"
      }
    };
    // select dive

    instance.onSelect(event1);
    expect(instance.state.selected).toContain("test1");

    instance.onSelect(event2);
    expect(instance.state.selected).not.toContain("test2");
  });

  it("onDelete: should clear selected state", () => {
    const instance = container.instance();
    const event1 = {
      target: {
        checked: true,
        value: "test1"
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
