import React from 'react'

const Teachers = (props)=>{
  const teachers = props.teachers.map(teacher=>{
    return(
      <tr key={teacher.id}>
        <td>{teacher.id}</td>
        <td>{teacher.name}</td>
        <td>{teacher.age}</td>
      </tr>
    )
  })
  return(
    <div>
    <h2>Teachers</h2>
    <table>
      <thead>
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {teachers}
      </tbody>
    </table>
    </div>
  )
}

export default Teachers
