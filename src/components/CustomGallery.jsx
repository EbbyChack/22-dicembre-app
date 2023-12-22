import { Component } from "react";

class CustomGallery extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const movieUrls = this.props.ids.map((id) => `http://www.omdbapi.com/?apikey=bbe8504&i=${id}`);

    try {
      const fetchPromises = movieUrls.map(async (singleMovieUrl) => {
        try {
          const response = await fetch(singleMovieUrl);
          const movie = await response.json();
          return movie;
        } catch (error) {
          console.error("Error:", error);
        }
      });

      const movies = await Promise.all(fetchPromises);

      this.setState({
        movies: movies,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  render() {
    return (
      <section className="container-fluid bg-black text-light ">
        <div>
          <div className="row">
            <div className="col-12 p-0">
              <h5 className="text-start">{this.props.name}</h5>
            </div>

            {this.state.movies.map((movie, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 px-1">
                <div className="container-fluid p-0">
                  <img src={movie.Poster} alt={movie.Title} style={{ width: "80%", height:"14em", objectFit:"contain" }} className="p-1 " />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default CustomGallery;
