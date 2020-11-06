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

  return (
    <Box component="div" margin="40px auto" width="1200px">
      <Search endpoint="/companies" search={handleSearch}/>
      <List cards={jobs} />
    </Box>
  )
}

export default Jobs