import React, { useState, useEffect } from 'react'
import JoblyApi from './JoblyAPI'
import List from './List'
import Search from './Search'
import Box from '@material-ui/core/Box';

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    async function getJobs() {
      let jobs = await JoblyApi.getJobs()
      setJobs(jobs)
    }

    getJobs()
  }, [])

  async function handleSearch(search) {
    let jobs = await JoblyApi.getJobs(search)
    setJobs(jobs)
  }

  async function apply(idx) {
    let jobId = jobs[idx].id
    let msg = await JoblyApi.applyToJob(jobId)
    setJobs(j => j.map(job => 
      job.id === jobId ? { ...job, state: msg } : job
    ))
  }

  return (
    <Box component="div" margin="40px auto" width="1200px">
      <Search endpoint="/companies" search={handleSearch}/>
      <List cards={jobs} apply={apply} />
    </Box>
  )
}

export default Jobs