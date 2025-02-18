import styles from "./AdminLeftPanel.module.css"
import { useState, useEffect } from "react"
import axios from "axios"
function AdminLeftPanel() {
  const handleStyleSubmit = (e) => {

    e.preventDefault()
    console.log(form)
  }
  const handleStyleChange = (e, index) => {
    const { name, value } = e.target
    if (name === "homeRightPictures") {
      const updatedPictures = [...form.homeRightPictures]
      updatedPictures[index] = value

      setForm(() => ({
        ...form,
        [name]: updatedPictures
      }))

    } else {
      setForm(() => ({
        ...form,
        [name]: value
      }))
    }
  }
  const [form, setForm] = useState({
    description: "",
    homeRightPictures: [],
    gif: "",
    testimonials: [],
    shop: [],
    password: "",
  })

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/config`)
      .then((response) => {
        const config = response.data[0]
        setForm((prevForm) => ({
          ...prevForm,
          description: config.description,
          homeRightPictures: config.homeRightPictures,
          gif: config.gif,
          testimonials: config.testimonials,
          password: config.password,
        }))
      })
      .catch((error) => {
        console.log(error)
      })
    axios
      .get(`${import.meta.env.VITE_API_URL}/shop`)
      .then((response) => {
        const theGoodStuff = response.data

        setForm((prevForm) => ({
          ...prevForm,
          shop: theGoodStuff
        }))
      })
      .catch((error) => {
        console.log(error)
      })





  }, [])
  return <>
    <div className={styles.container}>
      <h1 className={styles.header}>Config</h1>
      <p>
        Remove content in input boxes to remove content on webpage.
      </p>
      <p>
        Maximum of 5 homeRightPictures and 5 testimonials.
      </p>
      <p>
        **THIS PAGE WONT SAVE YOUR WORK IF YOU REFRESH OR EXIT IT. PRESS SUBMIT CHANGES TO SAVE.**
      </p>
      <form className={styles.pagestyle} onSubmit={handleStyleSubmit}>

        <div className={styles.option}>
          <label>description</label>
          <textarea className={styles.inputbox} type="text" name="description" onChange={handleStyleChange} value={form.description} />
        </div>

        <div className={styles.option}>
          <label>home right pictures</label>
          {form.homeRightPictures.map((item, index) => (
            <textarea key={index} className={styles.inputbox} type="text" name="homeRightPictures" onChange={(e) => handleStyleChange(e, index)} value={item} />
          ))}
        </div>

        <div className={styles.option}>
          <label>home gif</label>
          <textarea className={styles.inputbox} type="text" name="gif" onChange={handleStyleChange} value={form.gif} />
        </div>

        <div className={styles.option}>
          <label>testimonials</label>
          {form.testimonials.map((item, index) => (
            <div key={index}>
              <p>Quote, Author</p>
              <textarea className={styles.inputbox} type="text" name="testimonials" onChange={(e) => handleStyleChange(e, index)} value={item.text} />
              <textarea className={styles.inputbox} type="text" name="testimonials" onChange={(e) => handleStyleChange(e, index)} value={item.author} />
            </div>
          ))}
        </div>

        <div className={styles.option}>
          <label>shop</label>
          {form.shop.map((item, index) => (
            <div key={index}>
              <p>name, description, pictures, price, stock (xs,s,m,l,xl)</p>
              <textarea className={styles.inputbox} type="text" name="shop" onChange={(e) => handleStyleChange(e, index)} value={item.name} />
              <textarea className={styles.inputdesc} type="text" name="shop" onChange={(e) => handleStyleChange(e, index)} value={item.description} />
              <textarea className={styles.inputbox} type="text" name="shop" onChange={(e) => handleStyleChange(e, index)} value={item.pictures} />
              <textarea className={styles.inputbox} type="text" name="shop" onChange={(e) => handleStyleChange(e, index)} value={item.price} />
              <textarea className={styles.inputbox} type="text" name="shop" onChange={(e) => handleStyleChange(e, index)} value={item.stock} />
            </div>
          ))}
        </div>

        <div className={styles.option}>
          <label>password</label>
          <textarea className={styles.inputbox} type="text" name="password" onChange={handleStyleChange} value={form.password} />
        </div>

        <button type="submit" className={styles.submit}>Submit Changes</button>
      </form>
    </div>
  </>

}
export default AdminLeftPanel;
