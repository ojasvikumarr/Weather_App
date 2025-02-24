import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";


//icons
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import SevereColdIcon from '@mui/icons-material/SevereCold';
export default function InfoBox({ info }) {
  if (!info) {
    return null;
  }
  if (!info.city) {
    return <>No Weather availbale</>;
  }

  const Hot_url =
    "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VtbWVyfGVufDB8fDB8fHww";
  const Cold_Url =
    "https://images.unsplash.com/photo-1704983226473-5729e46967d2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMGtpdHR5fGVufDB8fDB8fHww";
  const Humid_Url =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
  const Spring_Url =
    "https://images.unsplash.com/photo-1554738458-6c6ae81806fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3ByaW5nJTIwc2Vhc29ufGVufDB8fDB8fHww";
  const Frozen_Url =
    "https://images.unsplash.com/photo-1522255735762-120ef02c394d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjBkdXN0eXxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <>
      <div className="InfoBox">
        <div className="cardContainer">
          <Card sx={{ maxWidth: 345, margin: "auto" }}>
            <CardMedia
              sx={{ height: 140 }}
              image={
                info.humidity > 80
                  // ? Humid_Url
                  // : info.temperature == 0
                  ? Frozen_Url
                  : info.temperature > 0 && info.temperature < 15
                  ? Cold_Url
                  : info.temperature >= 15 && info.temperature < 30
                  ? Spring_Url
                  : Hot_url
              }
              title={info.city}
              // title="Delhi"
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="div">
                {info.city} {
                info.humidity > 80
                  ? <ThunderstormIcon/>
                  : info.temperature == 0
                  ? <SevereColdIcon/>
                  : info.temperature > 0 && info.temperature < 15
                  ? <AcUnitTwoToneIcon/>
                  : info.temperature >= 15 && info.temperature < 30
                  ? <LocalFloristIcon/>
                  : <WbSunnyTwoToneIcon/>
              }
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component={"span"}
              >
                <p>Temperature: {info.temperature} &deg;C</p>
                <p>Temp Max: {info.temp_max}&deg;C </p>
                <p>Temp Min: {info.temp_min}&deg;C</p>
                <p>Humidity: {info.humidity}</p>
                <p>
                  The Weather can be described as <i>{info.weather}</i> and
                  feels like {info.feelslike}&deg;C
                </p>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
