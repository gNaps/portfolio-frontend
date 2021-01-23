import styles from '../styles/Education.module.css'

export default function Education() {
    return (
        <div className={styles.container}>
            <div className={styles.container_row}>
                <h3>Education</h3>
                <img src="/fiori.svg" />
            </div>
            
            <div className={styles.container_row}>
                <h5>Computer Science degree</h5>
            </div>
            <p> Milano-Bicocca University </p>
            <p> October 2015 - October 2019 </p>
        </div>
    )
}