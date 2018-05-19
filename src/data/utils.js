export const getDives = ({ diveById }) => {
  return Object.keys(diveById).map(id => diveById[id]);
};

export const genUID = function() {
  return (
    new Date().valueOf().toString(36) +
    parseInt(Math.random() * 100, 10).toString(36)
  );
};
