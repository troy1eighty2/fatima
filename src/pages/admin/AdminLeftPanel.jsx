import styles from "./AdminLeftPanel.module.css"
import { useState, useEffect } from "react"
import axios from "axios"
import AdminShopCard from "./AdminShopCard"
function AdminLeftPanel() {
  const handleStyleSubmit = (e) => {

    e.preventDefault()
    setForm(() => ({
      ...form,
      shop: store
    }))
    console.log(form)
  }
  const handleShopChange = (e, field) => {
    const { name, value } = e.target
    switch (name) {
      case "name":
        setStore(() => ({
          ...store,
          [name]: value
        }))
        break;
      case "description":
        break;
      case "price":
        break;
      case "xs":
        break;
      case "s":
        break;
      case "m":
        break;
      case "l":
        break;
      case "xl":
        break;
      case "xxl":
        break;
      default:
        console.log("default");
    }


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
      console.log(name)
      console.log(value)
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
  const [store, setStore] = useState([])
  const handleAddProduct = () => {
    console.log("add product")
    setStore(() => [
      ...store,
      {
        name: "",
        description: "",
        price: 0,
        pictures: [],
        stock: {
          xs: 0,
          s: 0,
          m: 0,
          l: 0,
          xl: 0,
          xxl: 0,
        },
      }

    ])

  }

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

        setStore(theGoodStuff)
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
          <button className={styles.addproduct} onClick={handleAddProduct}>Add Product</button>
          {store.map((item, index) => {
            return <div className={styles.product} key={index}><AdminShopCard handleShopChange={handleShopChange} name={item.name} description={item.description} pictures={item.pictures} price={item.price} stock={item.stock} ></AdminShopCard></div>
          })}
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
