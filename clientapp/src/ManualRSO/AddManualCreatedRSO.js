import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form  }  from 'react-bootstrap';

export class AddManualCreatedRSO extends Component{
    constructor(props){
        super(props);
        this.state={Disp:[],Cust:[],Plant:[],Cuspnp:[]}; 
        this.handleSubmit=this.handleSubmit.bind(this);
       
    }  
    componentDidMount()
    {   
        fetch(process.env.REACT_APP_API+'CustomerMaster')
        .then(response=>response.json())
        .then(data=>{
           
            this.setState({Cust:data});
        });

        fetch(process.env.REACT_APP_API+'DispatchMaster')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Disp:data});
        });

        fetch(process.env.REACT_APP_API+'PlantMaster')
        .then(response=>response.json())
        .then(data=>{
           
            this.setState({Plant:data});
        });
        

        fetch(process.env.REACT_APP_API+'CustomerPartMaster')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Cuspnp:data});
        });
        
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'ManualCreatedRSO',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Id:0,
                CustomerNo:event.target.CustomerName.value ,
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
  {/* Manual Created RSO ADD form */}

    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Create RSO
        </Modal.Title>
    </Modal.Header>
    <Modal.Body> 
    <Form onSubmit={this.handleSubmit}>
                <Row> 
            
                
              
                <Col sm={12} >
                    <Form.Group style={{ textAlign: "right" }}>
                        <Button variant="primary" type="submit">
                          Save RSO
                        </Button>&nbsp;
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>

                    </Form.Group>
                    </Col>
                     

                <Col sm={12} md={6}>
                    <Form.Group controlId="StatusMaster">
                        <Form.Label>Status :</Form.Label>
                        <Form.Control type="text" name="Status" required 
                         disabled
                        defaultValue="NEW "/>
                        </Form.Group>
                        </Col>

                <Col sm={12} md={6}>
                <Form.Group controlId="Plant"> 
                    <Form.Label>Plant</Form.Label>
                        <Form.Control as="select">
                        {this.state.Plant.map(Plant=>
                            <option key={Plant.PlantId}>{Plant.PlantName }, {Plant.PlantCity }</option>)}
                        </Form.Control>
                    </Form.Group> 
                    </Col>

                    <Col sm={12} md={6}>
                <Form.Group controlId="CustomerName">
                        <Form.Label>Customer No</Form.Label>
                        <Form.Control as="select">
                        {this.state.Cust.map(Customer=>
                             <option key={Customer.ID}>{Customer.CustomerName} ({Customer.CustomerNo })</option>)}
                          {/* <option key={Customer.ID}>{Customer.CustomerName} </option>)} */}
                        </Form.Control>
                    </Form.Group>   
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="SenderId">
                        <Form.Label>Sender Id</Form.Label>
                        <Form.Control type="text" name="SenderId" required 
                        placeholder="Sender Id"/>
                        </Form.Group>
                        </Col>

                        <Col sm={12} md={6}>
                    <Form.Group controlId="Dispatch">
                        <Form.Label>Dispatch</Form.Label>
                        <Form.Control as="select">
                        {this.state.Disp.map(Dispatch=>
                        <option key={Dispatch.DispatchID}>{Dispatch.DispatchName}</option>)}
                        </Form.Control>
                    </Form.Group> 
                    </Col>

                    <Col sm={12} md={6}>
                     <Form.Group controlId="DispatchAddress">
                        <Form.Label>Dispatch Address</Form.Label>
                        <Form.Control type="text" name="DispatchAddress" required 
                        placeholder="Dispatch Address"/>
                        </Form.Group> 
                        </Col>

                        <Col sm={12} md={6}>
                        <Form.Group controlId="RefScheduleNo">
                        <Form.Label>Ref Schedule No</Form.Label>
                        <Form.Control type="text" name="RefScheduleNo" required 
                        placeholder="Ref Schedule No"/>
                        </Form.Group>
                        </Col>

                        <Col sm={12} md={6}>
                        <Form.Group controlId="OrderDate">
                        <Form.Label>Order Date</Form.Label>
                        <Form.Control type="date" name="OrderDate" required/>
                        </Form.Group>   
                        </Col>

                        <Col sm={12} md={6}>
                        <Form.Group controlId="ReceiverNo">
                        <Form.Label>Receiver No</Form.Label>
                        <Form.Control type="number" name="Receiver No" required  pattern={"[0-9]*"} maxLength={10}
                        placeholder=" ReceiverNo"/>
                        </Form.Group>
                        </Col>

                        <Col sm={12} md={6}>
                        <Form.Group controlId="DealerNo">
                        <Form.Label>Dealer No</Form.Label>
                        <Form.Control type="number" name="DealerNo" required  pattern={"[0-9,@]*"} 
                        
                        placeholder=" Dealer No"/>
                        </Form.Group>   
                        </Col>

                        <Col sm={12} md={6}> 
                        <Form.Group controlId="ReceiverAddress">
                        <Form.Label>Receiver Address</Form.Label>
                        <Form.Control type="text" name="ReceiverAddress" required 
                        placeholder="Receiver Address"/>
                        </Form.Group>
                        </Col>

                        <Col sm={12} md={6}> 
                        <Form.Group controlId="ReceiverInfo">
                        <Form.Label>Receiver Info </Form.Label>
                        <Form.Control type="text" name="ReceiverInfo" required 
                        placeholder="Receiver Info"/>
                        </Form.Group>
                        </Col>

                           <Col sm={12} md={6}>
                        <Form.Group controlId="CustomerPartNo">
                        <Form.Label>Customer Part No</Form.Label>
                        <Form.Control as="select">
                        {this.state.Cuspnp.map(Customerp=>
                        <option key={Customerp.CustomerPartId}>{Customerp.CustomerPartNumber}</option>)}
                        </Form.Control>
                    </Form.Group> 
                    </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="HufPartNoOrDescription">
                        <Form.Label>Huf-Partno / Description</Form.Label>
                        <Form.Control type="text" name="HufPartNoOrDescription" required 
                        placeholder="Huf-Partno / Description"/>
                        </Form.Group>
                        </Col>

                    <Col sm={12} md={6}>
                    <Form.Group controlId="OrderQuantity">
                        <Form.Label>Order Quantity</Form.Label>
                        <Form.Control type="number" name="OrderQuantity" required  pattern= {"[0-9]*"} 
                        placeholder="Order Quantity"/>
                        </Form.Group>
                        </Col>

                        <Col sm={12} md={6}>
                        <Form.Group controlId="ChassisNo">
                        <Form.Label>Chassis No</Form.Label>
                        <Form.Control type="text" name="ChassisNo" required 
                        placeholder="Chassis No"/>
                        </Form.Group>
                        </Col>

                        <Col sm={12} md={6}>
                        <Form.Group controlId="CodeEqColorClosure">
                        <Form.Label>Code, Eq.Color, Closure</Form.Label>
                        <Form.Control type="text" name="CodeEqColorClosure" required /> 
                        </Form.Group>
                        </Col>

                        <Col sm={12} md={6}>
                        <Form.Group controlId="ReceiverOrderNumber">
                        <Form.Label>Receiver Order Number</Form.Label>
                        <Form.Control type="text" name="ReceiverOrderNumber" required 
                        placeholder="Receiver Order Number"/>
                        </Form.Group>
                        </Col>

                        <Col sm={12} md={6}>
                        <Form.Group controlId="BasicAgreementNumber">
                        <Form.Label>Basic Agreement Number</Form.Label>
                        <Form.Control type="text" name="BasicAgreementNumber" required
                        placeholder="Basic Agreement Number"/> 
                        </Form.Group>
                        </Col>

                        <Col sm={12} md={6}>
                        <Form.Group controlId="MaterialNumber">
                        <Form.Label>Material Number</Form.Label>
                        <Form.Control type="text" name="MaterialNumber" required 
                        placeholder="Material Number"/>
                        </Form.Group>
                        </Col>

                        <Col sm={12} md={6}>
                        <Form.Group controlId="Packaging">
                        <Form.Label>Packaging</Form.Label>
                        <Form.Control type="text" name="Packaging" required
                        placeholder="Packaging"/>  
                        </Form.Group>
                        </Col>

                        <Col sm={12} md={6}>
                        <Form.Group controlId="UnloadingPointCustomer">
                        <Form.Label>Unloading Point Customer</Form.Label>
                        <Form.Control type="text" name="UnloadingPointCustomer" required
                        placeholder="Unloading Point Customer"/>  
                        </Form.Group>
                        </Col>

                        <Col sm={12} md={6}>
                        <Form.Group controlId="ReceivingPoint">
                        <Form.Label>Receiving Point</Form.Label>
                        <Form.Control type="text" name="ReceivingPoint" required
                        placeholder="Receiving Point"/>  
                        </Form.Group>
                        </Col>

                        <Col sm={12} md={6}>
                        <Form.Group controlId="CylinderNo">
                        <Form.Label>Cylinder No</Form.Label>
                        <Form.Control type="text" name="CylinderNo" required
                        placeholder="Cylinder No"/>  
                        </Form.Group>
                        </Col>

                        <Col sm={12}>
                        <Form.Group controlId="Carrier">
                        <Form.Label>Carrier</Form.Label>
                        <Form.Control type="text" name="Carrier" required
                        placeholder="Carrier"/>  
                        </Form.Group>
                        </Col>

                        <Col sm={12}>
                        <Form.Group controlId="Text">
                        <Form.Label>Text</Form.Label>
                        <Form.Control type="text" name="Text" required
                        placeholder="Text"/>  
                        </Form.Group>
                        </Col>
                        
                        <Col sm={12}>
                        <Form.Group controlId="Comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control type="text" name="Comment" required
                        placeholder="Comment"/>  
                        </Form.Group>
                        </Col> 
                      
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