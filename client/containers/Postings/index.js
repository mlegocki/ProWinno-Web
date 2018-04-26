import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPostings } from '../App/actions'

class Postings extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.match.params)
  }

  requestData(searchTerm) {
    const { fetchPostings } = this.props;
    fetchPostings(postingId)
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
  fetchPostings
}

export default connect(mapStateToProps, mapDispatchToProps)(Posting);