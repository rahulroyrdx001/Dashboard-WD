import DemoCard from "./assets/components/DemoCard";
import MyCard from "./assets/components/MyCard";

function App() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    limit: 100,
    offset: 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw, // Include the request body
  };

  fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
    .then((response) => response.json()) // Parse response as JSON
    .then((data) => {
      console.log("API Response:", data); // Log the response data
      // Now you can access the data object and do whatever you want with it
    })
    .catch((error) => console.error(error));

  return (
    <>
      <MyCard></MyCard>
    </>
  );
}

export default App;
