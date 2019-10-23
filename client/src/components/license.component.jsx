import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

class License extends Component {
    render() {
        return(
            <div>
                {/* <Card>
                    <Card.Body>{this.props.licenseName}</Card.Body>
                </Card> */}
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                {this.props.licenseName}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="mb-1">
                                {this.props.state}
                                <br/>
                                {this.props.professionalRole}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}

export default License;