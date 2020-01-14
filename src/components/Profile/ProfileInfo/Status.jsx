import React from "react";

class Status extends React.Component {
  state = {
    updateMode: false,
    status: this.props.status
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  activeUpdateMode() {
    this.setState({
      updateMode: true
    });
  }
  deleteUpdateMode() {
    this.setState({
      status: this.props.updateStatus(this.state.status),
      updateMode: false
    });
  }
  statusValueChange(e) {
    this.setState({
      status: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        {!this.state.updateMode ? (
          <div>
            <span onDoubleClick={this.activeUpdateMode.bind(this)}>
              {this.props.status}
            </span>
          </div>
        ) : (
          <div>
            <input
              autoFocus={true}
              onChange={this.statusValueChange.bind(this)}
              onBlur={this.deleteUpdateMode.bind(this)}
              type="text"
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Status;
