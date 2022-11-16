import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class LoadManualRSO extends Component{
    constructor(props){
        super(props);
        this.state={deps:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        // this.handleFileSelected=this.handleFileSelected.bind(this);
    }
 
    componentDidMount(){
        fetch(process.env.REACT_APP_API+'ManualCreatedRSO')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'ManualCreatedRSO',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                // Id:event.target.Id.value,
                Id:this.props.empid,
                CustomerNo:event.target.CustomerName.value,
                Dispatch:event.target.Dispatch.value,
                RefScheduleNo:event.target.RefScheduleNo.value,
                ReceiverNo:event.target.ReceiverNo.value,
                ReceiverAddress:event.target.ReceiverAddress.value,
                CustomerPartNo:event.target.CustomerPartNo.value,
                OrderQuantity:event.target.OrderQuantity.value,
                ChassisNo:event.target.ChassisNo.value,
                ReceiverOrderNumber:event.target.ReceiverOrderNumber.value,
                MaterialNumber:event.target.MaterialNumber.value,
                UnloadingPointCustomer:event.target.UnloadingPointCustomer.value,
                CylinderNo:event.target.CylinderNo.value,
                Carrier:event.target.Carrier.value,
                Text:event.target.Text.value,
                Comment:event.target.Comment.value,
                Plant:event.target.Plant.value,
                SenderId:event.target.SenderId.value,
                DispatchAddress:event.target.DispatchAddress.value,
                OrderDate:event.target.OrderDate.value,
                DealerNo:event.target.DealerNo.value,
                ReceiverInfo:event.target.ReceiverInfo.value,
                HufPartNoOrDescription:event.target.HufPartNoOrDescription.value, 
                CodeEqColorClosure:event.target.CodeEqColorClosure.value,
                BasicAgreementNumber:event.target.BasicAgreementNumber.value,
                Packaging:event.target.Packaging.value,
                ReceivingPoint:event.target.ReceivingPoint.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
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
    {/*LOAD Manual Created RSO form */}
    
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {this.props.send}
        </Modal.Title>
   
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button> 
    </Modal.Header>
    <Modal.Body>
    <Form onSubmit={this.handleSubmit}> 
        <Row>
      

             {/* <Col sm={12} md={6}>
                <Form.Group controlId="Id">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" name="Id" required 
                        placeholder="Id"
                         disabled
                         disabled   defaultValue={this.props.empid}/>
                    </Form.Group>  
                    </Col> */}

                    <Col sm={12} md={6}>
                    <Form.Group controlId="Plant"> 
                    <Form.Label>Plant</Form.Label>
                        <Form.Control type="text" name="Plant" required  
                                disabled   defaultValue={this.props.plant}/> 
                    </Form.Group> 
                    </Col>

                      <Col sm={12} md={6}>
                    <Form.Group controlId="SenderId"> 
                    <Form.Label>Sender Id</Form.Label>
                        <Form.Control type="text" name="SenderId" required  
                                disabled   defaultValue={this.props.send}/> 
                    </Form.Group> 
                   </Col>

                   <Col sm={12} md={6}>
                    <Form.Group controlId="Dispatch">
                        <Form.Label>Dispatch</Form.Label>
                        <Form.Control type="text" name="Dispatch" required 
                          disabled   defaultValue={this.props.empdis}
                        placeholder="Dispatch"/>
                    </Form.Group> 
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="DispatchAddress">
                        <Form.Label>Dispatch Address</Form.Label>
                        <Form.Control type="text" name="DispatchAddress" required 
                          disabled   defaultValue={this.props.add}
                        placeholder="Dispatch Address"/>
                    </Form.Group> 
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="RefScheduleNo">
                        <Form.Label>Ref Schedule No</Form.Label>
                        <Form.Control type="text" name="RefScheduleNo" required 
                      disabled      defaultValue={this.props.refno}
                        placeholder="RefScheduleNo"/>
                    </Form.Group> 
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="CustomerName">
                        <Form.Label>Customer No</Form.Label>
                        <Form.Control type="text" name="CustomerName" required 
                          disabled   defaultValue={this.props.custno}
                        placeholder="Customer No"/>
                    </Form.Group> 
                    </Col>
        

                    <Col sm={12} md={6}>
                    <Form.Group controlId="OrderDate">
                        <Form.Label>Order Date</Form.Label>
                        <Form.Control type="text" name="OrderDate" required 
                          disabled   defaultValue={this.props.empod}
                        placeholder="Order Date"/>
                    </Form.Group>
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="ReceiverNo">
                        <Form.Label>Receiver No</Form.Label>
                        <Form.Control type="text" name="ReceiverNo" required 
                          disabled   defaultValue={this.props.rec}
                        placeholder="Receiver No"/>
                    </Form.Group>
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="DealerNo">
                        <Form.Label>DealerNo</Form.Label>
                        <Form.Control type="text" name="DealerNo" required 
                          disabled   defaultValue={this.props.empdeal}
                        placeholder="DealerNo"/>
                    </Form.Group>
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="ReceiverAddress">
                        <Form.Label>Receiver Address</Form.Label>
                        <Form.Control type="text" name="ReceiverAddress" required 
                          disabled   defaultValue={this.props.recadd}
                        placeholder="Receiver Address"/>
                    </Form.Group>
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="ReceiverInfo">
                        <Form.Label>Receiver Info</Form.Label>
                        <Form.Control type="text" name="ReceiverInfo" required 
                          disabled   defaultValue={this.props.recinfo}
                        placeholder="Receiver Info"/>
                    </Form.Group>
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="CustomerPartNo">
                        <Form.Label>Customer Part No</Form.Label>
                        <Form.Control type="text" name="CustomerPartNo" required 
                          disabled   defaultValue={this.props.emppn}
                        placeholder="Customer Part No"/>
                    </Form.Group>
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="HufPartNoOrDescription">
                        <Form.Label>Huf-Partno / Description</Form.Label>
                        <Form.Control type="text" name="HufPartNoOrDescription" required 
                          disabled   defaultValue={this.props.huf}
                        placeholder="Huf-Partno / Description"/>
                    </Form.Group>
                    </Col> 
 
                    <Col sm={12} md={6}>
                    <Form.Group controlId="OrderQuantity">
                        <Form.Label>Order Quantity</Form.Label>
                        <Form.Control type="text" name="OrderQuantity" required 
                          disabled   defaultValue={this.props.empquan}
                        placeholder="Order Quantity"/>
                    </Form.Group>
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="ChassisNo">
                        <Form.Label>Chassis No</Form.Label>
                        <Form.Control type="text" name="ChassisNo" required 
                          disabled   defaultValue={this.props.chass}
                        placeholder="Chassis No"/>
                    </Form.Group>
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="CodeEqColorClosure">
                        <Form.Label>Code, Eq.Color, Closure</Form.Label>
                        <Form.Control type="text" name="CodeEqColorClosure" required 
                          disabled   defaultValue={this.props.code}
                        placeholder="Code, Eq.Color, Closure"/>
                    </Form.Group>
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="ReceiverOrderNumber">
                        <Form.Label>Receiver Order Number</Form.Label>
                        <Form.Control type="text" name="ReceiverOrderNumber" required 
                          disabled   defaultValue={this.props.orderno}
                        placeholder="Receiver Order Number"/>
                    </Form.Group>
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="BasicAgreementNumber">
                        <Form.Label>Basic Agreement Number</Form.Label>
                        <Form.Control type="text" name="BasicAgreementNumber" required 
                          disabled   defaultValue={this.props.agree}
                        placeholder="Basic Agreement Number"/>
                    </Form.Group>
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="MaterialNumber">
                        <Form.Label>Material Number</Form.Label>
                        <Form.Control type="text" name="MaterialNumber" required 
                          disabled   defaultValue={this.props.mat}
                        placeholder="Material Number"/>
                    </Form.Group>
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="Packaging">
                        <Form.Label>Packaging</Form.Label>
                        <Form.Control type="text" name="Packaging" required 
                          disabled   defaultValue={this.props.pack}
                        placeholder="Packaging"/>
                    </Form.Group>
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="UnloadingPointCustomer">
                        <Form.Label>Unloading Point Customer</Form.Label>
                        <Form.Control type="text" name="UnloadingPointCustomer" required 
                          disabled   defaultValue={this.props.unload}
                        placeholder="Unloading Point Customer"/>
                    </Form.Group>
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="ReceivingPoint">
                        <Form.Label>Receiving Point</Form.Label>
                        <Form.Control type="text" name="ReceivingPoint" required 
                          disabled   defaultValue={this.props.recp}
                        placeholder="Receiving Point"/>
                    </Form.Group>
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="CylinderNo">
                        <Form.Label>Cylinder No</Form.Label>
                        <Form.Control type="text" name="CylinderNo" required 
                          disabled   defaultValue={this.props.cylinder}
                        placeholder="Cylinder No"/>
                    </Form.Group>
                    </Col>  

                    <Col sm={12} md={6}>
                    <Form.Group controlId="Carrier">
                        <Form.Label>Carrier</Form.Label>
                        <Form.Control type="text" name="Carrier" required 
                          disabled   defaultValue={this.props.empcar}
                        placeholder="Carrier"/>
                    </Form.Group>
                    </Col>

                    <Col sm={12}>
                    <Form.Group controlId="Text">
                        <Form.Label>Text</Form.Label>
                        <Form.Control type="text" name="Text" required 
                          disabled   defaultValue={this.props.text}
                        placeholder="Text"/>
                    </Form.Group>
                    </Col>

                    <Col sm={12} >
                    <Form.Group controlId="Comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control type="text" name="Comment" required 
                          disabled   defaultValue={this.props.comment}
                        placeholder="Comment"/>
                    </Form.Group>
                    </Col>
 
                    {/* <Col sm={12} >
                    <Form.Group style={{ textAlign: "right" }}>
                        <Button variant="primary" type="submit">
                            Update Employee
                        </Button>
                    </Form.Group> 
                    </Col> */}
          
        </Row>
        </Form>
    </Modal.Body>
    
    {/* <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer> */}

</Modal>

            </div>
        )
    }

}