import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import '../sass/components/cardDisplay.scss'
import '../sass/main.scss'
export default class cardDisplay extends Component {
    render() {
        return (
            <div className="container-fluid body vh-100">
                <Card className="width effect">
                <Card.Img variant="top" className="width" src="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg"/>
                    <Card.Body className="container bg text width">
                    <Card.Title className="title">Project Name</Card.Title>
                        Testing data : project example
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
