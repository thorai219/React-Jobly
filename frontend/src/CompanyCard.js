import React from 'react';
// import { flexbox } from '@material-ui/system';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function CompanyCard({ company }) {
  return (
    <Card variant="outlined" style={{marginBottom: 15, padding: 20}}>
      <CardContent>
        <Box component="div" display="flex" flexDirection="row" justifyContent="space-between">
          <Typography variant="h5">
            {company.handle}
          </Typography>
        <CardMedia 
            component="img"
            image={company.logo_url}
            style={{height: 50, width: 50}}
          />
        </Box>
          <Typography>
            {company.description}
          </Typography>
      </CardContent>
    </Card>
  )
}

export default CompanyCard