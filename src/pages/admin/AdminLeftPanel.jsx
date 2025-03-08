import styles from "./AdminLeftPanel.module.css"
import { useState, useEffect } from "react"
import axios from "axios"
import AdminShopCard from "./AdminShopCard"
import { v4 as uuidv4 } from "uuid"

function AdminLeftPanel() {
  const handleStyleSubmit = (e) => {

    e.preventDefault()
    setForm((prevForm) => ({
      ...prevForm
    }))
    console.log(store)
    console.log(form)

    axios
      .put(`${import.meta.env.VITE_API_URL}/config/put`, form)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {

        console.log(error)
      })
    store.forEach((item) => {

      if (item.newProduct) {
        console.log("new item")
        axios
          .post(`${import.meta.env.VITE_API_URL}/shop/post`, item)
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {

            console.log(error)
          })
      }
      else {
        console.log("old item")
        setStore((prevStore) =>
          prevStore.map((prod) =>
            prod._id === item._id
              ? { ...prod, newProduct: false }
              : prod
          )
        );
        axios
          .put(`${import.meta.env.VITE_API_URL}/shop/put/${item._id}`, item)
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {

            console.log(error)
          })
      }
    })
  }
  const handleShopChange = (e, _id, pictureIndex) => {
    const { name, value } = e.target;
    setStore((prevStore) =>
      prevStore.map((item) =>
        item._id === _id
          ? {
            ...item,
            ...(name === "name" || name === "description"
              ? { [name]: value }
              : name in item.stock
                ? {
                  stock: {
                    ...item.stock,
                    [name]: value,
                  },
                }
                : name === "picture" ? {
                  pictures: item.pictures.map((pic, index) =>
                    index === pictureIndex ? { ...pic, url: value } : pic
                  )
                } : {}
            )
          }
          : item
      )
    );
  };

  const handleStyleChange = (e, index, field) => {
    const { name, value } = e.target
    if (name === "homeRightPictures") {
      const updatedPictures = [...form.homeRightPictures]
      updatedPictures[index] = value

      setForm((prevForm) => ({
        ...prevForm,
        [name]: updatedPictures
      }))

    }
    else if (name === "testimonials") {
      const updatedTestimonials = [...form.testimonials]
      updatedTestimonials[index] = {
        ...updatedTestimonials[index],
        [field]: value,
      }
      setForm((prevForm) => ({
        ...prevForm,
        [name]: updatedTestimonials
      }))
    }
    else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value
      }))
    }
  }
  const [form, setForm] = useState({
    description: "",
    homeRightPictures: [],
    gif: "",
    testimonials: [],
    password: "",
  })
  const [store, setStore] = useState([])


  const handleAddProduct = () => {
    const temp_id = uuidv4()
    const item = {
      _id: temp_id,
      name: "",
      description: "",
      price: 0,
      pictures: [
        { url: "" }, { url: "" }, { url: "" }
      ],
      stock: { xs: 0, s: 0, m: 0, l: 0, xl: 0, xxl: 0 },
      newProduct: true
    };
    setStore((prevStore) => [...prevStore, item]);
  };
  const handleDelete = (id) => {
    console.log(`Delete this: ${id}`)
    axios
      .delete(`${import.meta.env.VITE_API_URL}/shop/delete/${id}`)
      .then((response) => {
        console.log(response)
        setStore((prevStore) => prevStore.filter(item => item._id !== id));
      })
      .catch((error) => {
        console.log(error)
      })

  }

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/config`)
      .then((response) => {
        const config = response.data[0]
        setForm((prevForm) => ({
          ...prevForm,
          _id: config._id,
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
          {store.map((item) => {
            return <div className={styles.product} key={item._id}><AdminShopCard handleDelete={() => handleDelete(item._id)} handleShopChange={handleShopChange} _id={item._id} name={item.name} description={item.description} pictures={item.pictures} price={item.price} stock={item.stock} ></AdminShopCard></div>
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
