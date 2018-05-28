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
    jhe1fkkjb: {
      id: "jhe1fkkjb",
      name: "kaotao OW/AOW lesson",
      location: "Thailand",
      date: "2017-03-15"
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
