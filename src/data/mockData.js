export const menuItems = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Account management", url: "/Account" },
  { id: 3, name: "Diving dashboard", url: "/dashboard" },
  { id: 4, name: "View Divings", url: "/list" },
  { id: 5, name: "Underwater gallery", url: "/gallery" },
  { id: 6, name: "Discover diving sites", url: "/discover" }
];

export const divingHistory = {
  diveById: {
    test1: {
      id: "test1",
      name: "kaotao OW/AOW lesson",
      location: "Thailand",
      date: "2017-03-15"
    },
    test2: {
      id: "test2",
      name: "Philipine diving with Eric",
      location: "Philipine",
      date: "2018-03-15"
    },
    test3: {
      id: "test3",
      name: "Free diving with sharks",
      location: "Cannes",
      date: "2019-05-25"
    },
    test4: {
      id: "test4",
      name: "Blue hold diving, first CAVE DIVE!",
      location: "Mexico",
      date: "2020-03-25"
    }
  }
};

export const tableColumnData = [
  {
    id: "name",
    numeric: false,
    label: "Name"
  },
  { id: "location", numeric: false, label: "Location" },
  {
    id: "date",
    numeric: true,
    label: "Date (YYYYMMDD)"
  }
];

export const TEST_INITIAL_DATA = {
  name: "VIRGIN Dive with AOW licence",
  location: "PHILIPINE",
  date: "2018-03-15",
  depth: 28
};
