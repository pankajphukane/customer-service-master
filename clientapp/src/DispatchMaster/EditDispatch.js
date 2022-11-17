import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditDispatch extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'DispatchMaster',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                DispatchId:event.target.DispatchId.value,
                DispatchName:event.target.DispatchName.value
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
            Edit Dispatch Master
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="DispatchId">
                        <Form.Label>Dispatch Id</Form.Label>
                        <Form.Control type="text" name="DispatchId" required
                        disabled
                        defaultValue={this.props.depid} 
                        placeholder="Dispatch Id"/>
                    </Form.Group>

                    <Form.Group controlId="DispatchName">
                        <Form.Label>Dispatch Name</Form.Label>
                        <Form.Control type="text" name="DispatchName" required 
                        defaultValue={this.props.depname}
                        placeholder="DispatchName"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Dispatch Master
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