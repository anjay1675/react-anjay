import React,{Component} from 'react'
import AddStudent from './AddStudent'

class Students extends Component{
  constructor(props){
    super(props)
    this.state = {oldStudents:this.props.students}
  }
  addStudent = (student)=>{
    const newStudents = [...this.state.oldStudents, student]
    this.setState({oldStudents:newStudents})
  }
  render(){
    const studentList = this.state.oldStudents.map((student, key)=>{
      return(
        <tr key={key}>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.score}</td>
        </tr>
      )
    })
    return(
      <div>
        <h2>Students</h2>
        <AddStudent addStudent={this.addStudent} />
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {studentList}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Students
