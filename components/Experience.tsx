import styles from '../styles/Experience.module.css'

export default function Experience({ experiences }) {
    return (
        <div className={styles.container}>
            <div className={styles.container_row}>
                <h3>Experience</h3>
                <img src="/picche.svg" />
            </div>

            {
                experiences.map((exp) => (
                    <div key={exp.place}>
                        <div className={styles.container_row}>
                            <h5>{exp.place}</h5>
                            <a href={exp.url} target="_blank">
                                <img src="/ext-url.svg" style={{width: '15px'}}/>   
                            </a>
                        </div>
                        <p> {exp.role} </p>
                        <p> {exp.time} </p>
                    </div>
                ))
            }
        </div>
    )
}