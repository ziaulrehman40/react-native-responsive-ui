var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { PixelRatio, Platform } from "react-native";
import useDimensions from "./useDimensions";
export const isInInterval = (value, min, max) => (min === undefined || value >= min) && (max === undefined || value <= max);
export const mediaQuery = ({ minWidth, maxWidth, minHeight, maxHeight, minAspectRatio, maxAspectRatio, orientation, platform, minPixelRatio, maxPixelRatio, condition }, width, height) => {
    const currentOrientation = width > height ? "landscape" : "portrait";
    return (isInInterval(width, minWidth, maxWidth) &&
        isInInterval(height, minHeight, maxHeight) &&
        isInInterval(width / height, minAspectRatio, maxAspectRatio) &&
        isInInterval(PixelRatio.get(), minPixelRatio, maxPixelRatio) &&
        (orientation === undefined || orientation === currentOrientation) &&
        (platform === undefined || platform === Platform.OS) &&
        (condition === undefined || condition));
};
export default (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { width, height } = useDimensions();
    const val = mediaQuery(props, width, height);
    if (val) {
        return children;
    }
    return null;
};
