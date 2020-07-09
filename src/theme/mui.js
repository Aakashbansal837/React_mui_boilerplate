import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const primaryColor = "#0275d8";

const breakpointValues = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const typographyMap = () => {
  var style = (fontSize = "16px", margin = "0 0 0.5rem 0") => {
    return {
      fontSize: fontSize,
      margin: margin,
      fontWeight: "bold"
    }
  };
  return {
    h1: style('2rem'),
    h2: style('1.5rem'),
    h3: style('1.17rem'),
    h4: style('1rem'),
    h5: style('.83rem'),
    h6: style('.67rem'),
  }
}

const buttonMap = {
  label: {
    fontSize: '15px',
    fontWeight: '600'
  },
  text: {
    textTransform: 'none'
  },
  root: {
    textTransform: 'none',
    boxShadow: 'none !important',
    '&:hover': {
      boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.2) !important'
    }
  },
  outlinedPrimary: {
    transition: "all 0.3s",
    '&:hover': {
      backgroundColor: `${primaryColor} !important`,
      color: '#ffffff'
    }
  },
  textPrimary: {
    '&:hover': {
      backgroundColor: '#fef1f1 !important'
    }
  }
}

const selectMap = {
  root: {
    padding: '14px 15px',
    borderRadius: '4px !important'
  },
  outlined: {
    border: '1px solid #000',
  }
}

const menuItemMap = {
  root: {
    '&:hover': {
      backgroundColor: '#f2f3f7'
    }
  }
}

const menuMap = {
  paper: {
    boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.12)',
    border: 'solid 1px #cdd1db'
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    contrastThreshold: 3,
    tonalOffset: 0.05,
  },
  typography: {
    fontFamily: `"Open Sans", sans-serif, color-emoji`
  },
  breakpoints: { values: breakpointValues },
  overrides: {
    MuiButton: buttonMap,
    MuiTypography: typographyMap(),
    MuiSelect: selectMap,
    MuiMenu: menuMap,
    MuiMenuItem: menuItemMap,
    MuiOutlinedInput: {
      input: {
        padding: '15.5px 14px'
      }
    },
    MuiFormLabel: {
      root: {
        color: 'black',
        'Mui-error': {
          color: '#ec4747'
        }
      }
    }
  }
});

export default function (props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}