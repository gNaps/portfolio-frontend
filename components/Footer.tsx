import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer} id="section-contacts">
            <div className={styles.row_first}>
                <img src="/party.svg" />
                <h2>
                    Thanks for visited my portfolio.
                    If you are interested contact me.
                </h2>
            </div>
            <div className={styles.row_second}>
                <div>
                    <Link href="https://www.linkedin.com/in/gabriele-napoli-a87529185/">
                        <a target="_blank">
                            <img src="/linkedin.svg" style={{width: '40px', marginRight: '10px'}}/>
                        </a>
                    </Link>
                    <Link href="https://github.com/gNaps">
                        <a target="_blank">
                            <img src="/github.svg" style={{width: '40px', marginRight: '10px'}}/>
                        </a>
                        </Link>
                    <Link href="https://www.instagram.com/napsryu/">
                        <a target="_blank">
                            <img src="/instagram.svg" style={{width: '40px', marginRight: '10px'}}/>
                        </a>
                    </Link>
                </div>
                <div className={styles.right}>
                    <a href="mailto:gabriele.nap@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src="/mail_w.svg" style={{width: '40px', marginRight: '10px'}}/>
                        <p>gabriele.nap@gmail.com</p>
                    </a>
                </div>
            </div>
            <p style={{marginTop: '30px'}}>© 2021 Gabriele Napoli</p>
        </div>
    )
}