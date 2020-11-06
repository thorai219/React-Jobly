import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

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
        <Box component="div" display="flex" margin="25px 0">
          <TextField
            size="small"
            fullWidth
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
        </Box>
      </form>
    </div>

  )
}

export default Search