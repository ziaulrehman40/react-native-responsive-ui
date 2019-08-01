import { Component } from "react";
import { Dimensions } from "react-native";
export default class ResponsiveComponent extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            // eslint-disable-next-line react/no-unused-state
            window: Dimensions.get("window")
        };
        this.onDimensionChange = (dims) => this.setState(dims);
    }
    componentWillMount() {
        Dimensions.addEventListener("change", this.onDimensionChange);
    }
    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.onDimensionChange);
    }
}
