import Head from 'next/head'
import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Footer from '../components/Footer';

import projects from '../api/projects.json'
import experiences from '../api/experiences.json'
import skills from '../api/skills.json'

export default function Home() {
  return (
    <Layout>
      <Navbar home={true} />
      <Header />
      <Projects projects={projects} />
      <Resume experiences={experiences} skills={skills} />
      <Footer />
    </Layout>
  )
}