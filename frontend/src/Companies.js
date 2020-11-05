import React, { useState, useEffect } from 'react'
import List from './List'
import Search from './Search'
import JoblyApi from './JoblyAPI'
import Container from '@material-ui/core/Container';

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
    let companies = await JoblyApi.getCompany(search);
    setCompanies(companies);
  }

  return (
    <Container>
      <Search endpoint="/companies" search={handleSearch}/>
      <List cards={companies} />
    </Container>
  )
}

export default Companies