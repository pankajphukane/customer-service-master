import React,{Component} from 'react';

import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddCustomerMaster extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
 

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'CustomerMaster',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Id:0,
                CustomerNo:event.target.CustomerNo.value,
                CustomerName:event.target.CustomerName.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            if(result=="Added Successfully"){
                alert(result);
            }
            else{
                alert('special characters are not allowed.');
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
            Add Customer
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>

            <Form onSubmit={this.handleSubmit}>

                    <Form.Group controlId="CustomerNo">
                        <Form.Label>Customer No</Form.Label>
                        <Form.Control type="number" name="CustomerNo" required 
                        placeholder="Customer No" />
                    </Form.Group>
               
                    <Form.Group controlId="CustomerName">
                        <Form.Label>Customer Name</Form.Label>
                        <Form.Control type="text" name="CustomerName" required 
                        placeholder="Customer Name"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add Customer
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