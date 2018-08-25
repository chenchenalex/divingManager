const getDives = ({ diveById }) => {
  if (typeof diveById === "undefined") return [];

  return Object.keys(diveById).map(id => diveById[id]);
};

export const getCurrentGeoLocation = () => {
  if (navigator.geolocation) {
    /* Get user current geolocation */
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) =>
          resolve({ lat: latitude, lng: longitude }),
        error => reject(error)
      );
    });
  }

  console.error("Unable to get current location!");
  return Promise.resolve({
    lat: -34.397,
    lng: 150.644
  });
};

export default getDives;
