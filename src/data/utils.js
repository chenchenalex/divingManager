export const getDives = ({ diveById }) => {
  return Object.keys(diveById).map(id => diveById[id]);
};
