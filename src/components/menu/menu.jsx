import React from "react";
import MainMenu from "./style";
import PropTypes from "prop-types";
import MenuItem from "./componnents/menuItem";

import FaHome from "react-icons/lib/fa/home";
import FaUser from "react-icons/lib/fa/user";
import FaDashboard from "react-icons/lib/fa/dashboard";
import FaTable from "react-icons/lib/fa/table";
import FaImage from "react-icons/lib/fa/image";
import FaCcDiscover from "react-icons/lib/fa/cc-discover";

const iconSet = { FaHome, FaUser, FaDashboard, FaTable, FaImage, FaCcDiscover };

class Menu extends React.PureComponent {
  state = {
    pathname: "/"
  };

  componentDidUpdate() {
    this.setState({
      pathname: this.props.location.pathname
    });
  }

  render() {
    return (
      <MainMenu>
        {this.props.items &&
          this.props.items.map(
            ({ name, url, id, loginRequired, iconClass }) => {
              const isDisabled = !this.props.isAuthenticated && loginRequired;
              const Icon = iconSet[iconClass];

              return (
                <MenuItem
                  key={id}
                  icon={Icon}
                  url={url}
                  isActive={this.state.pathname === url}
                  isDisabled={isDisabled}
                >
                  {name}
                </MenuItem>
              );
            }
          )}
      </MainMenu>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  location: PropTypes.object
};

export default Menu;
