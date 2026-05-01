import React from 'react'
import Hero from './Sections/Hero'
import Collection from './Sections/Collection'
import Categories from './Sections/Categories'
import Gallery from './Sections/Gallery'
import HowItWorks from './Sections/HowItWorks'
import MailingList from './Sections/MailingList'

export default function Main() {
  return (
    <main>
        <Hero />
        <Collection />
        <Gallery />
        <Categories />
        <HowItWorks />
        <MailingList />
    </main>
  )
}
