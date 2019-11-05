import React, { Component } from "react";
import { ApolloConsumer } from "react-apollo";
import { ApolloClient } from "apollo-boost";

export default class EditMode extends Component {
  render() {
      const { isEditMode } = this.props
    return (
      <ApolloConsumer>
        {client => (
          <button
            className="button"
            onClick={() => {
              client.writeData({ data: { isEditMode: !isEditMode } });
            }}
          >
            Toggle Edit Mode
          </button>
        )}
      </ApolloConsumer>
    );
  }
}
