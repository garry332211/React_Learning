const Fetching = (props) => {
  fetch("https://swapi.dev/api/films/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const transMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releasedDate: movieData.relase_date,
        };
      });
      props.sendToOut(transMovies);
    });

  return <div></div>;
};

export default Fetching;
