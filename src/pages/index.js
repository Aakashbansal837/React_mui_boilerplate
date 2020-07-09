import React from 'react';
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import {Button,FormControl,Select,InputLabel,MenuItem} from '@material-ui/core';

class BasePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/logo512.png" className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        <div style={{width:"100%",height : "500px",background : "#ffffff"}} className="center-all">
          <Button variant="contained" color="primary" style={{height:"48px"}}>Testing</Button>
          &nbsp;&nbsp;
          {/* <Button variant="contained" color="secondary">Testing</Button> */}

          <FormControl>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              variant="outlined"
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left"
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left"
                },
                getContentAnchorEl: null
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

        </div>

        <Typography variant="h1">Testing</Typography>
        <Typography variant="h2">Testing</Typography>
        <Typography variant="h3">Testing</Typography>
        <Typography variant="h4">Testing</Typography>
        <Typography variant="h5">Testing</Typography>
        <Typography variant="h6">Testing</Typography>
        <h1>Testing</h1>
        <h2>Testing</h2>
        <h3>Testing</h3>
        <h4>Testing</h4>
        <h5>Testing</h5>
        <h6>Testing</h6>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.app.apiLoading
});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasePage)