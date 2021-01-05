import CardProject from '../components/CardProject'

import styles from '../styles/Projects.module.css'

export default function Projects() {

    return (
        <>
        <div className={styles.section}>
            <div className={`${styles.title} ${styles.top}`}>
                <h2>Projects</h2>
                <img src="/diamond.svg" />
            </div>

            <div className={styles.cards}>
                <CardProject />
                <CardProject />
                <CardProject />
            </div>

            <div className={`${styles.title} ${styles.bottom}`}>
                <img src="/github.svg" />
                <p>View my github</p>
            </div>
        </div>
        </>
    )
}