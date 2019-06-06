import React from 'react'
import {Button,Table,Popover,PopoverHeader,PopoverBody } from "reactstrap";
import { Popconfirm, message } from 'antd';

import {bindActionCreators} from "redux";
import {connect} from 'react-redux'

// import {fetchUser,deleteUser} from '../action/test.action'
import Insert from './insert'
import Edit from './edit'

class Record extends React.Component{
    constructor(props){
        super(props)
        this.state={
            modal:false,
            popoverOpen: false
        }
        this.toggle=this.toggle.bind(this)
    }
    componentWillMount() {
        this.props.user()
    }
    popToggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    toggle(){
        this.setState((prevstate)=>({
            modal:!prevstate.modal
        }))
    }

    handleDelete(id){
        this.props.deleteUser(id)
    }

    cancel(e){
        message.error('dceision changed')
    }
    render(){
        return(
            <div>
                <Insert toggle={this.toggle} modal={this.state.modal}/>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.data.length>=1?
                        this.props.data.map((d,i)=>{
                            return(
                                <tr key={i}>
                                    <th scope="row">{i+1}</th>
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td><Edit dt={d} name={d.name} email={d.email} password={d.password} id={d.id}/></td>
                                    <td>
                                        <Popconfirm
                                            title="Are you sure delete this user?"
                                            onConfirm={()=>this.handleDelete(d.id)}
                                            onCancel={this.cancel.bind(this)}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <Button color='danger'>Delete</Button>
                                        </Popconfirm>
                                    </td>
                                </tr>
                            )
                        })
                    :null}
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return({
        data:state.test.data
    })
}

// const mapDispatchToProps=(dispatch)=>{
//     return bindActionCreators({fetchUser,deleteUser},dispatch)
// }

const mapDispatchToProps=(dispatch)=>({
    user:()=>{
        dispatch({type:"GETUSERS"})
    },
    deleteUser:(id)=>{
        dispatch({
            type:"DELETEUSER",
            id:id
        })
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Record)
