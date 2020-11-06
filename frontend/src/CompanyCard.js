import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'

function CompanyCard({ company }) {
  const { handle, name, logo_url, description } = company;
  return (
    <Link to={`/companies/${handle}`} className="no-text-deco">
      <Card variant="outlined" style={{marginBottom: 15, padding: 5}}>
        <CardContent>
          <Box component="div" display="flex" flexDirection="row" justifyContent="space-between" marginBottom="20px">
            <Typography variant="h5">
              {name}
            </Typography>
          <CardMedia 
            component="img"
            image={logo_url}
            style={{height: 50, width: 50}}
          />
          </Box>
            <Typography>
              {description}
            </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CompanyCard