import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const updateclass = () => {
    useEffect(() => {
        const [studentdata, setstudentdata] = useState([])
     const {id} = useParams()

     const getstudentdata = async () => {
        const data = await axios.get(
          "http://localhost:5000/student/updateclass/" + id
        )
        
        setstudentdata(data.data);
    }

        updateclassdata();
      }, []);
    return (
        <>
        <form>
 
   
    <input type="text" name="name" />
 
  <input type="text" value="Subject" />

  <button title="submit">

</button>
</form>
       
        </>
      );
    
}



export default updateclass;