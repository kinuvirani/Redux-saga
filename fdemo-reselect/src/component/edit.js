import React from 'react';
import { Button, Form, FormGroup, Label, Input,Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
// import {updateUser} from '../action/test.action'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Edit extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            password:'',
            id:0,
            editModal:false
        }
        this.editToggle=this.editToggle.bind(this)
    }

    editToggle(){
        this.setState((prevstate)=>({
            editModal:!prevstate.editModal
        }))
    }
    componentDidMount() {
        this.setState({
            name:this.props.dt.name,
            email:this.props.dt.email,
            id:this.props.dt.id
        })
    }

    handleEdit(){
        let data1={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }
        console.log("Updated data==",data1)
        this.props.updateUser(data1,this.state.id)
        this.editToggle()
    }
    render() {
        return (
            <div>
                <Button color='success' onClick={this.editToggle}>Edit</Button>
                <Modal isOpen={this.state.editModal} toggle={this.editModal} className={this.props.className}>
                    <ModalHeader toggle={this.editToggle}>Edit Profile</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2">Name</Label>
                                <Input type="text"  placeholder="Enter Name" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                                <Input type="email" placeholder="Enter Email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} />
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="examplePassword" className="mr-sm-2">Password</Label>
                                <Input type="password" placeholder="Enter Password" value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.handleEdit.bind(this)}>Edit</Button>{' '}
                        <Button color="secondary" onClick={this.editToggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

// const mapDispatchToProps=(dispatch)=>{
//     return bindActionCreators({updateUser},dispatch)
// }

const mapDispatchToProps=(dispatch)=>({
    updateUser:(data1,id)=>{
        dispatch({type:"EDITUSER",data:data1,id:id})
    }
})
export default connect(null,mapDispatchToProps)(Edit)
