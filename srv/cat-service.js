module.exports = (srv) => {

    const { Movies } = cds.entities('my.bookshop')

    srv.before('CREATE', 'Movies', async (req) => {
        const inputMovie = req.data;
        const movies = await SELECT.from(Movies);

        movies.forEach(movie => {
            if (movie.name == inputMovie.name) {
                req.reject(400, 'Movie already exists!');
            }
        })
    })
}