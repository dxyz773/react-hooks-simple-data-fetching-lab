import { useEffect, useState } from "react";

const url = "https://dog.ceo/api/breeds/image/random";

function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((image) => setImage(image.message));
  }, []);

  if (!image) {
    return <h2>Loading...</h2>;
  }
  return <img src={image} alt="A Random Dog"></img>;
}

export default App;
