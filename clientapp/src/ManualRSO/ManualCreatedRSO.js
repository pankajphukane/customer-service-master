import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddManualCreatedRSO} from './AddManualCreatedRSO';
import {EditManualCreatedRSO} from './EditManualCreatedRSO';
import {LoadManualRSO} from './LoadManualRSO';
 

import { Link } from 'react-router-dom';

export class ManualCreatedRSO extends Component{

    constructor(props){
        super(props);
        this.state={emps:[], addModalShow:false, editModalShow:false,LoadModalShow:false }
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'ManualCreatedRSO')
        .then(response=>response.json())
        .then(data=>{
            this.setState({emps:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteEmp(empid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'ManualCreatedRSO/'+empid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {emps, empid,empdis,emppn,
               empod,empdeal,empcar,plant,send,
               text,refno,comment,add,custno,rec,recadd,
               recinfo,huf,empquan,chass,code,orderno,
               agree,mat,pack,unload,recp,cylinder}=this.state;

        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        let loadModalClose=()=>this.setState({LoadModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        {/* <th>ID</th> */}
                        <th>Cust Order No</th>
                        <th>Dispatch</th>
                        <th>Cust Part No</th> 
                        <th>Order Quantity</th> 
                        <th>OrderDate</th>
                        <th>DealerNo</th> 
                        <th>Carrier</th> 
                        {/* <th>Last Edited</th>  */}
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emps.map(emp=>
                            <tr key= {emp.Id}>
                                 {/* <td> {emp.Id}</td> */}
                                 <Link onClick={()=>this.setState({LoadModalShow:true,
        empid:emp.Id,empdis:emp.Dispatch,
        emppn:emp.CustomerPartNo,empquan:emp.OrderQuantity,
        empod:emp.OrderDate,empdeal:emp.DealerNo,
        empcar:emp.Carrier,plant:emp.Plant,send:emp.SenderId,
        text:emp.Text,comment:emp.Comment,add:emp.DispatchAddress,refno:emp.RefScheduleNo,
        custno:emp.CustomerNo,rec:emp.ReceiverNo,recadd:emp.ReceiverAddress,
        recinfo:emp.ReceiverInfo,huf:emp.HufPartNoOrDescription,chass:emp.ChassisNo,
        code:emp.CodeEqColorClosure,orderno:emp.ReceiverOrderNumber,
        agree:emp.BasicAgreementNumber,mat:emp.MaterialNumber,pack:emp.Packaging,
        unload:emp.UnloadingPointCustomer,recp:emp.ReceivingPoint,cylinder:emp.CylinderNo
        })}>{emp.RefScheduleNo}</Link>
                                 {/* <td>{emp.RefScheduleNo}</td> */}
                                <td>{emp.Dispatch}</td>
                                <td>{emp.CustomerPartNo}</td>
                                <td>{emp.OrderQuantity}</td>
                                <td>{emp.OrderDate} </td>
                                <td>{emp.DealerNo}</td>
                                <td>{emp.Carrier}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        empid:emp.Id,empdis:emp.Dispatch,
        emppn:emp.CustomerPartNo,empquan:emp.OrderQuantity,
        empod:emp.OrderDate,empdeal:emp.DealerNo,
        empcar:emp.Carrier,plant:emp.Plant,send:emp.SenderId,
        text:emp.Text,comment:emp.Comment,add:emp.DispatchAddress,refno:emp.RefScheduleNo,
        custno:emp.CustomerNo,rec:emp.ReceiverNo,recadd:emp.ReceiverAddress,
        recinfo:emp.ReceiverInfo,huf:emp.HufPartNoOrDescription,chass:emp.ChassisNo,
        code:emp.CodeEqColorClosure,orderno:emp.ReceiverOrderNumber,
        agree:emp.BasicAgreementNumber,mat:emp.MaterialNumber,pack:emp.Packaging,
        unload:emp.UnloadingPointCustomer,recp:emp.ReceivingPoint,cylinder:emp.CylinderNo
        })}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteEmp(emp.Id)}>
            Delete
        </Button>

        <EditManualCreatedRSO show={this.state.editModalShow}
        onHide={editModalClose}
        empid={empid}
        empdis={empdis}
        emppn={emppn}
        empquan={empquan}
        empod={empod}
        empdeal={empdeal}
        empcar={empcar}
        plant={plant}
        send={send}
        text={text}
        comment={comment}
        add={add}
        custno={custno}
        rec={rec}
        recadd={recadd}
        recinfo={recinfo}
        huf={huf}
        chass={chass}
        code={code}
        orderno={orderno}
        agree={agree}
        mat={mat}
        pack={pack}
        unload={unload}
        recp={recp}
        cylinder={cylinder} 
        refno={refno}
 
        />

<LoadManualRSO show={this.state.LoadModalShow}
        onHide={loadModalClose}
        empid={empid}
        empdis={empdis}
        emppn={emppn}
        empquan={empquan}
        empod={empod}
        empdeal={empdeal}
        empcar={empcar}
        plant={plant}
        send={send}
        text={text}
        comment={comment}
        add={add}
        custno={custno}
        rec={rec}
        recadd={recadd}
        recinfo={recinfo}
        huf={huf}
        chass={chass}
        code={code}
        orderno={orderno}
        agree={agree}
        mat={mat}
        pack={pack}
        unload={unload}
        recp={recp}
        cylinder={cylinder} 
        refno={refno}
 
        />
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Manual Created RSO</Button>


                    <AddManualCreatedRSO show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}