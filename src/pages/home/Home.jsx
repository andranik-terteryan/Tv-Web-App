import Featured from '../../components/Featured/Featured';
import TrandingNow from '../../components/TrandingNow/TrandingNow';
import { useVideoContext } from '../../context/VideoContext';
import styles from './styles.module.scss'

const Home = () => {
    const { featuredVideo } = useVideoContext();

    return (
        <div className={styles['main-panel']} style={{ backgroundImage: `url(${featuredVideo?.CoverImage})` }}>
            <Featured featuredVideo={featuredVideo} />
            <TrandingNow />
        </div>
    )
}
export default Home