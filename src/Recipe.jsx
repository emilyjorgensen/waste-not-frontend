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
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className="container">
      <h1>{details.title}</h1>
      <div>
        <img src={details.image} alt={details.title || "recipe image"} />
      </div>
      <div>
        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
      </div>
      <div>
        <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
      </div>
      <div>
        {details.extendedIngredients?.length > 0 && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
