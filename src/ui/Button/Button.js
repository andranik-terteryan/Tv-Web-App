import clsx from 'clsx';
import styles from './styles.module.scss'

const variants = {
    primary: 'primary',
    secondary: 'secondary'
}

const Button = ({ type, text, onClick, variant, withIcon }) => {
    return (
        <button className={clsx(
            styles.button,
            variant && styles[variants[variant]],
            withIcon && styles['icon']
        )} onClick={() => onClick()} type={type}>
            <span>
                {text}
            </span>
        </button>
    )
}

export default Button