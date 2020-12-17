import React, { useState } from "react"
import Hidden from "@material-ui/core/Hidden";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const PhotoGallery = () => {
  // const { scrollY } = useViewportScroll();
  // const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  // const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: false
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };
  return (
    <>
    <Hidden smDown>

    <div className="galleryBody">
    <div className="galleryText">エクセルNZ<br/>フォトギャラリー</div>
   <ul className="gallery">


  <motion.li  animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1, ease: 'easeOut' }}
        ref={ref} className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery1.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </motion.li>

  <motion.li animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1, ease: 'easeOut' }}
        ref={ref} className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery2.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
</motion.li>

 
 <motion.li  animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 5, ease: 'easeOut' }}
        ref={ref} className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery3.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </motion.li>

  <motion.li  animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        ref={ref} className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery4.jpg"alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </motion.li>
  <motion.li  animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        ref={ref} className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery5.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </motion.li>
  <motion.li  animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 3.5, ease: 'easeOut' }}
        ref={ref} className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery6.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </motion.li>
  <motion.li  animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 3.5, ease: 'easeOut' }}
        ref={ref} className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery7.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </motion.li>
  <motion.li  animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 3, ease: 'easeOut' }}
        ref={ref} className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery8.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </motion.li>
  <motion.li  animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 3, ease: 'easeOut' }}
        ref={ref} className="gallery__item">
    <figure>
      <a href="#">
 
        <img src="/assets/gallery9.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </motion.li>




  <motion.li  animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 3, ease: 'easeOut' }}
        ref={ref} className="gallery__item">
    <figure>
      <a href="#">
 
        <img src="/assets/gallery10.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>


  </motion.li>


  <motion.li  animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 3, ease: 'easeOut' }}
        ref={ref} className="gallery__item">
    <figure>
      <a href="#">
 
        <img src="/assets/gallery12.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </motion.li>

  <motion.li  animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 3, ease: 'easeOut' }}
        ref={ref} className="gallery__item">
    <figure>
      <a href="#">
 
        <img src="/assets/gallery12.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </motion.li>

  <motion.li  animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 3, ease: 'easeOut' }}
        ref={ref} className="gallery__item">
    <figure>
      <a href="#">
 
        <img src="/assets/gallery13.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </motion.li>

  <motion.li  animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 3, ease: 'easeOut' }}
        ref={ref} className="gallery__item">
    <figure>
      <a href="#">
 
        <img src="/assets/gallery14.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </motion.li>

  <motion.li  animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 3, ease: 'easeOut' }}
        ref={ref} className="gallery__item">
    <figure>
      <a href="#">
 
        <img src="/assets/gallery15.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </motion.li>

  <motion.li  animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 3, ease: 'easeOut' }}
        ref={ref} className="gallery__item">
    <figure>
      <a href="#">
 
        <img src="/assets/gallery16.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </motion.li>

  <motion.li  animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 3, ease: 'easeOut' }}
        ref={ref} className="gallery__item">
    <figure>
      <a href="#">
 
        <img src="/assets/gallery17.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </motion.li>

  <motion.li  animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 3, ease: 'easeOut' }}
        ref={ref} className="gallery__item">
    <figure>
      <a href="#">
 
        <img src="/assets/gallery18.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </motion.li>


  
  </ul>
    </div>
  
    </Hidden>


<Hidden mdUp>
 <div className="galleryBody">
   
   <ul className="gallery">
  <li className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery1.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </li>

  <li className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery2.JPG" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
</li>

 
 <li className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery3.jpg" alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </li>

  <li className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery4.jpg"alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </li>
  
  <li className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery5.jpg"alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </li>
  <li className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery6.jpg"alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </li>
  <li className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery7.jpg"alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </li>
  <li className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery8.jpg"alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </li>
  <li className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery9.jpg"alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </li>
  <li className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery10.jpg"alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </li>
  <li className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery12.jpg"alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </li>
  <li className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery12.jpg"alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </li>
  <li className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery13.jpg"alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </li>
  <li className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery14.jpg"alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </li>
  <li className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery15.jpg"alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </li>
  <li className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery16.jpg"alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </li>
  <li className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery17.jpg"alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </li>
  <li className="gallery__item">
    <figure>
      <a href="#">
        <img src="/assets/gallery18.jpg"alt="" />
        <figcaption><span>NZ land label</span></figcaption>
      </a>
    </figure>
  </li>
  </ul>


  
    </div>
  
</Hidden>
</>
 
  )
}

export default PhotoGallery


