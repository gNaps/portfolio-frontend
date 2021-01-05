import styles from '../styles/Navbar.module.css'
import { useState } from 'react'

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <>
        <div className={styles.nav}>
            <div className={styles.left}>
                <img src="/mail.svg" />
                <p>gabriele.nap@gmail.com</p>
            </div>

            <div className={styles.right}>
                <li>Projects</li>
                <li>Resume</li>
                <li>Contacts</li>
            </div>
            <div 
                className={styles.hamburger} 
                onClick={() => setToggleMenu(!toggleMenu)}
            >
                <img src="/ham-menu.svg" style={{width: '30px'}}/>
                {/* { !toggleMenu && <img src="/ham.svg" style={{width: '45px'}}/> }
                { toggleMenu && <i class="fas fa-times" style={{marginRight: '30px', color: '#F5F5F2'}}/> } */}
            </div>
        </div>

        { toggleMenu &&
            <div className={styles.nav_sub}>
                <li>Projects</li>
                <li>Resume</li>
                <li>Contacts</li>
            </div>
        }
        </>
    )
}