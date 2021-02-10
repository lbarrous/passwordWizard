import React, {Component} from "react";

import success from './success.png';
import error from './error.png'

interface Step3Props {
    success?: boolean
}

class Step3 extends Component<Step3Props> {
    render() {
        return <img src={this.props.success ? success : error} alt="Status step"/>
    }
}

export default Step3;