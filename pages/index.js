import Head from 'next/head'
import Image from 'next/image'
import { Card } from '../components/Card'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center bg-black h-96">
        <div className="flex items-center justify-center w-1/2 font-sans text-white ">
          <p className="text-xl text-center md:text-4xl">
            An engineer with a passion for tech and fitness. Occasionally dabbling in the product space and shooting photographs.
          </p>
        </div>
      </section>
      <container className="flex items-center justify-center p-6 bg-black ">
        <grid className="grid grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-3">
          <Card
            title="A BitClass Case Study"
            image="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWFuJTIwd29ya2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Card
            title="A Simpl Case Study"
            image="https://media.istockphoto.com/photos/portrait-of-young-latina-marketing-specialist-working-on-laptop-in-picture-id1298861980?b=1&k=20&m=1298861980&s=170667a&w=0&h=n0PtWzYOSDg1XU5S2nNUdM6C8SlFcj0o-Ayc7TsPKPc="
          />
          <Card
            title="Spotify Case Study"
            image="https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWVzdGhldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Card
            title="Shopify Case Study"
            image="https://images.unsplash.com/photo-1519060825752-c4832f2d400a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWVzdGhldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </grid>
      </container>
    </>
  )
}
