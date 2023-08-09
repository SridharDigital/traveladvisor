import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import  Rating  from '@material-ui/lab/Rating'

import useStyles from './styles'

const Map = (props) => {
  const {setCordinates, cordinates, setBounds, places, setChildClicked} = props

  // console.log("lat: " + places[0]?.latitude)
  // console.log("lng: " + places[0]?.longitude)


  const classes = useStyles()
  const isDesktop = useMediaQuery('(min-width:600px)')

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact 
        bootstrapURLKeys={{key: 'AIzaSyAj00nJ-PrSbTlUVsHqc0pdStnfACkEGVw'}}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={(event) => {
          setCordinates({lat: event.center.lat, lng: event.center.lng})
          setBounds({ne: event.marginBounds.ne, sw: event.marginBounds.sw})
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        
        {places?.map((place, i) => (
          <div className={classes.markerContainer} lat={25.06596} lng={55.137863} key={i}>
            {
              !isDesktop ? (
                <LocationOutlinedIcon color='primary' fontSize='large'/>
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography gutterBottom className={classes.typography} variant='subtitle2'>
                    {place.name}
                  </Typography>
                  <img 
                    className={classes.pointer} 
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                    alt={place.name}
                  />
                  <Rating size='small' value={Number(place.rating)} readOnly/>
                </Paper>
              )
            }
          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map