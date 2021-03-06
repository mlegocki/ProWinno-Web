import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostingRow from '../../components/PostingRow';

import { fetchPostings } from '../App/actions'

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.requestData();
  }

  requestData() {
    const { fetchPostings } = this.props;
    fetchPostings()
  }
  render() {
    const { postings } = this.props;
    return (
      <div className='HomePage-master-container'>
        <div className='HomePage-container-left'>
        </div>
        <div>
          {
            postings &&
            postings.map(posting =>
              <PostingRow key={posting._id} posting={posting} />
            )
          }
        </div>
        <div className='HomePage-container-right'>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { postings } = state.App
  return {
    postings
  }
}

const mapDispatchToProps = {
  fetchPostings
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
