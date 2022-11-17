import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditPlant extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'PlantMaster',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                PlantId:event.target.PlantId.value,
                PlantName:event.target.PlantName.value,
                PlantCity:event.target.PlantCity.value
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
            Edit Plant Master
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="PlantId">
                        <Form.Label>Plant Id</Form.Label>
                        <Form.Control type="text" name="PlantId" required
                        disabled
                        defaultValue={this.props.plantid} 
                        placeholder="Plant Id"/>
                    </Form.Group>

                    <Form.Group controlId="PlantName">
                        <Form.Label>Plant Name</Form.Label>
                        <Form.Control type="text" name="PlantName" required 
                        defaultValue={this.props.plantname}
                        placeholder="Plant Name"/>
                    </Form.Group>
                    <Form.Group controlId="PlantCity">
                        <Form.Label>Plant City</Form.Label>
                        <Form.Control type="text" name="PlantCity" required 
                        defaultValue={this.props.plantcity}
                        placeholder="Plant city"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Department
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