import React from 'react'
import Hero from '../Components/Hero'
import Homecards from '../Components/Homecards'
import JobListing from '../Components/JobsListing'
import View from '../Components/View'


const HomePage = () => {
  return (
    <>
        <Hero />
        <Homecards />
        <JobListing isHome={true}/>
        <View />
        
        
    </>
  )
}

export default HomePage