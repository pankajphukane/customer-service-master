import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddPlant extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'PlantMaster',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                PlantId:0,
                PlantName:event.target.PlantName.value,
                PlantCity:event.target.PlantCity.value
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
            Add Plant Master
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="PlantName">
                        <Form.Label>Plant Name</Form.Label>
                        <Form.Control type="text" name="PlantName" required   
                        placeholder="PlantName"/> 
                    </Form.Group>
                  
                    <Form.Group controlId="PlantCity">
                        <Form.Label>Plant City</Form.Label>
                        <Form.Control type="text" name="PlantCity" required  onkeyup="this.value=this.value.toUpperCase()"



                        placeholder="Plant City"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add Plant Master
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