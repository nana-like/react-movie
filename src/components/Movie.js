import PropTypes from 'prop-types';

function Movie({ title, cover, summary, genres }) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <img src={cover} alt={title} />
        <p>{summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
