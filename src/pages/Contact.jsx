import { useState } from "react";
import styles from "./Contact.module.css";
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '',
    placement: [],
    projectDetails: '',
    artwork: []
  });
  const handleSubmit = (e) => {
    console.log()
  }
  return <>
    <div className={styles.container}>
      <p className={styles.header}>Got an idea? Tell us more!</p>
      <p className={styles.contact}>IG: @fatima.printed Email: fatima.printed@gmail.com</p>

      <form onSubmit={handleSubmit}>
        <div className={styles.one}>
          <label>Your Name</label>
          <input type="text" />
        </div>
        <div className={styles.two}>
          <label>Email</label>
          <input type="text" />
          <label>Phone Number</label>
          <input type="text" />
        </div>
        <div className={styles.three}>
          <label>Quantity of Items and Garment Style</label><br />
          <input type="text" />
          <label>Placement of Print(s)</label><br />
          <select>
            <option value="Upper Chest">Upper Chest</option>
            <option value="Left Chest">Left Chest</option>
            <option value="Upper Back">Upper Back</option>
            <option value="Full Back">Full Back</option>
            <option value="Right Sleeve">Right Sleeve</option>
            <option value="Left Sleeve">Left Sleeve</option>
            <option value="Size Tags">Size Tags</option>
          </select>
        </div>
        <div>
          <label>Tell Us About your Project</label><br />
          <input type="text" />
        </div>
        <div>
          <label>Upload Your Artwork</label><br />
          <input type="button" />
        </div>
      </form>

    </div>
  </>
}

export default Contact;
