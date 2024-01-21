import './MediaStatistics.css';
import NavBar from "../../components/NavBar";

const MediaStatisticsPage = () => {
  // Replace this with actual API response
  const apiResponse = {
    mostViewedMovies: ['Movie1', 'Movie2', 'Movie3'],
    leastViewedMovies: ['Movie4', 'Movie5', 'Movie6'],
    mostLikedMovies: ['Movie7', 'Movie8', 'Movie9'],
    leastLikedMovies: ['Movie10', 'Movie11', 'Movie12'],
    mostViewedSeries: ['Series1', 'Series2', 'Series3'],
    mostLikedSeries: ['Series4', 'Series5', 'Series6'],
    leastLikedSeries: ['Series7', 'Series8', 'Series9'],
    mostViewedMoviesThisMonth: ['Movie13', 'Movie14', 'Movie15'],
    leastViewedMoviesThisMonth: ['Movie16', 'Movie17', 'Movie18'],
    mostLikedMoviesThisMonth: ['Movie19', 'Movie20', 'Movie21'],
    leastLikedMoviesThisMonth: ['Movie22', 'Movie23', 'Movie24'],
    mostViewedSeriesThisMonth: ['Series10', 'Series11', 'Series12'],
    mostLikedSeriesThisMonth: ['Series13', 'Series14', 'Series15'],
    leastLikedSeriesThisMonth: ['Series16', 'Series17', 'Series18'],
  };

  return (
    <div className="media-statistics-container">
      

      <div className="grid-container">
        <NavBar />
        <h1>Media Statistics</h1>
        
        <div className="left-section">
          <h2>Most Viewed Movies</h2>
          <ul>
            {apiResponse.mostViewedMovies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>

          <h2>Least Viewed Movies</h2>
          <ul>
            {apiResponse.leastViewedMovies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>

          <h2>Most Liked Movies</h2>
          <ul>
            {apiResponse.mostLikedMovies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>

          <h2>Least Liked Movies</h2>
          <ul>
            {apiResponse.leastLikedMovies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>

          <h2>Most Viewed Series</h2>
          <ul>
            {apiResponse.mostViewedSeries.map((series, index) => (
              <li key={index}>{series}</li>
            ))}
          </ul>

          <h2>Most Liked Series</h2>
          <ul>
            {apiResponse.mostLikedSeries.map((series, index) => (
              <li key={index}>{series}</li>
            ))}
          </ul>

          <h2>Least Liked Series</h2>
          <ul>
            {apiResponse.leastLikedSeries.map((series, index) => (
              <li key={index}>{series}</li>
            ))}
          </ul>
        </div>

        <div className="right-section">
          <h2 className="right-section-title">Most Viewed Movies This Month</h2>
          <ul>
            {apiResponse.mostViewedMoviesThisMonth.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>

          <h2>Least Viewed Movies This Month</h2>
          <ul>
            {apiResponse.leastViewedMoviesThisMonth.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>

          <h2>Most Liked Movies This Month</h2>
          <ul>
            {apiResponse.mostLikedMoviesThisMonth.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>

          <h2>Least Liked Movies This Month</h2>
          <ul>
            {apiResponse.leastLikedMoviesThisMonth.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>

          <h2>Most Viewed Series This Month</h2>
          <ul>
            {apiResponse.mostViewedSeriesThisMonth.map((series, index) => (
              <li key={index}>{series}</li>
            ))}
          </ul>

          <h2>Most Liked Series This Month</h2>
          <ul>
            {apiResponse.mostLikedSeriesThisMonth.map((series, index) => (
              <li key={index}>{series}</li>
            ))}
          </ul>

          <h2>Least Liked Series This Month</h2>
          <ul>
            {apiResponse.leastLikedSeriesThisMonth.map((series, index) => (
              <li key={index}>{series}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MediaStatisticsPage;
