import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HeroCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'
const HomePage = () => {
  return (
    <>
      <Hero  title="Become a Dev Now ! " subtitle="Find the job that fits your skills and needs "/>
      <HomeCards/>
      <JobListings/>
      <ViewAllJobs/>
    </>
  )
}

export default HomePage
