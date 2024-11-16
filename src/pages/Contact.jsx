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
      <div className={styles.links}>
        <p>IG: @fatima.printed</p>
        <p>Email: fatima.printed@gmail.com</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.question}>
          <label>Your Name</label>
          <input type="text" />
        </div>
        <div className={styles.two}>
          <div className={styles.question}>
            <label>Email</label>
            <input type="text" />
          </div>
          <div className={styles.question}>
            <label>Phone Number</label>
            <input type="text" />
          </div>
        </div>
        <div className={styles.three}>
          <div className={styles.question}>
            <label>Quantity of Items and Garment Style</label>
            <input type="text" />
          </div>
          <div className={styles.question}>
            <label>Placement of Print(s)</label>
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
        </div>
        <div className={styles.tellus}>
          <label>Tell Us About your Project</label>
          <input type="text" />
        </div>
        <div className={styles.question}>
          <label>Upload Your Artwork</label>
          <input type="button" />
        </div>
      </form>

    </div>
  </>
}

export default Contact;
