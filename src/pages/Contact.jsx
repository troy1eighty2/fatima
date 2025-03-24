import { useState } from "react";
import styles from "./Contact.module.css";
import submit from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Submit.svg";
import submithover from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Submit-Hover.svg";
import Dropdown from "../parts/Dropdown";
import fileaccent from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Vector.svg";
import FooterLeft from "../components/FooterLeft";
import monster from "../assets/Assets/Assets/Deliverables/Illustrations/monster.png"

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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
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
          <input type="text" name="name" placeholder="First and Last" value={formData.name} onChange={handleChange} />
        </div>
        <div className={styles.two}>
          <div className={styles.question}>
            <label>Email</label>
            <input type="text" name="email" placeholder="brainbusterx34@gmail.com" value={formData.email} onChange={handleChange} />
          </div>
          <div className={styles.question}>
            <label>Phone Number</label>
            <input type="text" name="phone" placeholder="800-get-print" value={formData.phone} onChange={handleChange} />
          </div>
        </div>
        <div className={styles.three}>
          <div className={styles.question}>
            <label>Quantity of Items and Garment Style</label>
            <input type="text" name="quantity" placeholder="12 Shirts, 12 Hoodies, etc." value={formData.quantity} onChange={handleChange} />
          </div>
          <div className={styles.question}>
            <label>Placement of Print(s)</label>
            <Dropdown buttonText=" -Select All That Apply- " content={options} onSelectionChange={handlePlacementChange}></Dropdown>
          </div>
        </div>
        <div className={styles.tellus}>
          <label>Tell Us About your Project</label>
          <textarea name="details" placeholder="Anything else you'd like for us to know?" value={formData.details} onChange={handleChange}></textarea>
        </div>
        <div className={styles.question}>
          <label>Upload Your Artwork</label>
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
          <div className={styles.filesselected}>{files.length == 0 ? "No Files Selected" : files.map((file, index) => (<span key={index} className={styles.eachfile}><button onClick={() => handleFileRemove(index)}><img src={fileaccent} className={styles.fileaccent} /></button>{file.name}</span>))}</div>
        </div>
        <button className={styles.button} type="submit" onMouseEnter={() => setIsSubmitHovered(true)} onMouseLeave={() => setIsSubmitHovered(false)}>
          <img src={isSubmitHovered ? submithover : submit} />
        </button>


      </form>

    </div>
    <FooterLeft></FooterLeft>
  </>
}

export default Contact;
