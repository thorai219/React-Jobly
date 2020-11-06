import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import JoblyApi from './JoblyAPI'
import JobCard from './JobCard'

const Company = () => {
  const { handle } = useParams()
  const [company, setCompany] = useState(null)
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    async function getCompanyWithJobs() {
      const comp = await JoblyApi.getCompany(handle)
      setCompany(comp)
      setJobs(comp.jobs)
    }

    getCompanyWithJobs()
  }, [handle])

  if (!company) {
    return (
      <div className="container">
        <p className="text-center">Loading...</p>  
      </div>
    )
  }

  return (
    <div className="container" style={{marginTop: "50px"}}>
      <div className="flex-row">
        <img src={company.image} alt="avatar" />
        <div>
          <h2>{company.name}</h2>
          <p>{company.description}</p>
        </div>
      </div>

      {jobs.map(job => {
        return <JobCard job={job} key={job.id}/>
      })}
    </div>
  )
}

export default Company