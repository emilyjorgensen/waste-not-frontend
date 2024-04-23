import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Recipe() {
  const [details, setDetails] = useState({});
  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className="container">
      <h1>{details.title}</h1>
      <div>
        <img src={details.image} alt={details.title} />
      </div>
      <div></div>
    </div>
  );
}
