import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";
import PropTypes from "prop-types";
import { compose, withProps } from "recompose";
import credentials from "src/services/apiCredentials";

const GMapWrapper = compose(
  withProps({
    googleMapURL: `
    https://maps.googleapis.com/maps/api/js?key=${
      credentials.gmap
    }&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: "100%" }} />,
    containerElement: (
      <div style={{ height: "500px", width: "500px", margin: "46px" }} />
    ),
    mapElement: <div style={{ height: "100%" }} />
  }),
  withScriptjs,
  withGoogleMap
)(({ markerPos, onDragEnd }) => (
  <GoogleMap
    defaultZoom={8}
    disableDefaultUI
    defaultCenter={markerPos || { lat: -34.397, lng: 150.644 }}
  >
    {markerPos && (
      <Marker draggable clickable position={markerPos} onDragEnd={onDragEnd} />
    )}
  </GoogleMap>
));

GMapWrapper.propTypes = {
  markerPos: PropTypes.object,
  onDragEnd: PropTypes.func.isRequired
};

GMapWrapper.defaultProps = {
  markerPos: null
};

export default GMapWrapper;
