import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSinglePosting } from './actions'

class Posting extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { postingId } = this.props.match.params
    this.requestSinglePostingData(postingId)
  }

  requestSinglePostingData(postingId) {
    const { fetchSinglePosting } = this.props;
    fetchSinglePosting(postingId)
  }

  render() {
    const { currentPosting } = this.props;
    return (
      <div>
        {
          currentPosting && (
            <h1>
              {currentPosting.title}
            </h1>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    currentPosting
  } = state.Posting;

  return {
    currentPosting
  }
}

const mapDispatchToProps = {
  fetchSinglePosting
}

export default connect(mapStateToProps, mapDispatchToProps)(Posting);