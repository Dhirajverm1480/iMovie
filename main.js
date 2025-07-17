const url = 'https://api.themoviedb.org/3/authentication/token/new';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWE2ZTI1MTE3ZjJjNWNjMTE5NTM5OWUzZWExM2VlZCIsIm5iZiI6MTc1MjY1NTk5Mi44MzEsInN1YiI6IjY4Nzc2ODc4YWZjMDgyNTY5NTE2NWNiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u3dBsUWtpB8dMCHuGheSe1ZCRX1E4SQYkjT1gf6aUBA'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log("Movie: ",json))
  .catch(err => console.error(err));