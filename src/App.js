import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MyNav from "./components/MyNav";
import TopSection from "./components/TopSection";
import CustomGallery from "./components/CustomGallery";

function App() {
  return (
    <div className="App">
      <header>
        <MyNav />
        <div className="container-fluid px-4">
          <TopSection />
          <CustomGallery
            name={"Harry Potter"} ids={["tt0241527", "tt0295297", "tt0304141", "tt0330373", "tt0373889", "tt0417741"]}
          />
          <CustomGallery
            name={"MCU"} ids={["tt0371746", "tt0800080", "tt1228705", "tt0800369", "tt0458339", "tt0848228"]}
          />
          <CustomGallery
            name={"Star Wars"} ids={["tt0076759", "tt0080684", "tt0086190", "tt0120915", "tt0121765", "tt0121766"]}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
