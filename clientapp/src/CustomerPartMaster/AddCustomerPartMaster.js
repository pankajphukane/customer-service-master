import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddCustomerPartMaster extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'CustomerPartMaster',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                CustomerPartId:0,
                CustomerPartNumber:event.target.CustomerPartNumber.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            if(result=="Added Successfully"){
                alert(result);
            }
            else{
                alert('Special characters are not allowed.');
            }
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Add Customer Part Number
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="CustomerPartNumber">
                        <Form.Label>Customer Part Number</Form.Label>
                        <Form.Control type="text" name="CustomerPartNumber" required 
                        placeholder="Customer Part Number"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                        Add Customer Part Number
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}