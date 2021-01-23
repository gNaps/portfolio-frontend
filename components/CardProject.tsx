import styles from '../styles/CardProject.module.css'
import Link from 'next/link'

export default function CardProject({ project }) {

    return (
        <>
        <div className={styles.card}>
            <div>
                <p>
                    {project.technologies.map((tech) => (
                        <img key={tech.value} src={`/${tech.value}.svg`} />
                    ))}
                </p>
            </div>
            <div>
                <Link href={`/project/${project.slug}`}>
                    <a>
                        <p>
                            {project.name}
                        </p> 
                    </a>
                </Link>
            </div>
        </div>
        </>
    )
}