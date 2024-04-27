import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { uniqBy } from "lodash";

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
      <h1 className="display-3">{details.title}</h1>
      <div>
        <img src={details.image} alt={details.title || "recipe image"} className="pb-3" />
      </div>
      <h3>About the Recipe:</h3>
      <div>
        <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
      </div>
      <h3>Ingredients:</h3>
      <div>
        {details.extendedIngredients?.length > 0 && (
          <ul>
            {uniqBy(details.extendedIngredients, "id").map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </div>
      <h3>Instructions:</h3>
      <div>
        <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
      </div>
    </div>
  );
}
