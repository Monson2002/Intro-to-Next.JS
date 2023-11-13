"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

  const APIurl = "https://picsum.photos/seed/picsum/200/300";
  const getImage = async () => {
    try {
      await axios.get(APIurl)
      .then(res => {
        setImage(res.data)
        console.log(res)
        console.log(Image);
      })
        // console.log(response.data);
    }
    catch (err) {
      throw err
    }
  }

  useEffect(() => {
    getImage();
  }, [])

  const [Image, setImage] = useState([])

  return (
    <>
        <div className=''>
            <h1>Home</h1>
            {Image}
        </div>
    </>
  )
}

export default Home