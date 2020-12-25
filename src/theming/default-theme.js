import { createMuiTheme } from '@material-ui/core'
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: blue[700]
        }
    }
})

export default theme;