import React, { useState, useEffect } from 'react'
import './Coursel.css'
import { data } from '../Helpers/data'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { motion } from 'framer-motion';

export default function Coursel() {
  const [currImg, setcurrImg] = useState(1);
  useEffect(() => {
    const intervalId = setInterval(() => {
        setcurrImg((currImg + 1) % data.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, [currImg]);

  return (
    <div className='coursel'>
        <div className='courselInner' style={{backgroundImage: `url(${data[currImg].img})`}}>
        {/* <div className='left' onClick={() => currImg > 0 && setcurrImg(currImg-1)}>
            <ArrowBackIosIcon style={{ fontSize: 30}}/>
        </div> */}
        <div className='center'>
        <h1>{data[currImg].title}</h1>
          <p>{data[currImg].subTitle}</p>
        </div>
        {/* <div className='right' onClick={() => currImg < data.length-1 && setcurrImg(currImg + 1)}>
            <ArrowForwardIosIcon style={{ fontSize: 30 }}/>
        </div> */}
        </div>
    </div>
  )
}
