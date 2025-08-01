import clsx from 'clsx';
import styles from './styles.module.scss';
import searchIcon from '../../assets/images/icons/search.png';
import homeIcon from '../../assets/images/icons/home.png';
import tvShowsIcon from '../../assets/images/icons/tvShows.png';
import moviesIcon from '../../assets/images/icons/movies.png';
import genresIcon from '../../assets/images/icons/genres.png';
import watchLaterIcon from '../../assets/images/icons/watchLater.png';

const Menu = ({ isClosed, handleMouseEnter, handleMouseLeave }) => (
  <aside
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className={clsx(styles.sidebar, !isClosed && styles['sidebar--open'])}
  >
    {!isClosed && (
      <div className={clsx(styles.user, styles.sidebar__info, !isClosed && styles['user--open'])}>
        <div className={styles.user__image}>
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Avatar"
          />
        </div>
        <h3 className={styles.user__name}>Daniel</h3>
      </div>
    )}

    <nav className={clsx(styles.sidebar__menu, styles.menu, !isClosed && styles['menu--open'])}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <a className={styles.menu__link} href="#">
            <img className={styles.menu__icon} src={searchIcon} alt="Search" />
            <span className={styles.menu__text}>Search</span>
          </a>
        </li>
        <li className={styles.menu__item}>
          <a
            className={clsx(styles.menu__link, styles['menu__link--active'])}
            href="#"
          >
            <img className={styles.menu__icon} src={homeIcon} alt="Home" />
            <span className={styles.menu__text}>Home</span>
          </a>
        </li>
        <li className={styles.menu__item}>
          <a className={styles.menu__link} href="#">
            <img
              className={styles.menu__icon}
              src={tvShowsIcon}
              alt="TV Shows"
            />
            <span className={styles.menu__text}>TV Shows</span>
          </a>
        </li>
        <li className={styles.menu__item}>
          <a className={styles.menu__link} href="#">
            <img className={styles.menu__icon} src={moviesIcon} alt="Movies" />
            <span className={styles.menu__text}>Movies</span>
          </a>
        </li>
        <li className={styles.menu__item}>
          <a className={styles.menu__link} href="#">
            <img className={styles.menu__icon} src={genresIcon} alt="Genres" />
            <span className={styles.menu__text}>Genres</span>
          </a>
        </li>
        <li className={styles.menu__item}>
          <a className={styles.menu__link} href="#">
            <img
              className={styles.menu__icon}
              src={watchLaterIcon}
              alt="Watch Later"
            />
            <span className={styles.menu__text}>Watch Later</span>
          </a>
        </li>
      </ul>
    </nav>

    <div className={clsx(styles.sidebar__footer, styles.actions, !isClosed && styles['actions--open'])}>
      <ul className={styles.actions__list}>
        <li className={styles.actions__item}>
          <a className={styles.actions__link} href="#">
            Language
          </a>
        </li>
        <li className={styles.actions__item}>
          <a className={styles.actions__link} href="#">
            Get Help
          </a>
        </li>
        <li className={styles.actions__item}>
          <a className={styles.actions__link} href="#">
            Exit
          </a>
        </li>
      </ul>
    </div>
  </aside>
);

export default Menu;
