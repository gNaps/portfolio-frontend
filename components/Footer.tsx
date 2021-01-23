import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.row_first}>
                <img src="/party.svg" />
                <h2>
                    Thanks for visited my portfolio.
                    If you are interested contact me.
                </h2>
            </div>
            <div className={styles.row_second}>
                <div>
                    <img src="/linkedin.svg" style={{width: '40px', marginRight: '10px'}}/>
                    <img src="/github.svg" style={{width: '40px', marginRight: '10px'}}/>
                    <img src="/instagram.svg" style={{width: '40px', marginRight: '10px'}}/>
                </div>
                <div className={styles.right}>
                    <img src="/mail_w.svg" style={{width: '40px', marginRight: '10px'}}/>
                    <p>gabriele.nap@gmail.com</p>
                </div>
            </div>
            <p style={{marginTop: '30px'}}>© 2021 Gabriele Napoli</p>
        </div>
    )
}