import { Component } from "react";

class CustomGallery extends Component {
  state = {
    movies: [],
    isLoading: true,
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
        isLoading: false,
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

            {this.state.isLoading ? (
              <div>
                <p className="">Loading...</p>
                <div class="spinner-grow text-start  mx-2" role="status" style={{width:'1em', height:'1em'}}>
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-start mx-2 " role="status" style={{width:'1em', height:'1em', animationDelay:'0.2s'}}>
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-start mx-2 " role="status" style={{width:'1em', height:'1em', animationDelay:'0.4s'}}>
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              this.state.movies.map((movie, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-2 px-1">
                  <div className="container-fluid p-0">
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      style={{ width: "80%", height: "14em", objectFit: "contain", cursor: "pointer" }}
                      className="p-1 hoverImg"
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default CustomGallery;
