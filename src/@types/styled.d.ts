import "styled-components";
import { palette } from "../styles/theme/defaultTheme.types";

type ThemeType = palette

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType{}
}