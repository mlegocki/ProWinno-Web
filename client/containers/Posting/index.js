import React, { Component } from 'react';
import { connect } from 'react-redux';

class Posting extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    requestData();
  }

  render() {
    const { } = this.props;
    return (
      <div>
        <h1>
          Hello
        </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Posting);