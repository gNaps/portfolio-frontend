import Head from 'next/head'
import Layout from '../../components/Layout'
import Link from 'next/link'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import projects from '../../api/projects.json'

import styles from '../../styles/Project.module.css'

export default function Project({ project }) {
    return (
        <Layout>
            <Navbar />
            <div className={styles.container}>
                <h1>{project.name}</h1>
                <h4>{project.subtitle}</h4>

                <h2>Description</h2>
                <p>{project.description}</p>

                <h2>Implementation</h2>
                <p>{project.implementation}</p>

                <div className={styles.screen}>
                    {
                        project.screenshots.map((p) => (
                            <img src={`/${p.value}`} key={p.value} />
                        ))
                    }
                </div>

                <div className={styles.container_button}>
                    <a href={project.github} target="_blank">
                        <button className={styles.button}>
                            <img src="/github.svg" />
                            View on Github
                        </button>
                    </a>

                    <a href={project.online} target="_blank">
                        <button className={styles.button}>
                            View online
                        </button>
                    </a>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export async function getStaticProps({ params: { slug } }) {
    const found = await projects.find((element) => {return element.slug === slug})

    return {
        props: {
            project: found
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: projects.map((el) => ({
            params: { slug: String(el.slug) }
        })),
        fallback: false
    };
}