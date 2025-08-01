import { useVideoContext } from '../../context/VideoContext';
import Button from '../../ui/Button/Button';
import { formatDurationFromSeconds } from '../../utils/utils';
import styles from './styles.module.scss';
import { useFeatured } from './useFeatured';

const Featured = ({ featuredVideo }) => {
  const { showVideo } = useVideoContext()
  const { videoRef } = useFeatured(featuredVideo, showVideo)


  return (
    <>
      <div className={styles['featured-movie']} >
        <h3 className={styles['featured-movie__category']} >{featuredVideo?.Category}</h3>
        <div className={styles['featured-movie__logo']} >
          <img src={featuredVideo?.TitleImage} alt={featuredVideo?.Title} />
        </div>
        <p className={styles['featured-movie__info']}>
          <span>{featuredVideo?.ReleaseYear}</span> <span>{featuredVideo?.MpaRating}</span> <span>{formatDurationFromSeconds(featuredVideo?.Duration)}</span>
        </p>
        <p className={styles['featured-movie__info']}>
          <span>{featuredVideo?.Description}</span>
        </p>
        <div className={styles['featured-movie__actions']} >
          <Button onClick={() => console.log('Play Button Is Clicked')} variant={'primary'} withIcon={true} text="Play" />
          <Button onClick={() => console.log('More Info Button Is Clicked')} variant={'secondary'} text="More Info" />
        </div>
      </div>
      {showVideo && (
        <div className={styles['featured-movie__video']} >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            src={featuredVideo?.VideoUrl}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

      )}

    </>

  )
}
export default Featured