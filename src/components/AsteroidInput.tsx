import { useState } from "react";
import '../components/AsteroidInput.css'


interface AsteroidInputProps {
  posts: {
    Name: string;
    Nasa_JPL_URL: string;
    Is_Potentially_Hazardous_Asteroid: boolean;
  }[];
}

 const AsteroidInput: React.FC<AsteroidInputProps>= (props:AsteroidInputProps) => {

  const [inputValue, setInputValue] = useState<string>("");
  const [post, setPost] = useState<any[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
`https://api.nasa.gov/neo/rest/v1/neo/${inputValue}?api_key=Ey86ILpeZJmoKWbBmPjzaqtJsQHAMR7DaTIsGobo`
    );
    const data = await response.json();
    setPost([data]);
    console.log(data);
  };

  const handleRandomAsteroid = async () => {
    const response = await fetch(
      "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=Ey86ILpeZJmoKWbBmPjzaqtJsQHAMR7DaTIsGobo"
    );
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.near_earth_objects.length);
    const randomAsteroidId = data.near_earth_objects[randomIndex].id;
    const asteroidResponse = await fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/${randomAsteroidId}?api_key=Ey86ILpeZJmoKWbBmPjzaqtJsQHAMR7DaTIsGobo`
    );
    const asteroidData = await asteroidResponse.json();
    setPost([asteroidData]);
  };

  return (
    <div>
        <h1>Nasa App</h1>
        
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Asteroid ID"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            data-testid="input"
          />&nbsp;

          <button type="submit"  data-testid="submit" disabled={!inputValue} className="submitBtn">
            Submit
          </button>

        </form>
        <button className="randombtn" data-testid="random" onClick={handleRandomAsteroid}>Random Asteroid</button>
      </div>

      <div>
        {post.length > 0 && (
          <div className="asteroid-details">
            <h2>Asteroid Details:</h2>
            <div>
              <ul>
                <p data-testid="name"><b>Name:{post[0].name}</b></p>
                <p data-testid="url">Nasa JPL URL: <u>{post[0].nasa_jpl_url}</u></p>
                <p data-testid="isHazardous">
                  Is Potentially Hazardous Asteroid:
                  {post[0].is_potentially_hazardous_asteroid ? "Yes" :"No"}
                </p>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AsteroidInput;
