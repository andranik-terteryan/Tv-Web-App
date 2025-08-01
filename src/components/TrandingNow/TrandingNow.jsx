import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss'
import 'swiper/css';
import { useVideoContext } from '../../context/VideoContext';
import { Mousewheel } from 'swiper/modules';

const TrandingNow = () => {
    const { trandingVideos, updateFeatured } = useVideoContext()

    return (
        <Swiper
            slidesPerView={8}
            scrollbar={{ draggable: true }}
            spaceBetween={15}
            modules={[Mousewheel]}
            direction="horizontal"
            mousewheel={true}
            className={styles["trandingVideos-slider"]}
        >
            {
                trandingVideos.map(item => (
                    <SwiperSlide onClick={() => updateFeatured(item)} key={item?.id} >
                        <div className={styles['movie-card']} >
                            <img src={item?.CoverImage} alt={item?.Title} />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default TrandingNow