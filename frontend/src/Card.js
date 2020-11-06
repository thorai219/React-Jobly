import React from 'react'
import CompanyCard from './CompanyCard'
import JobCard from './JobCard'

const Card = ({ item }) => {
  if (item.handle) {
    return <CompanyCard company={item}/>
  } else {
    return <JobCard job={item} />
  }
}

export default Card