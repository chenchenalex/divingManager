import React from "react";
import Loader from "src/components/loader";
import Loadable from "react-loadable";
import PropTypes from "prop-types";

const LoadableComponent = Loadable({
  loader: () => import("./diveForm"),
  loading: Loader
});

const asyncForm = ({ history, match }) => (
  <LoadableComponent history={history} match={match} />
);

asyncForm.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default asyncForm;
