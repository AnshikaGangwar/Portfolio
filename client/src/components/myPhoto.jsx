import React, { Component } from 'react'
import Typist from 'react-typist'

export default class MyPhoto extends Component {
    mycursor={
        color: "#E1DDDD",
        show: true,
        blink: true,
        element: '|',
        hideWhenDone: false,
        hideWhenDoneDelay: 1000,
    }

    delay=120;
    render() {
        return (
            <div className="container-fluid body vh-100 w-100">
            <Typist className="cursor" avgTypingDelay={this.delay}>
                <p><span className="me_text">PASSIONATE.</span></p>
                <p><span className="me_text">CREATIVE.</span></p>
                <p><span className="me_text">VERSATILE.</span></p>
            </Typist>
            </div>
        )
    }
}
