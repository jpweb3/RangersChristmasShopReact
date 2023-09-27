import 'styled-components';
import { Theme } from '@mui/material/styles';


// overriding styled-components usng the Theme module
// anywhere we are refrencing 'theme' in our styled components aka CSS it will look at OUR module
declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}