import React, { Component } from "react";

class Test extends Component {
  state = {
    test: "test"
  };

  componentDidMount() {
    console.log("Component did mount");
  }
  componentWillMount() {
    console.log("Component will mount");
  }
  componentDidUpdate() {
    console.log("Component did update");
  }
  componentWillUpdate() {
    console.log("Component will update");
  }
  componentWillReceiveProps(nextProps, prevState) {
    console.log("Component will receive props");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      test: "Something"
    };
  }
  getSnapshotBeforeUpdate(nextProps, prevState) {
    console.log("Get Snapshot before update");
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
