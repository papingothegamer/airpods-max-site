import React from 'react';
import Image from 'next/image';
import styles from '../styles/Gallery.module.css';

const Gallery: React.FC = () => {
  return (
    <div>
      <div className={styles['gallery-header-container']}>
        <h2 className={styles['gallery-title']} id="gallery-text">
          Gallery
        </h2>
      </div>
      <div className={styles['gallery-container']}>
        <div className={styles['bento-grid']}>
          <div className={styles['gallery-item']}>
            <Image
              src="/images/2-Apple-AirPodsMax-ManyColors-1024x683.webp"
              alt="Gallery Image 1"
              className={styles['gallery-image']}
              width={250}
              height={250}
            />
          </div>
          <div className={styles['gallery-item']}>
            <Image
              src="/images/airpods-max-sq-1607450429.jpeg"
              alt="Gallery Image 2"
              className={styles['gallery-image']}
              width={250}
              height={250}
            />
          </div>
          <div className={styles['gallery-item']}>
            <Image
              src="/images/airpodsmaxfinal.jpeg"
              alt="Gallery Image 3"
              className={styles['gallery-image']}
              width={250}
              height={250}
            />
          </div>
          <div className={styles['gallery-item']}>
            <Image
              src="/images/apple_airpods_max_in_official_colors_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4567775_o.jpeg"
              alt="Gallery Image 4"
              className={styles['gallery-image']}
              width={250}
              height={250}
            />
          </div>
          <div className={styles['gallery-item']}>
            <Image
              src="/images/raf7LBu9UxDLAxgvhpqi65.jpeg"
              alt="Gallery Image 5"
              className={styles['gallery-image']}
              width={250}
              height={250}
            />
          </div>
          <div className={styles['gallery-item']}>
            <Image
              src="/images/download.png"
              alt="Gallery Image 6"
              className={styles['gallery-image']}
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;