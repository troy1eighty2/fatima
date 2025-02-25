import styles from "./AdminLeftPanel.module.css"
import { useState, useEffect } from "react"
import axios from "axios"
function AdminLeftPanel() {
  const handleStyleSubmit = (e) => {

    e.preventDefault()
    console.log(form)
  }
  const handleStyleChange = (e, index, field) => {
    const { name, value } = e.target
    if (name === "homeRightPictures") {
      const updatedPictures = [...form.homeRightPictures]
      updatedPictures[index] = value

      setForm(() => ({
        ...form,
        [name]: updatedPictures
      }))

    }
    else if (name === "testimonials") {
      const updatedTestimonials = [...form.testimonials]
      updatedTestimonials[index] = {
        ...updatedTestimonials[index],
        [field]: value,
      }
      setForm(() => ({
        ...form,
        [name]: updatedTestimonials
      }))
    }
    else if (name === "shop") {
      console.log("shop")

    }
    else {
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
        **THIS PAGE WONT SAVE YOUR WORK IF YOU REFRESH OR EXIT IT. PRESS SUBMIT CHANGES TO SAVE.**
      </p>
      <form className={styles.pagestyle} onSubmit={handleStyleSubmit}>

        <div className={styles.option}>
          <h1 className={styles.label}>description</h1>
          <textarea className={styles.inputbox} type="text" name="description" onChange={handleStyleChange} value={form.description} />
        </div>

        <div className={styles.option}>
          <h1 className={styles.label}>home gallery</h1>
          {form.homeRightPictures.map((item, index) => (
            <textarea key={index} className={styles.inputbox} type="text" name="homeRightPictures" onChange={(e) => handleStyleChange(e, index)} value={item} />
          ))}
        </div>

        <div className={styles.option}>
          <h1 className={styles.label}>home gif</h1>
          <textarea className={styles.inputbox} type="text" name="gif" onChange={handleStyleChange} value={form.gif} />
        </div>

        <div className={styles.option}>
          <h1 className={styles.label}>testimonials</h1>
          {form.testimonials.map((item, index) => (
            <div key={index}>
              <p>Quote, Author</p>
              <textarea className={styles.inputbox} type="text" name="testimonials" onChange={(e) => handleStyleChange(e, index, "text")} value={item.text} />
              <textarea className={styles.inputbox} type="text" name="testimonials" onChange={(e) => handleStyleChange(e, index, "author")} value={item.author} />
            </div>
          ))}
        </div>

        <div className={styles.option}>
          <h1 className={styles.label}>shop</h1>
          <button className={styles.addproduct}>Add Product</button>
          {form.shop.map((item, index) => (
            <div key={index} className={styles.product}>
              <p>name, description, pictures, price, stock (xs,s,m,l,xl)</p>
              <textarea className={styles.inputbox} type="text" name="shop" onChange={(e) => handleStyleChange(e, index)} value={item.name} />
              <textarea className={styles.inputdesc} type="text" name="shop" onChange={(e) => handleStyleChange(e, index)} value={item.description} />
              <h2 className={styles.label2}>product pictures</h2>
              <button className={styles.addproduct}>Add Picture</button>
              {item.pictures.map((item, index) => {
                return <textarea key={index} className={styles.inputbox} type="text" name="pictures" onChange={(e) => handleStyleChange(e, index)} value={item.url} />

              })}
              <textarea className={styles.inputbox} type="text" name="shop" onChange={(e) => handleStyleChange(e, index)} value={item.price} />
              <h2 className={styles.label2}>stock</h2>
              <p>xs, s, m, l, xl, xxl</p>
              <div className={styles.stockbox}>
                <textarea className={styles.stockboxbox} type="text" name="shop" onChange={(e) => handleStyleChange(e, index)} value={item.stock.xs} />
                <textarea className={styles.stockboxbox} type="text" name="shop" onChange={(e) => handleStyleChange(e, index)} value={item.stock.s} />
                <textarea className={styles.stockboxbox} type="text" name="shop" onChange={(e) => handleStyleChange(e, index)} value={item.stock.m} />
                <textarea className={styles.stockboxbox} type="text" name="shop" onChange={(e) => handleStyleChange(e, index)} value={item.stock.l} />
                <textarea className={styles.stockboxbox} type="text" name="shop" onChange={(e) => handleStyleChange(e, index)} value={item.stock.xl} />
                <textarea className={styles.stockboxbox} type="text" name="shop" onChange={(e) => handleStyleChange(e, index)} value={item.stock.xxl} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.option}>
          <h1 className={styles.label}>password</h1>
          <textarea className={styles.inputbox} type="text" name="password" onChange={handleStyleChange} value={form.password} />
        </div>

        <button type="submit" className={styles.submit}>Submit Changes</button>
      </form>
    </div>
  </>

}
export default AdminLeftPanel;
