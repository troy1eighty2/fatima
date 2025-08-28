import { useState } from "react";
import styles from "./Contact.module.css";

import submit from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Submit.svg";
import submithover from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Submit-Hover.svg";
import done from "../assets/Assets/Assets/Deliverables/Buttons/Web/PNG/Fatima-Mobile-Icons-Done.png";

import Dropdown from "../parts/Dropdown";
import fileaccent from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Vector.svg";
import monster from "../assets/Assets/Assets/Deliverables/Illustrations/monster.png";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '',
    placement: [],
    details: '',
    artwork: []
  });
  const options = [
    "Upper Chest",
    "Left Chest",
    "Upper Back",
    "Full Back",
    "Right Sleeve",
    "Left Sleeve",
    "Size Tags"
  ];

  const [isSubmitHovered, setIsSubmitHovered] = useState(false);
  const [nameReq, setNameReq]           = useState(false);
  const [emailReq, setEmailReq]         = useState(false);
  const [phoneReq, setPhoneReq]         = useState(false);
  const [quantityReq, setQuantityReq]   = useState(false);
  const [submitted, setSubmitted]       = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    if (formData.name.trim() === ""){
      setNameReq(true)
    }
    if (formData.quantity.trim() === ""){
      setQuantityReq(true)
    }
    if (formData.phone.trim() === "" && formData.email.trim() === ""){
      if (formData.email.trim() === "" ){
        setEmailReq(true)
      }
      else{
        setPhoneReq(true)
      }
    }
    if (formData.name.trim() === "" || (formData.phone.trim() === "" && formData.email.trim() === "") || formData.quantity.trim() == ""){
      console.log(formData.name.trim())
      console.log(formData.phone.trim())
      console.log(formData.email.trim())
      console.log(formData.quantity.trim())
      return
    }
    const payload = { 
      ...formData, 
      access_key: import.meta.env.VITE_WEB3_FORMS_ACCESS_KEY 
    };
    axios
      .post("https://api.web3forms.com/submit", payload)
      .then((response) => {
        setSubmitted(true)
        setFormData({name:"",email:"",phone:"",quantity:"",placement:[],details:"",artwork:[]})
        setPhoneReq(false)
        setEmailReq(false)
        setQuantityReq(false)
        setNameReq(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handlePlacementChange = (selectedOptions) => {
    setFormData({ ...formData, placement: selectedOptions })
  }
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);

  }
  const handleFileRemove = (index) => {
    setFiles(files.filter((element, i) => i != index));
  }
  const [files, setFiles] = useState([])
  return <>
    <div className={styles.container}>
      <p className={styles.header}>Got an idea? Tell us more!</p>
      <div className={styles.links}>
        <p>IG: @fatima.printed</p>
        <p>Email: fatima.printed@gmail.com</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.question}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="First and Last" value={formData.name} onChange={handleChange} style={nameReq ? {border:"#F86381 solid 1.5px"} : null}/>
          {nameReq?<p className={styles.requiredTooltip}>*Please fill out required information*</p>:null}
        </div>
        <div className={styles.two}>
          <div className={styles.question}>
            <label>Email</label>
            <input type="text" name="email" placeholder="brainbusterx34@gmail.com" value={formData.email} onChange={handleChange} style={emailReq ? {border:"red solid 1.5px"} : null}/>
            {emailReq?<p className={styles.requiredTooltip}>*Please fill out required information*</p>:null}
          </div>
          <div className={styles.question}>
            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="800-get-print" value={formData.phone} onChange={handleChange} style={phoneReq ? {border:"#F86381 solid 1.5px"} : null}/>
            {phoneReq?<p className={styles.requiredTooltip}>*Please fill out required information*</p>:null}
          </div>
        </div>
        <div className={styles.three}>
          <div className={styles.question}>
            <label>Quantity of Items and Garment Style</label>
            <input type="text" name="quantity" placeholder="12 Shirts, 12 Hoodies, etc." value={formData.quantity} onChange={handleChange} style={quantityReq ? {border:"#F86381 solid 1.5px"} : null}/>
            {quantityReq?<p className={styles.requiredTooltip}>*Please fill out required information*</p>:null}
          </div>
          <div className={styles.dropdown}>
              <label>Placement of Print(s)</label>
              <Dropdown buttonText=" -Select All That Apply- " content={options} onSelectionChange={handlePlacementChange}></Dropdown>
          </div>
        </div>
        <div className={styles.tellus}>
          <label >Tell Us About your Project</label>
          <textarea name="details" placeholder="Anything else you'd like for us to know?" value={formData.details} onChange={handleChange}></textarea>
        </div>
        <div className={styles.artwork}>
          <div className={styles.artworkHeader}>
            <label className={styles.uploadLabel}>Upload Your Artwork</label>
            <div className={styles.monster}>
              <img src={monster} className={styles.image} />
            </div>
          </div>
          <label htmlFor="artwork" className={styles.customFileLabel}>
            Browse Files
          </label>
          <input
            type="file"
            id="artwork"
            name="artwork"
            multiple
            className={styles.fileinput}
            onChange={handleFileChange}
          />
          <div className={styles.filesselected}>{files.length == 0 ? "No Files Selected" : files.map((file, index) => (<span key={index} className={styles.eachfile}><button onClick={() => handleFileRemove(index)}><img src={fileaccent} className={styles.fileaccent} /></button>{file.name}</span>))}
          </div>
        </div>
        <button disabled={submitted} className={styles.button} type="submit" onMouseEnter={() => setIsSubmitHovered(true)} onMouseLeave={() => setIsSubmitHovered(false)}>
          {submitted ?<img src={done} style={{width:"110px", zIndex:"2",alignSelf: "center"}}/>:<img src={isSubmitHovered ? submithover : submit} />}
        </button>
        <input
          type="hidden"
          name="access_key"
          value={import.meta.env.VITE_WEB3_FORMS_ACCESS_KEY}
        />


      </form>

    </div>
  </>
}

export default Contact;
