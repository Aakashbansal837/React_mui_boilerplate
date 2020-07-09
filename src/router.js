import React from 'react';
import Index from './pages/index';
import { Route, BrowserRouter, withRouter } from 'react-router-dom';
import { withSnackbar } from "notistack";

function Router(props) {
  return (
    <BrowserRouter>

      {/* ----Route Code---- */}
      <Route exact path="/" component={() => <Index {...props} />} />
      {/* ------------------ */}

    </BrowserRouter>
  )
}

export default withRouter(withSnackbar(Router));