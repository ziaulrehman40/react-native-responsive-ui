// @flow
import * as _ from "lodash";
import { mediaQuery } from "./MediaQuery";
import useDimensions from "./useDimensions";
export const getStylesheet = ({ width, height }, styles) => {
    const selectedStyles = [];
    styles.forEach(style => mediaQuery(style.query, width, height)
        ? selectedStyles.push(style.style)
        : undefined);
    return _.merge.apply(null, selectedStyles);
};
export const useStylesheet = (styles) => {
    const dimensions = useDimensions();
    return getStylesheet(dimensions, styles);
};
