import "../SCSS/Components/App.scss"

import ImageCard from "./ImageCard";

function App() {
  return (
    <div className="app">
        <div className="left">
            <ImageCard src="image_two.jpg" text="James Webb"></ImageCard>
            <ImageCard src="image_one.jpg" text="Grass"></ImageCard>
            <ImageCard src="image_two.jpg" text="James Webb"></ImageCard>
        </div>
        <div className="right">
            <h1>James Webb</h1>
        </div>
    </div>
  );
}

export default App;