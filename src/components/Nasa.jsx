import { useEffect } from "react";

function Nasa() {

  useEffect(() => {
    // Running getNasa
getNasa();

// Empty array to only run when called
  }, []);

const getNasa = async () => {
const api = await fetch(`https://images-api.nasa.gov?apiKey=${process.env.REACT_APP_NASA_API_KEY}&number=5`)
const data = await api.json();
console.log(data);

}

  return (

    <div>Nasa</div>
  )
}

export default Nasa;