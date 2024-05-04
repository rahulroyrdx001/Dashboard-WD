import {
  Container,
  Grid,
  Card,
  CardActions,
  CardActionArea,
  Button,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Avatar,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import style from "../components/carcstyle.module.css";
import { useState } from "react";
function MyCard() {
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item lg={2} md={4} sm={4} sx={6}>
            <item>
              <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="demo-customized-select-native">
                  Age
                </InputLabel>
                <NativeSelect
                  id="demo-customized-select-native"
                  value={age}
                  onChange={handleChange}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </item>
          </Grid>
          <Grid item lg={2} md={4} sm={4} sx={6}>
            <item>
              <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="demo-customized-select-native">
                  Age
                </InputLabel>
                <NativeSelect
                  id="demo-customized-select-native"
                  value={age}
                  onChange={handleChange}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </item>
          </Grid>
          <Grid item lg={2} md={4} sm={4} sx={6}>
            <item>
              <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="demo-customized-select-native">
                  Age
                </InputLabel>
                <NativeSelect
                  id="demo-customized-select-native"
                  value={age}
                  onChange={handleChange}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </item>
          </Grid>
          <Grid item lg={2} md={4} sm={4} sx={6}>
            <item>
              <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="demo-customized-select-native">
                  Age
                </InputLabel>
                <NativeSelect
                  id="demo-customized-select-native"
                  value={age}
                  onChange={handleChange}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </item>
          </Grid>
          <Grid item lg={2} md={4} sm={4} sx={6}>
            <item>
              <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="demo-customized-select-native">
                  Age
                </InputLabel>
                <NativeSelect
                  id="demo-customized-select-native"
                  value={age}
                  onChange={handleChange}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </item>
          </Grid>
          <Grid item lg={2} md={4} sm={4} sx={6}>
            <item>
              <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="demo-customized-select-native">
                  Age
                </InputLabel>
                <NativeSelect
                  id="demo-customized-select-native"
                  value={age}
                  onChange={handleChange}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </item>
          </Grid>
          <Grid item lg={2} md={4} sm={4} sx={6}>
            <item>
              <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="demo-customized-select-native">
                  Age
                </InputLabel>
                <NativeSelect
                  id="demo-customized-select-native"
                  value={age}
                  onChange={handleChange}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </item>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} sm={6} sx={12}>
            <item>
              <Card
                className={style.mycard}
                style={{ borderRadius: "20px" }}
                sx={{ boxShadow: 3, height: 600, maxWidth: 360 }}
              >
                <CardContent style={{ display: "flex", gap: "10px" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://logo.clearbit.com/dropbox.com"
                    sx={{ width: 40, height: 40 }}
                  ></Avatar>
                  <div style={{ height: "55px" }}>
                    <h3 style={{ marginTop: "0px", marginBottom: "0px" }}>
                      Company
                    </h3>
                    <h2 style={{ marginTop: "0px", marginBottom: "0px" }}>
                      Job Tittle
                    </h2>
                    <p style={{ marginTop: "0px", marginBottom: "0px" }}>
                      Location
                    </p>
                  </div>
                </CardContent>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    About Company
                  </Typography>
                  <strong>About Us</strong>
                  {/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. In illum quae ipsum, ducimus possimus
                      doloremque nobis cumque minima magnam sit architecto
                      voluptate voluptates, omnis alias quaerat porro maiores
                      esse id nostrum numquam ea! Non aspernatur ipsam qui ea
                      perferendis? Molestiae, optio consectetur sit odit quaerat
                      tenetur magnam voluptas accusantium maxime. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Nostrum sit
                      fuga eius consequatur rem, in impedit dicta maiores,
                      sapiente laboriosam totam blanditiis quam tempore?
                    </Typography> */}
                  <p style={{ height: "315px", overflow: "hidden" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, quidem ipsam natus necessitatibus soluta id, at
                    consequatur provident molestias hic explicabo cupiditate eos
                    voluptatum, placeat temporibus asperiores distinctio
                    voluptatibus! Suscipit nisi molestiae fuga tempora culpa
                    pariatur ipsa eaque. Fuga modi quia eum dignissimos. Officia
                    nesciunt eos enim est. Nam nemo sint inventore iure omnis
                    sit quisquam quod deleniti at vitae. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Doloribus quas accusamus
                    cupiditate sed perferendis fugiat reiciendis corporis nihil
                    deleniti quibusdam iusto obcaecati consectetur voluptatibus
                    dolorum placeat laudantium iure quae est error non quisquam
                    veniam, enim id quod? Ex quod officia voluptate iste atque
                    asperiores odit cum nobis ad aliquam odio inventore,
                    blanditiis explicabo error, amet quo tenetur deserunt
                    consectetur suscipit! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Suscipit nam sint magni eveniet provident
                    veniam omnis nobis animi consequuntur voluptatem!
                  </p>
                </CardContent>
                <div
                  style={{
                    height: "20px",
                    width: "100%",
                    position: "relative",
                    top: "-60px",
                    paddingTop: "20px",
                    background: "white",
                    opacity: "0.5",
                    filter: "blur(1px)",
                  }}
                >
                  <p
                    style={{
                      width: "100%",
                      padding: "0px",
                      margin: "0px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      opacity: "1",
                    }}
                  >
                    view job
                  </p>
                </div>
                <div
                  style={{
                    height: "30px",
                    width: "100%",
                    position: "relative",
                    top: "-50px",
                  }}
                >
                  <p
                    style={{
                      width: "100%",
                      padding: "0px",
                      margin: "0px",
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      paddingLeft: "25px",
                      fontSize: "12px",
                    }}
                  >
                    minimum experience
                  </p>
                  <p
                    style={{
                      width: "100%",
                      padding: "0px",
                      margin: "0px",
                      display: "flex",
                      justifyContent: "left ",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      paddingLeft: "25px",
                      fontSize: "12px",
                    }}
                  >
                    Years
                  </p>
                </div>
                <CardActions>
                  <Box
                    style={{
                      flexgrow: "1",
                      width: "100%",
                      padding: "0 15px",
                      display: "flex",
                      flexDirection: "column",
                      justifycontent: "flex-end",
                      alignitems: "flex-end",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        width: "100%",
                        backgroundColor: "rgb(85, 239, 196)",
                        fontWeight: "500",
                        color: "rgba(0,0,0)",
                        padding: "8px 18px",
                        margin: "0 5px",
                        position: "relative",
                        top: "-55px",
                      }}
                    >
                      ⚡ Easy Apply
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </item>
          </Grid>
          <Grid item lg={4} md={6} sm={6} sx={12}>
            <item>
              <Card
                className={style.mycard}
                style={{ borderRadius: "20px" }}
                sx={{ boxShadow: 3, height: 600, maxWidth: 360 }}
              >
                <CardContent style={{ display: "flex", gap: "10px" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://logo.clearbit.com/dropbox.com"
                    sx={{ width: 40, height: 40 }}
                  ></Avatar>
                  <div style={{ height: "55px" }}>
                    <h3 style={{ marginTop: "0px", marginBottom: "0px" }}>
                      Company
                    </h3>
                    <h2 style={{ marginTop: "0px", marginBottom: "0px" }}>
                      Job Tittle
                    </h2>
                    <p style={{ marginTop: "0px", marginBottom: "0px" }}>
                      Location
                    </p>
                  </div>
                </CardContent>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    About Company
                  </Typography>
                  <strong>About Us</strong>
                  {/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. In illum quae ipsum, ducimus possimus
                      doloremque nobis cumque minima magnam sit architecto
                      voluptate voluptates, omnis alias quaerat porro maiores
                      esse id nostrum numquam ea! Non aspernatur ipsam qui ea
                      perferendis? Molestiae, optio consectetur sit odit quaerat
                      tenetur magnam voluptas accusantium maxime. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Nostrum sit
                      fuga eius consequatur rem, in impedit dicta maiores,
                      sapiente laboriosam totam blanditiis quam tempore?
                    </Typography> */}
                  <p style={{ height: "315px", overflow: "hidden" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, quidem ipsam natus necessitatibus soluta id, at
                    consequatur provident molestias hic explicabo cupiditate eos
                    voluptatum, placeat temporibus asperiores distinctio
                    voluptatibus! Suscipit nisi molestiae fuga tempora culpa
                    pariatur ipsa eaque. Fuga modi quia eum dignissimos. Officia
                    nesciunt eos enim est. Nam nemo sint inventore iure omnis
                    sit quisquam quod deleniti at vitae. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Doloribus quas accusamus
                    cupiditate sed perferendis fugiat reiciendis corporis nihil
                    deleniti quibusdam iusto obcaecati consectetur voluptatibus
                    dolorum placeat laudantium iure quae est error non quisquam
                    veniam, enim id quod? Ex quod officia voluptate iste atque
                    asperiores odit cum nobis ad aliquam odio inventore,
                    blanditiis explicabo error, amet quo tenetur deserunt
                    consectetur suscipit! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Suscipit nam sint magni eveniet provident
                    veniam omnis nobis animi consequuntur voluptatem!
                  </p>
                </CardContent>
                <div
                  style={{
                    height: "20px",
                    width: "100%",
                    position: "relative",
                    top: "-60px",
                    paddingTop: "20px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <p
                    style={{
                      width: "100%",
                      padding: "0px",
                      margin: "0px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    view job
                  </p>
                </div>
                <div
                  style={{
                    height: "30px",
                    width: "100%",
                    position: "relative",
                    top: "-50px",
                  }}
                >
                  <p
                    style={{
                      width: "100%",
                      padding: "0px",
                      margin: "0px",
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      paddingLeft: "25px",
                      fontSize: "12px",
                    }}
                  >
                    minimum experience
                  </p>
                  <p
                    style={{
                      width: "100%",
                      padding: "0px",
                      margin: "0px",
                      display: "flex",
                      justifyContent: "left ",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      paddingLeft: "25px",
                      fontSize: "12px",
                    }}
                  >
                    Years
                  </p>
                </div>
                <CardActions>
                  <Box
                    style={{
                      flexgrow: "1",
                      width: "100%",
                      padding: "0 15px",
                      display: "flex",
                      flexDirection: "column",
                      justifycontent: "flex-end",
                      alignitems: "flex-end",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        width: "100%",
                        backgroundColor: "rgb(85, 239, 196)",
                        fontWeight: "500",
                        color: "rgba(0,0,0)",
                        padding: "8px 18px",
                        margin: "0 5px",
                        position: "relative",
                        top: "-55px",
                      }}
                    >
                      ⚡ Easy Apply
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </item>
          </Grid>
          <Grid item lg={4} md={6} sm={6} sx={12}>
            <item>
              <Card
                className={style.mycard}
                style={{ borderRadius: "20px" }}
                sx={{ boxShadow: 3, height: 600, maxWidth: 360 }}
              >
                <CardContent style={{ display: "flex", gap: "10px" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://logo.clearbit.com/dropbox.com"
                    sx={{ width: 40, height: 40 }}
                  ></Avatar>
                  <div style={{ height: "55px" }}>
                    <h3 style={{ marginTop: "0px", marginBottom: "0px" }}>
                      Company
                    </h3>
                    <h2 style={{ marginTop: "0px", marginBottom: "0px" }}>
                      Job Tittle
                    </h2>
                    <p style={{ marginTop: "0px", marginBottom: "0px" }}>
                      Location
                    </p>
                  </div>
                </CardContent>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    About Company
                  </Typography>
                  <strong>About Us</strong>
                  {/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. In illum quae ipsum, ducimus possimus
                      doloremque nobis cumque minima magnam sit architecto
                      voluptate voluptates, omnis alias quaerat porro maiores
                      esse id nostrum numquam ea! Non aspernatur ipsam qui ea
                      perferendis? Molestiae, optio consectetur sit odit quaerat
                      tenetur magnam voluptas accusantium maxime. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Nostrum sit
                      fuga eius consequatur rem, in impedit dicta maiores,
                      sapiente laboriosam totam blanditiis quam tempore?
                    </Typography> */}
                  <p style={{ height: "315px", overflow: "hidden" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, quidem ipsam natus necessitatibus soluta id, at
                    consequatur provident molestias hic explicabo cupiditate eos
                    voluptatum, placeat temporibus asperiores distinctio
                    voluptatibus! Suscipit nisi molestiae fuga tempora culpa
                    pariatur ipsa eaque. Fuga modi quia eum dignissimos. Officia
                    nesciunt eos enim est. Nam nemo sint inventore iure omnis
                    sit quisquam quod deleniti at vitae. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Doloribus quas accusamus
                    cupiditate sed perferendis fugiat reiciendis corporis nihil
                    deleniti quibusdam iusto obcaecati consectetur voluptatibus
                    dolorum placeat laudantium iure quae est error non quisquam
                    veniam, enim id quod? Ex quod officia voluptate iste atque
                    asperiores odit cum nobis ad aliquam odio inventore,
                    blanditiis explicabo error, amet quo tenetur deserunt
                    consectetur suscipit! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Suscipit nam sint magni eveniet provident
                    veniam omnis nobis animi consequuntur voluptatem!
                  </p>
                </CardContent>
                <div
                  style={{
                    height: "20px",
                    width: "100%",
                    position: "relative",
                    top: "-60px",
                    paddingTop: "20px",
                    background: "white",
                    opacity: "0.5",
                    filter: "blur(1px)",
                  }}
                >
                  <p
                    style={{
                      width: "100%",
                      padding: "0px",
                      margin: "0px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      opacity: "1",
                    }}
                  >
                    view job
                  </p>
                </div>
                <div
                  style={{
                    height: "30px",
                    width: "100%",
                    position: "relative",
                    top: "-50px",
                  }}
                >
                  <p
                    style={{
                      width: "100%",
                      padding: "0px",
                      margin: "0px",
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      paddingLeft: "25px",
                      fontSize: "12px",
                    }}
                  >
                    minimum experience
                  </p>
                  <p
                    style={{
                      width: "100%",
                      padding: "0px",
                      margin: "0px",
                      display: "flex",
                      justifyContent: "left ",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      paddingLeft: "25px",
                      fontSize: "12px",
                    }}
                  >
                    Years
                  </p>
                </div>
                <CardActions>
                  <Box
                    style={{
                      flexgrow: "1",
                      width: "100%",
                      padding: "0 15px",
                      display: "flex",
                      flexDirection: "column",
                      justifycontent: "flex-end",
                      alignitems: "flex-end",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        width: "100%",
                        backgroundColor: "rgb(85, 239, 196)",
                        fontWeight: "500",
                        color: "rgba(0,0,0)",
                        padding: "8px 18px",
                        margin: "0 5px",
                        position: "relative",
                        top: "-55px",
                      }}
                    >
                      ⚡ Easy Apply
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </item>
          </Grid>
          <Grid item lg={4} md={6} sm={6} sx={12}>
            <item>
              <Card
                className={style.mycard}
                style={{ borderRadius: "20px" }}
                sx={{ boxShadow: 3, height: 600, maxWidth: 360 }}
              >
                <CardContent style={{ display: "flex", gap: "10px" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://logo.clearbit.com/dropbox.com"
                    sx={{ width: 40, height: 40 }}
                  ></Avatar>
                  <div style={{ height: "55px" }}>
                    <h3 style={{ marginTop: "0px", marginBottom: "0px" }}>
                      Company
                    </h3>
                    <h2 style={{ marginTop: "0px", marginBottom: "0px" }}>
                      Job Tittle
                    </h2>
                    <p style={{ marginTop: "0px", marginBottom: "0px" }}>
                      Location
                    </p>
                  </div>
                </CardContent>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    About Company
                  </Typography>
                  <strong>About Us</strong>
                  {/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. In illum quae ipsum, ducimus possimus
                      doloremque nobis cumque minima magnam sit architecto
                      voluptate voluptates, omnis alias quaerat porro maiores
                      esse id nostrum numquam ea! Non aspernatur ipsam qui ea
                      perferendis? Molestiae, optio consectetur sit odit quaerat
                      tenetur magnam voluptas accusantium maxime. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Nostrum sit
                      fuga eius consequatur rem, in impedit dicta maiores,
                      sapiente laboriosam totam blanditiis quam tempore?
                    </Typography> */}
                  <p style={{ height: "315px", overflow: "hidden" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, quidem ipsam natus necessitatibus soluta id, at
                    consequatur provident molestias hic explicabo cupiditate eos
                    voluptatum, placeat temporibus asperiores distinctio
                    voluptatibus! Suscipit nisi molestiae fuga tempora culpa
                    pariatur ipsa eaque. Fuga modi quia eum dignissimos. Officia
                    nesciunt eos enim est. Nam nemo sint inventore iure omnis
                    sit quisquam quod deleniti at vitae. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Doloribus quas accusamus
                    cupiditate sed perferendis fugiat reiciendis corporis nihil
                    deleniti quibusdam iusto obcaecati consectetur voluptatibus
                    dolorum placeat laudantium iure quae est error non quisquam
                    veniam, enim id quod? Ex quod officia voluptate iste atque
                    asperiores odit cum nobis ad aliquam odio inventore,
                    blanditiis explicabo error, amet quo tenetur deserunt
                    consectetur suscipit! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Suscipit nam sint magni eveniet provident
                    veniam omnis nobis animi consequuntur voluptatem!
                  </p>
                </CardContent>
                <div
                  style={{
                    height: "20px",
                    width: "100%",
                    position: "relative",
                    top: "-60px",
                    paddingTop: "20px",
                    background: "white",
                    opacity: "0.5",
                    filter: "blur(1px)",
                  }}
                >
                  <p
                    style={{
                      width: "100%",
                      padding: "0px",
                      margin: "0px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      opacity: "1",
                    }}
                  >
                    view job
                  </p>
                </div>
                <div
                  style={{
                    height: "30px",
                    width: "100%",
                    position: "relative",
                    top: "-50px",
                  }}
                >
                  <p
                    style={{
                      width: "100%",
                      padding: "0px",
                      margin: "0px",
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      paddingLeft: "25px",
                      fontSize: "12px",
                    }}
                  >
                    minimum experience
                  </p>
                  <p
                    style={{
                      width: "100%",
                      padding: "0px",
                      margin: "0px",
                      display: "flex",
                      justifyContent: "left ",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      paddingLeft: "25px",
                      fontSize: "12px",
                    }}
                  >
                    Years
                  </p>
                </div>
                <CardActions>
                  <Box
                    style={{
                      flexgrow: "1",
                      width: "100%",
                      padding: "0 15px",
                      display: "flex",
                      flexDirection: "column",
                      justifycontent: "flex-end",
                      alignitems: "flex-end",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        width: "100%",
                        backgroundColor: "rgb(85, 239, 196)",
                        fontWeight: "500",
                        color: "rgba(0,0,0)",
                        padding: "8px 18px",
                        margin: "0 5px",
                        position: "relative",
                        top: "-55px",
                      }}
                    >
                      ⚡ Easy Apply
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </item>
          </Grid>
          <Grid item lg={4} md={6} sm={6} sx={12}>
            <item>
              <Card
                className={style.mycard}
                style={{ borderRadius: "20px" }}
                sx={{ boxShadow: 3, height: 600, maxWidth: 360 }}
              >
                <CardContent style={{ display: "flex", gap: "10px" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://logo.clearbit.com/dropbox.com"
                    sx={{ width: 40, height: 40 }}
                  ></Avatar>
                  <div style={{ height: "55px" }}>
                    <h3 style={{ marginTop: "0px", marginBottom: "0px" }}>
                      Company
                    </h3>
                    <h2 style={{ marginTop: "0px", marginBottom: "0px" }}>
                      Job Tittle
                    </h2>
                    <p style={{ marginTop: "0px", marginBottom: "0px" }}>
                      Location
                    </p>
                  </div>
                </CardContent>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    About Company
                  </Typography>
                  <strong>About Us</strong>
                  {/* <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. In illum quae ipsum, ducimus possimus
                      doloremque nobis cumque minima magnam sit architecto
                      voluptate voluptates, omnis alias quaerat porro maiores
                      esse id nostrum numquam ea! Non aspernatur ipsam qui ea
                      perferendis? Molestiae, optio consectetur sit odit quaerat
                      tenetur magnam voluptas accusantium maxime. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Nostrum sit
                      fuga eius consequatur rem, in impedit dicta maiores,
                      sapiente laboriosam totam blanditiis quam tempore?
                    </Typography> */}
                  <p style={{ height: "315px", overflow: "hidden" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, quidem ipsam natus necessitatibus soluta id, at
                    consequatur provident molestias hic explicabo cupiditate eos
                    voluptatum, placeat temporibus asperiores distinctio
                    voluptatibus! Suscipit nisi molestiae fuga tempora culpa
                    pariatur ipsa eaque. Fuga modi quia eum dignissimos. Officia
                    nesciunt eos enim est. Nam nemo sint inventore iure omnis
                    sit quisquam quod deleniti at vitae. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Doloribus quas accusamus
                    cupiditate sed perferendis fugiat reiciendis corporis nihil
                    deleniti quibusdam iusto obcaecati consectetur voluptatibus
                    dolorum placeat laudantium iure quae est error non quisquam
                    veniam, enim id quod? Ex quod officia voluptate iste atque
                    asperiores odit cum nobis ad aliquam odio inventore,
                    blanditiis explicabo error, amet quo tenetur deserunt
                    consectetur suscipit! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Suscipit nam sint magni eveniet provident
                    veniam omnis nobis animi consequuntur voluptatem!
                  </p>
                </CardContent>
                <div
                  style={{
                    height: "20px",
                    width: "100%",
                    position: "relative",
                    top: "-60px",
                    paddingTop: "20px",
                    background: "white",
                    opacity: "0.5",
                    filter: "blur(1px)",
                  }}
                >
                  <p
                    style={{
                      width: "100%",
                      padding: "0px",
                      margin: "0px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      opacity: "1",
                    }}
                  >
                    view job
                  </p>
                </div>
                <div
                  style={{
                    height: "30px",
                    width: "100%",
                    position: "relative",
                    top: "-50px",
                  }}
                >
                  <p
                    style={{
                      width: "100%",
                      padding: "0px",
                      margin: "0px",
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      paddingLeft: "25px",
                      fontSize: "12px",
                    }}
                  >
                    minimum experience
                  </p>
                  <p
                    style={{
                      width: "100%",
                      padding: "0px",
                      margin: "0px",
                      display: "flex",
                      justifyContent: "left ",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      paddingLeft: "25px",
                      fontSize: "12px",
                    }}
                  >
                    Years
                  </p>
                </div>
                <CardActions>
                  <Box
                    style={{
                      flexgrow: "1",
                      width: "100%",
                      padding: "0 15px",
                      display: "flex",
                      flexDirection: "column",
                      justifycontent: "flex-end",
                      alignitems: "flex-end",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        width: "100%",
                        backgroundColor: "rgb(85, 239, 196)",
                        fontWeight: "500",
                        color: "rgba(0,0,0)",
                        padding: "8px 18px",
                        margin: "0 5px",
                        position: "relative",
                        top: "-55px",
                      }}
                    >
                      ⚡ Easy Apply
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </item>
          </Grid>
          <Grid item lg={4} md={6} sm={6} sx={12}>
            <item>
              <Card
                className={style.mycard}
                style={{ borderRadius: "20px" }}
                sx={{ boxShadow: 3, height: 600, maxWidth: 360 }}
              >
                <CardContent style={{ display: "flex", gap: "10px" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://logo.clearbit.com/dropbox.com"
                    sx={{ width: 40, height: 40 }}
                  ></Avatar>
                  <div style={{ height: "55px" }}>
                    <h3 style={{ marginTop: "0px", marginBottom: "0px" }}>
                      Company
                    </h3>
                    <h2 style={{ marginTop: "0px", marginBottom: "0px" }}>
                      Job Tittle
                    </h2>
                    <p style={{ marginTop: "0px", marginBottom: "0px" }}>
                      Location
                    </p>
                  </div>
                </CardContent>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    About Company
                  </Typography>
                  <strong>About Us</strong>

                  <p style={{ height: "280px", overflow: "hidden" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, quidem ipsam natus necessitatibus soluta id, at
                    consequatur provident molestias hic explicabo cupiditate eos
                    voluptatum, placeat temporibus asperiores distinctio
                    voluptatibus! Suscipit nisi molestiae fuga tempora culpa
                    pariatur ipsa eaque. Fuga modi quia eum dignissimos. Officia
                    nesciunt eos enim est. Nam nemo sint inventore iure omnis
                    sit quisquam quod deleniti at vitae. Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Doloribus quas accusamus
                    cupiditate sed perferendis fugiat reiciendis corporis nihil
                    deleniti quibusdam iusto obcaecati consectetur voluptatibus
                    dolorum placeat laudantium iure quae est error non quisquam
                    veniam, enim id quod? Ex quod officia voluptate iste atque
                    asperiores odit cum nobis ad aliquam odio inventore,
                    blanditiis explicabo error, amet quo tenetur deserunt
                    consectetur suscipit! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Suscipit nam sint magni eveniet provident
                    veniam omnis nobis animi consequuntur voluptatem!
                  </p>
                </CardContent>
                <div
                  style={{
                    height: "20px",
                    width: "100%",
                    position: "relative",
                    top: "-40px",
                    paddingTop: "20px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <p
                    style={{
                      width: "100%",
                      padding: "0px",
                      margin: "0px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    view job
                  </p>
                </div>
                <div
                  style={{
                    height: "30px",
                    width: "100%",
                    position: "relative",
                    top: "-17px",
                  }}
                >
                  <p
                    style={{
                      width: "100%",
                      padding: "0px",
                      margin: "0px",
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      paddingLeft: "25px",
                      fontSize: "12px",
                    }}
                  >
                    minimum experience
                  </p>
                  <p
                    style={{
                      width: "100%",
                      padding: "0px",
                      margin: "0px",
                      display: "flex",
                      justifyContent: "left ",
                      alignItems: "center",
                      color: "black",
                      fontWeight: "bold",
                      paddingLeft: "25px",
                      fontSize: "12px",
                    }}
                  >
                    Years
                  </p>
                </div>
                <CardActions>
                  <Box
                    style={{
                      flexgrow: "1",
                      width: "100%",
                      padding: "0 15px",
                      display: "flex",
                      flexDirection: "column",
                      justifycontent: "flex-end",
                      alignitems: "flex-end",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        width: "100%",
                        backgroundColor: "rgb(85, 239, 196)",
                        fontWeight: "500",
                        color: "rgba(0,0,0)",
                        padding: "8px 18px",
                        margin: "0 5px",
                        position: "relative",
                        top: "-20px",
                      }}
                    >
                      ⚡ Easy Apply
                    </Button>
                  </Box>
                </CardActions>
              </Card>
            </item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
export default MyCard;
