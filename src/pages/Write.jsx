import { useState } from "react";
import "./Write.css";
import axios from "axios";
import baseurl from "../Api";

export default function Write() {

  const [formData, setFormData] = useState({
    title : '',
    write : '',
  });

  // const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 

  const savedata = ()=>{
    console.log("clicked")
    console.log(formData)
    axios.post(baseurl+'/write/writeview',formData)
    .then((response)=>{alert("Record save")})
    .catch(err=>console.log(err))
    
  
  } 
  




  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            name="write"
            value={formData.write}
            onChange={handleChange}
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit" onClick={savedata}>
          Publish
        </button>
      </form>
    </div>
  );
}
