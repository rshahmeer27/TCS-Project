import { useState } from 'react';
function AddMarks() {
    const [StudentID, setStudentID] = useState("")
    const [CourseCode, setCourseCode] = useState("")
    const [marks, setmarks] = useState("")
    const  apicall = async (stdid, cc,m, e)=>{
      try {
        e.preventDefault()
        const response = await fetch(
          `http://localhost:4000/teacher/${stdid}/${cc}/${m}`,
          {
            method: 'push',
            body: JSON.stringify({
              stdid,
              cc,
              m,
            }),
          }
        );
        const json = await response.json();
          alert(json);
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div id="div1">
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Student ID
        </label>
        <input
        value={StudentID}
        onChange={(event)=>{
          setStudentID(event.target.value);
    
      }}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Course Code
        </label>
        <input
         value={CourseCode}
         onChange={(event)=>{
          setCourseCode(event.target.value);
    
      }}
          type="text"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Marks
        </label>
        <input
           value={marks}
           onChange={(event)=>{
            setmarks(event.target.value);
      
        }}
          type="number"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      
      <button onSubmit={()=>{apicall(StudentID, CourseCode, marks)}} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
  );
}
export default AddMarks;