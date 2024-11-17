import { useState } from "react";
import styles from "./Contact.module.css";
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
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
          <textarea name="details" placeholder="Anything else you'd like for us to know?" value={formData.details} onChange={handleChange}></textarea>
        </div>
        <div className={styles.question}>
          <label>Upload Your Artwork</label>
          <input type="button" name="artwork" />
        </div>

      </form>

    </div>
  </>
}

export default Contact;
