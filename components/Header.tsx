import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.head}>
            <div className={styles.avatar}>
                <img src="/avatar.svg" />
            </div>

            <p>Hi I'm Gabriele!</p>

            <div className={styles.title}>
                <h2>Web Developer</h2>
                <img src="/macbook.svg" />
            </div>

            <h6>
                A fullstack developer <span>JS</span> and <span>C#</span>.
                I like using <span>Angular</span>, <span>React</span>, <span>.NET </span>
                and <span>NodeJS</span>.
            </h6>

            <button className={styles.btn_touch}>
                Get in touch
            </button>
        </div>
    )
}