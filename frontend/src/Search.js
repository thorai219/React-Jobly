import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Search = ({ search }) => {
  const [handle, setHandle] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    search(handle)
  }

  const handleChange = e => {
    setHandle(e.target.value)
  }

  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="handle"
          label="Search" 
          variant="outlined" 
          value={handle}
          onChange={handleChange}
        />
        <Button 
          variant="contained" 
          color="primary"
          type="submit"
        >
        Search
        </Button>
      </form>
    </div>

  )
}

export default Search