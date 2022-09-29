import React from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@mui/joy/CircularProgress';

const ApiLoader = (props) => {
  if (props.loading === true) {
    return (
      <div className="ns-api-loader-ctnr">
        <CircularProgress className="ns-api-loader" />
      </div>
    )
  }
  return null
}

const mapStateToProps = (state) => ({
  loading: state.app.apiLoading
})


export default connect(mapStateToProps, {})(ApiLoader);