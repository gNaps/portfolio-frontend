import styles from '../styles/CardProject.module.css'
import Link from 'next/link'
import { motion } from "framer-motion"

export default function CardProject({ project }) {

    return (
        <>
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}>
            <Link href={`/project/${project.slug}`}>
                <a className={styles.link}>
                    <div className={styles.card}>
                        <div>
                            <p>
                                {project.technologies.map((tech) => (
                                    <img key={tech.value} src={`/${tech.value}.svg`} />
                                ))}
                            </p>
                        </div>
                        <div>    
                            <p>
                                {project.name}
                            </p> 
                        </div>
                    </div>
                </a>
            </Link>
        </motion.div>
        </>
    )
}