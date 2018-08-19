const getDives = ({ diveById }) => {
  if (typeof diveById === "undefined") return [];

  return Object.keys(diveById).map(id => diveById[id]);
};

export default getDives;
