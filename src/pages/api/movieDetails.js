// pages/api/movieDetails.js

export default async function handler(req, res) {
  const { movieId } = req.query;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=da3e751cf5ad5c250a200c7ed8300d64`
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching movie details' });
  }
}
