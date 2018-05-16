import React, { Component } from "react";

import { Menu } from "semantic-ui-react";

export default class TrainingMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fluid>
        <Menu.Item
          name="Nogi"
          active={activeItem === "Nogi"}
          onClick={this.handleItemClick}
        >
          Nogi
        </Menu.Item>

        <Menu.Item
          name="Ramiona"
          active={activeItem === "Ramiona"}
          onClick={this.handleItemClick}
        >
          Ramiona
        </Menu.Item>

        <Menu.Item
          name="Klatka"
          active={activeItem === "Klatka"}
          onClick={this.handleItemClick}
        >
          Klatka
        </Menu.Item>

        <Menu.Item
          name="Plecy"
          active={activeItem === "Plecy"}
          onClick={this.handleItemClick}
        >
          Plecy
        </Menu.Item>
      </Menu>
    );
  }
}
