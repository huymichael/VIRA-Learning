import {createMuiTheme} from '@material-ui/core';
import {Colors} from './base/variables';

const typography = {};

const palette = {
    common: {
        white: Colors.white,
        green: Colors.green,
        red: Colors.red,
    },
    primary: {
        main: Colors.primary,
    },
    secondary: {
        main: Colors.secondary,
    },
    error: {
        main: Colors.red,
    },
    success: {
        main: Colors.green,
    },
};

const viraTheme = createMuiTheme({
    palette: palette,
});

export default viraTheme;