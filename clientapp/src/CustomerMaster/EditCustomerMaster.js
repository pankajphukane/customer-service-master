import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditCustomerMaster extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'CustomerMaster',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
               Id:event.target.Id.value,
               CustomerNo:event.target.CustomerNo.value,
               CustomerName:event.target.CustomerName.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            if(result=="Updated Successfully"){
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
            Edit Customer
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="Id">
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="text" name="Id" required
                        disabled
                        defaultValue={this.props.depid} 
                        placeholder="Id"/>
                    </Form.Group>

                    <Form.Group controlId="CustomerNo">
                        <Form.Label>Customer No</Form.Label>
                        <Form.Control type="number" name="CustomerNo" required 
                        defaultValue={this.props.depno}
                        placeholder="Customer No"/>
                    </Form.Group>

                    <Form.Group controlId="CustomerName">
                        <Form.Label>Customer Name</Form.Label>
                        <Form.Control type="text" name="CustomerName" required 
                        defaultValue={this.props.depname}
                        placeholder="Customer Name"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Customer
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