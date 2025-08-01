import { useState } from 'react'
import Menu from '../Menu/Menu'
import styles from './styles.module.scss'
import { useMainLayout } from './useMainLayout'

const MainLayout = ({ children }) => {
    const { isClosed, ToggleMenu } = useMainLayout()

    return (
        <main className={`${styles['wrapper']} ${!isClosed ? styles['wrapper--menu__open'] : ""}`} >
            <Menu handleMouseEnter={ToggleMenu} handleMouseLeave={ToggleMenu} isClosed={isClosed} />
            <section className={styles['wrapper__section']}>
                {children}
            </section>
        </main>
    )
}

export default MainLayout