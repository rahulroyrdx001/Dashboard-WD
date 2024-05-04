import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  Button,
  Grid,
  Box,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

function DemoCard() {
  const primary = {
    main: "#54EFC3",
    light: "#42a5f5",
    dark: "#1565c0",
    contrastText: "#fff",
  };
  return (
    <>
      <Grid container spacing={3} style={{ margin: "30px" }}>
        <Grid item xs={12} sm={4} ms={4}>
          <item>
            <Card
              style={{
                height: "600px",
                background: "white",
                borderRadius: "20px",
                marginLeft: "30px",
              }}
              sx={{ boxShadow: 3, maxWidth: 345 }}
            >
              <CardContent>
                <Typography variant="h6" component="h6">
                  About Company:
                </Typography>
                <Typography variant="subtittle1">About us</Typography>
                <Typography
                  // style={{ overflow: "auto" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  consectetur adipisicing elit. Ducimus ea, accusamus nostrum
                  perspiciatis cupiditate ad voluptatibus tempora similique
                  exercitationem quia quas accusantium, iusto animi eaque
                  voluptate illum suscipit praesentium quos cum, ab quod saepe
                  veritatis? Fuga temporibus error architecto dolor, assumenda
                  nam? Dolores saepe esse dignissimos, in veniam illum natus,
                  ullam rerum delectus iste veritatis eveniet iusto? Perferendis
                  mollitia illum repudiandae quas consectetur reiciendis
                </Typography>
                <Typography variant="subtittle2">
                  Minimum experience:{" 8"}
                </Typography>
                <div
                  // justifyContent="flex-end"
                  // alignItems="flex-end"
                  style={{
                    height: "50px",
                    background: "red",
                    position: "sticky",
                    alignItems: "bottom",
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      width: "100%",
                      background: primary.main,
                      borderRadius: "10px",
                      translate: "0 100%",
                      position: "relative",
                      top: "30%",
                    }}
                    startIcon={<ElectricBoltIcon />}
                  >
                    Easy Apply
                  </Button>
                </div>
              </CardContent>
            </Card>
          </item>
        </Grid>
        <Grid xs={12} sm={4} ms={4}>
          <item>
            <Card
              style={{
                height: "600px",
                background: "white",
                borderRadius: "20px",
                display: "flex",
                flexdirection: "column",
                justifyContent: "space-evenly",
                marginLeft: "30px",
              }}
              sx={{ boxShadow: 3, maxWidth: 345 }}
            >
              <CardContent>
                <Typography variant="h6" component="h6">
                  About Company:
                </Typography>
                <Typography variant="subtittle1">About us</Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  dignissimos, qui corporis, officiis praesentium inventore
                  consequuntur, sed dolorum eos nisi placeat labore tenetur id
                  modi similique? Obcaecati temporibus voluptatibus beatae.
                </Typography>
                <Typography variant="subtittle2">
                  Minimum experience:{" 8"}
                </Typography>
                <div style={{ height: "30px" }}>
                  <Button
                    variant="contained"
                    style={{
                      width: "100%",
                      background: primary.main,
                      borderRadius: "10px",
                      translate: "0 100%",
                    }}
                    startIcon={<ElectricBoltIcon />}
                  >
                    Easy Apply
                  </Button>
                </div>
              </CardContent>
            </Card>
          </item>
        </Grid>
        <Grid xs={12} sm={4} ms={4}>
          <item>
            <Card
              style={{
                height: "600px",
                background: "white",
                borderRadius: "20px",
                marginLeft: "30px",
              }}
              sx={{ boxShadow: 3, maxWidth: 345 }}
            >
              <CardContent>
                <Typography variant="h6" component="h6">
                  About Company:
                </Typography>
                <Typography variant="subtittle1">About us</Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  dignissimos, qui corporis, officiis praesentium inventore
                  consequuntur, sed dolorum eos nisi placeat labore tenetur id
                  modi similique? Obcaecati temporibus voluptatibus beatae.
                </Typography>
                <Typography variant="subtittle2">
                  Minimum experience:{" 8"}
                </Typography>
                <div style={{ height: "30px" }}>
                  <Button
                    variant="contained"
                    position
                    style={{
                      width: "100%",
                      background: primary.main,
                      borderRadius: "10px",
                    }}
                    startIcon={<ElectricBoltIcon />}
                  >
                    Easy Apply
                  </Button>
                </div>
              </CardContent>
            </Card>
          </item>
        </Grid>
        <Grid xs={12} sm={4} ms={4}>
          <item>
            <Card
              style={{
                height: "600px",
                background: "white",
                borderRadius: "20px",
                marginLeft: "30px",
              }}
              sx={{ boxShadow: 3, maxWidth: 345 }}
            >
              <CardContent>
                <Typography variant="h6" component="h6">
                  About Company:
                </Typography>
                <Typography variant="subtittle1">About us</Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  dignissimos, qui corporis, officiis praesentium inventore
                  consequuntur, sed dolorum eos nisi placeat labore tenetur id
                  modi similique? Obcaecati temporibus voluptatibus beatae.
                </Typography>
                <Typography variant="subtittle2">
                  Minimum experience:{" 8"}
                </Typography>
                <div style={{ height: "30px" }}>
                  <Button
                    variant="contained"
                    style={{
                      width: "100%",
                      background: primary.main,
                      borderRadius: "10px",
                    }}
                    startIcon={<ElectricBoltIcon />}
                  >
                    Easy Apply
                  </Button>
                </div>
              </CardContent>
            </Card>
          </item>
        </Grid>
        <Grid xs={12} sm={4} ms={4}>
          <item>
            <Card
              style={{
                height: "600px",
                background: "white",
                borderRadius: "20px",
                marginLeft: "30px",
              }}
              sx={{ boxShadow: 3, maxWidth: 345 }}
            >
              <CardContent>
                <Typography variant="h6" component="h6">
                  About Company:
                </Typography>
                <Typography variant="subtittle1">About us</Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  dignissimos, qui corporis, officiis praesentium inventore
                  consequuntur, sed dolorum eos nisi placeat labore tenetur id
                  modi similique? Obcaecati temporibus voluptatibus beatae.
                </Typography>
                <Typography variant="subtittle2">
                  Minimum experience:{" 8"}
                </Typography>
                <div style={{ height: "30px" }}>
                  <Button
                    variant="contained"
                    style={{
                      width: "100%",
                      background: primary.main,
                      borderRadius: "10px",
                    }}
                    startIcon={<ElectricBoltIcon />}
                  >
                    Easy Apply
                  </Button>
                </div>
              </CardContent>
            </Card>
          </item>
        </Grid>
        <Grid xs={12} sm={4} ms={4}>
          <item>
            <Card
              style={{
                height: "600px",
                background: "white",
                borderRadius: "20px",
                marginLeft: "30px",
              }}
              sx={{ boxShadow: 3, maxWidth: 345 }}
            >
              <CardContent>
                <Typography variant="h6" component="h6">
                  About Company:
                </Typography>
                <Typography variant="subtittle1">About us</Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  dignissimos, qui corporis, officiis praesentium inventore
                  consequuntur, sed dolorum eos nisi placeat labore tenetur id
                  modi similique? Obcaecati temporibus voluptatibus beatae.
                </Typography>
                <Typography variant="subtittle2">
                  Minimum experience:{" 8"}
                </Typography>
                <div style={{ height: "30px" }}>
                  <Button
                    variant="contained"
                    style={{
                      width: "100%",
                      background: primary.main,
                      borderRadius: "10px",
                    }}
                    startIcon={<ElectricBoltIcon />}
                  >
                    Easy Apply
                  </Button>
                </div>
              </CardContent>
            </Card>
          </item>
        </Grid>
      </Grid>
    </>
  );
}
export default DemoCard;
