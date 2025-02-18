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
      <form className={styles.pagestyle} onSubmit={handleStyleSubmit}>
        <label>description</label>
        <textarea className={styles.inputbox} type="text" name="description" onChange={handleStyleChange} value={form.description} />
        <label>home right pictures</label>
        {form.homeRightPictures.map((item, index) => (
          <textarea key={index} className={styles.inputbox} type="text" name="homeRightPictures" onChange={(e) => handleStyleChange(e, index)} value={item} />
        ))}
        <label>home gif</label>
        <textarea className={styles.inputbox} type="text" name="gif" onChange={handleStyleChange} value={form.gif} />
        <label>testimonials</label>
        {/* {form.testimonials.map((item, index) => ( */}
        {/*   <textarea key={index} className={styles.inputbox} type="text" name="testimonials" onChange={(e) => handleStyleChange(e, index)} value={item} /> */}
        {/* ))} */}
        {/* <label>shop</label> */}
        <label>password</label>
        <textarea className={styles.inputbox} type="text" name="password" onChange={handleStyleChange} value={form.password} />
        <button type="submit" className={styles.submit}>Submit Changes</button>
      </form>
    </div>
  </>

}
export default AdminLeftPanel;
