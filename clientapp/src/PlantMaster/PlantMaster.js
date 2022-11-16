import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddPlant} from './AddPlant';
import {EditPlant} from './EditPlant';

export class PlantMaster extends Component{
    
    constructor(props){
        super(props);
        this.state={plantdata:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'PlantMaster')
        .then(response=>response.json())
        .then(data=>{
            this.setState({plantdata:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteDep(plantid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'PlantMaster/'+plantid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
 
    render(){
        const {plantdata,plantid,plantname,plantcity}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table   className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Plant Id</th>
                        <th>Plant Name</th>
                        <th>Plant City</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plantdata.map(pan=>
                            <tr key={pan.PlantId}>
                                <td>{pan.PlantId}</td>
                                <td>{pan.PlantName}</td>
                                <td>{pan.PlantCity}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        plantid:pan.PlantId,plantname:pan.PlantName,plantcity:pan.PlantCity})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteDep(pan.PlantId)}>
            Delete
        </Button>

        <EditPlant show={this.state.editModalShow}
        onHide={editModalClose}
        plantid={plantid}
        plantname={plantname}
        plantcity={plantcity}/>
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Plant </Button>

                    <AddPlant show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
   
}
