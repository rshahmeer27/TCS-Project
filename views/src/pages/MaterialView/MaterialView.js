import React, { useEffect, useState } from 'react'
function App() {
 const [name,setMterialName]=useState("");
 const [title,setMterialtitle]=useState("");
 const[material,setMaterial] = useState("");
 const [type,setMaterialType]=useState("");
 const [uploadedondate,setuploadedondate]=useState("");
 const [size,setSize]=useState("");
 useEffect(()=>
 {
    viewmaterial()
 },[])

 // SP20-BCS-078 (Muqaddas Siddique)
function saveData()
{
  let data={name,type,mobile}
  fetch("http://localhost:4000/lms", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}

// SP20-BCS-091, SP20-BCS-112, SP20-BCS-083 (Saman Ashraf, Khadija Iqbal, Raja Shahmeer Ahmed)
function viewmaterial()
{
    fetch("http://localhost:4000/lms").then((result) =>
    {
    result.json().then((resp) =>
    {
            setMaterialType(resp)
        })
    })
}

//SP20-BCS-080 (Noor Ul Ain)
function deletematerial(id)
{
fetch(`http://localhost:4000/lms/${id}`,{
    method:'DELETE'
}).then((result)=>
{
    result.json().then((resp)=>
    {
        console.warn(resp)
        viewmaterial()
    })
})
}

// Muhammad Bilal Anwar (SP20-BCS-058)
function downloadmaterial(id)
{
fetch(`http://localhost:4000/lms/${id}`,{
    method:'GET'
}).then((result)=>
{
    result.json().then((resp)=>
    {
        console.warn(resp)
        viewmaterial()
    })
})
}

  return (
    <div className="App">
      <h1>ADD MATERIAL </h1>  
      <input type="text" name="name" value={name} onChange={(e)=>{setMterialName(e.target.value)}}  /> <br /> <br />
      <input type="text" name="title"  value={title} onChange={(e)=>{setMterialtitle(e.target.value)}} /> <br /> <br />
      <input type="text" name="type"  value={type} onChange={(e)=>{setMaterialType(e.target.value)}}/> <br /> <br />
      <input type="text" name="uploadedoondate"  value={uploadedondate} onChange={(e)=>{setuploadedondate(e.target.value)}}/> <br /> <br />
      <input type="text" name="filesize"  value={size} onChange={(e)=>{setSize(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData} >Save New User</button>
      <div>
        <h1>VIEW MATERIAL</h1>
          <tbody>
            <tr>
            <td>name</td>
            <td>title</td>
            <td>type</td>
            <td>uploadedondate</td>
            <td>filesize</td>
    </tr>
    {
        material.map((item,i)=>
        <tr key = {i}>
            <td>{item.name}</td>
            <td>{item.title}</td>
            <td>{item.type}</td>
            <td>{item.uploadedondate}</td>
            <td>{item.size}</td>
            <td><button onClick={() => deletematerial(item.id)}>DELETE</button></td>
            <td><button onClick={() =>downloadmaterial(item.id)}>DOWNLAOD</button></td>
            <td><button onClick={() => saveData()}>ADD NEW MATERIAL</button></td>
            <td><button onClick={() => viewmaterial()}>VIEW ALL MATERIAL</button></td>
        </tr>
        )
    }
          </tbody>
      </div>
    </div>
  );
};
export default App;