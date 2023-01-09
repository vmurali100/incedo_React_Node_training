import React, {Component} from "react"
import { connect } from "react-redux"
import { deleteStudentAction } from "../actions"
class Form extends React.Component{
    handleDelete=(stud)=>{
        this.props.studDelete(stud)
    }
    render(){
        return(
            <div>
                <h1>Redux</h1>
                <form>
                    Name:
                    <input type="text" placeholder="enter your name" /><br/>
                    Email:
                    <input type="text" placeholder="enter your email"  /><br/>
                    <button input type="button">Submit</button>
                    <button input type="button">Add</button>
                    
                    
                </form>
                <ul>
                    {this.props.students.map((stud,i)=>
                    <li key={i} onClick={()=>{this.handleDelete(stud)}}>{stud}</li>)}
                </ul>
                
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        students:state.students
    }
}
function mapDispatchToProps(dispatch){
    return{
        studDelete:(stud=>dispatch(deleteStudentAction(stud)))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Form)