import { useState } from "react";
import styles from "./Contact.module.css";
import submit from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Submit.svg";
import submithover from "../assets/Assets/Assets/Deliverables/Buttons/Web/SVG/Fatima-Web-Buttons-Submit-Hover.svg";
import Dropdown from "../parts/Dropdown";
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
  ]
  const [isSubmitHovered, setIsSubmitHovered] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  }
  return <>
    <div className={styles.container}>
      <p className={styles.header}>Got an idea? Tell us more!</p>
      <div className={styles.links}>
        <p>IG: @fatima.printed</p>
        <p>Email: fatima.printed@gmail.com</p>
      </div>

      <form onSubmit={handleSubmit}>
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
            <Dropdown buttonText=" -Select All That Apply- " content={options}></Dropdown>
          </div>
        </div>
        <div className={styles.tellus}>
          <label>Tell Us About your Project</label>
          <textarea name="details" placeholder="Anything else you'd like for us to know?" value={formData.details} onChange={handleChange}></textarea>
        </div>
        <div className={styles.question}>
          <label>Upload Your Artwork</label>
          <input type="button" name="artwork" />
        </div>
        <button className={styles.button} type="submit" onMouseEnter={() => setIsSubmitHovered(true)} onMouseLeave={() => setIsSubmitHovered(false)}>
          <img src={isSubmitHovered ? submithover : submit} />
        </button>


      </form>

    </div>
  </>
}

export default Contact;
