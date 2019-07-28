import React from "react";
import PropTypes from "prop-types";
import {
  FaHome,
  FaUser,
  FaDashboard,
  FaTable,
  FaImage,
  FaCcDiscover
} from "react-icons/lib/fa";
import MainMenu from "./style";
import MenuItem from "./componnents/menuItem";

const iconSet = { FaHome, FaUser, FaDashboard, FaTable, FaImage, FaCcDiscover };

class Menu extends React.PureComponent {
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
                  isActive={this.props.location.pathname === url}
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
  location: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired
};

Menu.defaultProps = {
  location: {}
};

export default Menu;
