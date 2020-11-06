import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function JobCard({ job }) {
  return (
    <Card style={{marginBottom: 15, padding: 5}}>
      <CardContent>
        <Typography variant="h6">
          {job.title}
        </Typography>
        <hr/>
        <Typography variant="subtitle1">
          Salary: {job.salary}
        </Typography>
        <Typography variant="subtitle1">
          Equity: {job.equity}
        </Typography>
      </CardContent>
      <Button 
        variant="contained" 
        color="secondary"
        style={{fontWeight: "bold"}}
        className="flex-end"
      >
      Apply
      </Button>
    </Card>
  )
}

export default JobCard