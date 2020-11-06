import React, { useState, useEffect } from 'react'
import List from './List'
import Search from './Search'
import JoblyApi from './JoblyAPI'
import Box from '@material-ui/core/Box';

const Companies = () => {
  const [companies, setCompanies] = useState([])
  useEffect(() => {
    async function getCompanies() {
      let companies = await JoblyApi.getCompanies()
      setCompanies(companies)
    }

    getCompanies()
  }, [])

  async function handleSearch(search) {
    let companies = await JoblyApi.getCompanies(search);
    setCompanies(companies);
  }

  return (
    <Box component="div" margin="40px auto" width="1200px">
      <Search endpoint="/companies" search={handleSearch}/>
      <List cards={companies} />
    </Box>
  )
}

export default Companies