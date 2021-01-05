import Head from 'next/head'
import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Projects from '../components/Projects';

export default function Home({}) {
  return (
    <Layout>
      <Navbar />
      <Header />
      <Projects />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = []
  return {
    props: {
      allPostsData
    }
  }
}