import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import  LocationOnIcon  from '@material-ui/icons/LocationOn'
import  PhoneIcon  from '@material-ui/icons/Phone'
import  Rating  from '@material-ui/lab/Rating'

import useStyles from './styles'

const PlaceDetails = (props) => {
  const {place, selected, refProp} = props

  const classes = useStyles()

  if(selected) refProp?.current?.scrollIntoView()
  return (
    <Card elevation={6}>
      <CardMedia
        style={{height: 350}}
        image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5'>{place.name}</Typography>
        <Box className={classes.ratingBox}>
          <Rating size='small' value={Number(place.rating)} readOnly/>
          <Typography gutterBottom variant='subtitle1'>out of {place.num_reviews}</Typography>
        </Box>
        <Box className={classes.box}>
          <Typography variant='subtitle1'>Price</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
        </Box>
        <Box className={classes.box}>
          <Typography variant='subtitle1'>Ranking</Typography>
          <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box className={classes.box} my={1}>
            <img src={award.images.small} alt={award.display_name}/>
            <Typography variant='subtitle2' color='textSecondary'></Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({name}) => (
          <Chip key={name} size='small' label={name} className={classes.chip}/>
        ))}
        {place?.address && (
          <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.subtitle}>
            <LocationOnIcon/> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.subtitle}>
          <PhoneIcon/> {place.phone}
        </Typography>
        )}
        <CardActions>
          <Button size='small' color='primary' onClick={() => window.open(place.web_url, '_blank')}>
            Trip Advisor
          </Button>
          <Button size='small' color='primary' onClick={() => window.open(place.website, '_blank')}>
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default PlaceDetails