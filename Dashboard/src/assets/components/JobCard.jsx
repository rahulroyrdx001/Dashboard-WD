import * as React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  CardMedia,
  CardHeader,
} from "@mui/material";

function JobCard(props) {
  return (
    <>
      <h2>from component</h2>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  lis
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {props.data}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Card></Card>
    </>
  );
}
export default JobCard;
