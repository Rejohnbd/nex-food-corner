import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Featured.module.css';

function Featured() {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/fatured.png",
    "/img/fatured2.png",
    "/img/fatured3.png",
  ];

  const handelArrow = (direction) => {
    if(direction == 'l') {
      setIndex(index !== 0 ? index - 1 : 2);
    }
     if(direction == 'r') {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left : 0 }} onClick={() => handelArrow("l")}>
        <Image src="/img/arrowl.png" alt="" layout='fill' objectFit='contain' />
      </div>
      <div className={styles.wrapper} style={{tramform: `translateX(${-100*index}vw)`}}>
          {images.map((img, i) => (
            <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout='fill' objectFit='contain' />
            </div>
          ))}
      </div>
      <div className={styles.arrowContainer} style={{ right : 0}} onClick={() => handelArrow("r")}>
        <Image src="/img/arrowr.png" alt="" layout='fill' objectFit='contain' />
      </div>
    </div>
  )
}
export default Featured;
