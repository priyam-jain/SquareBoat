import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import axios from "axios";
import "./Cards.css";

function Cards(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const [data, setdata] = useState([]);
  const handleOpen = (id) => {
    setOpen(true);
    console.log(data);
    axios
      .get(
        `https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${id}/candidates`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setdata(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const handleClose = () => setOpen(false);
  return (
    <div>
      <Grid item xs={24}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => handleOpen(props.id)}
            >
              Apply
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="scrollable"
      >
        <Box>
          <div className="header">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Applicants for this job
            </Typography>
          </div>
          {data.map((item) => (
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {item.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {item.email}
                </Typography>
                <Typography variant="body2">
                  Skills
                  <br />
                  {item.skills}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Modal>
    </div>
  );
}

export default Cards;
