import styles from '../styles/Certifications.module.css'

export default function Certifications() {
    return (
        <div className={styles.container}>
            <div className={styles.container_row}>
                <h3>Certifications</h3>
                <img src="/cuore.svg" />
            </div>
            
            <div className={styles.container_row}>
                <img className={styles.certificate_img} src="/mcsa.svg" />
                <img className={styles.certificate_img} src="/mcsd.svg" />
            </div>
        </div>
    )
}