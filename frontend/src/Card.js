import React from 'react'
import CompanyCard from './CompanyCard'
import JobCard from './JobCard'

const Card = ({ item = {}, apply = () => null, idx }) => {
  if (item.handle) {
    return <CompanyCard company={item} />
  } else {
    return <JobCard job={item} handleApply={() => apply(idx)} />
  }
}

export default Card