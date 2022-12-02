import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function ServiceCard({ serviceTitle, details, image }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        textAlign: "center",
        boxShadow: "none",
        border: "1px solid lightgray",
        padding: "20px",
      }}
    >
      <CardMedia
        component='img'
        style={{ width: "100px", margin: "0 auto" }}
        image={image}
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {serviceTitle}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
}
