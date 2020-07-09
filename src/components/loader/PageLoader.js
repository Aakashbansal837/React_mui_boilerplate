import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';


class PageLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true
    }
  }
  componentDidMount() {
    this.setState({ loader: false })
  }
  render() {
    return (
      <div>
        {
          this.state.loader || this.props.loading ?
            <div className="ns-api-loader-ctnr">
              <CircularProgress className="ns-api-loader" />
            </div>
            : null
        }
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  loading: state.app.pageLoading
})

export default connect(mapStateToProps, {})(PageLoader);