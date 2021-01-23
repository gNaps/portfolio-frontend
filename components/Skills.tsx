import styles from '../styles/Skills.module.css'

export default function Skills({ skills }) {
    return (
        <div className={styles.container}>
            <div className={styles.container_row}>
                <h3>Skills</h3>
                <img src="/quadri.svg" />
            </div>
            
            <div className={styles.container_skills}>
                {
                    skills.map((skill) => (
                        <div className={styles.skills_cell} key={skill.name}>
                            <div className={styles.skills_item}>
                                <img src={`/${skill.icon}.svg`} />
                                <p>{skill.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}