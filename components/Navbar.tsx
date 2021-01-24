import styles from '../styles/Navbar.module.css'
import { useState } from 'react'

export default function Navbar({ home }) {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <>
        <div className={styles.nav}>
            <div className={styles.left}>
                <a href="mailto:gabriele.nap@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="/mail.svg" />
                    <p>gabriele.nap@gmail.com</p>
                </a>
            </div>

            { home &&
                <div className={styles.right}>
                    <a href="#section-project"><li>Projects</li></a>
                    <a href="#section-resume"><li>Resume</li></a>
                    <a href="#section-contacts"><li>Contacts</li></a>
                </div>
            }

            { !home &&
                <div className={styles.right}>
                    <a href="/"><li>Return to home</li></a>
                </div>
            }

            <div 
                className={styles.hamburger} 
                onClick={() => setToggleMenu(!toggleMenu)}
            >
                <img src="/ham-menu.svg" style={{width: '30px'}}/>
                {/* { !toggleMenu && <img src="/ham.svg" style={{width: '45px'}}/> }
                { toggleMenu && <i class="fas fa-times" style={{marginRight: '30px', color: '#F5F5F2'}}/> } */}
            </div>
        </div>

        { toggleMenu && home &&
            <div className={styles.nav_sub}>
                <a href="#section-project"><li>Projects</li></a>
                <a href="#section-resume"><li>Resume</li></a>
                <a href="#section-contacts"><li>Contacts</li></a>
            </div>
        }

        { toggleMenu && !home &&
            <div className={styles.nav_sub}>
                <a href="/"><li>Return to home</li></a>
            </div>
        }
        </>
    )
}