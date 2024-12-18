const movies = [
    { title: "Salt", year:2010, genre: "drama"},
    { title: "Gladiator", year: 2000, genre: "action" },
    { title: "Cast Away", year: 2000, genre: "drama" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, genre: "adventure" },
    { title: "Shrek", year: 2001, genre: "animation" },
    { title: "Spider-Man", year: 2002, genre: "action" },
    { title: "The Lord of the Rings: The Two Towers", year: 2002, genre: "adventure" },
    { title: "Finding Nemo", year: 2003, genre: "animation" },
    { title: "Pirates of the Caribbean: The Curse of the Black Pearl", year: 2003, genre: "adventure" },
    { title: "The Lord of the Rings: The Return of the King", year: 2003, genre: "adventure" },
    { title: "Shrek 2", year: 2004, genre: "animation" },
    { title: "The Incredibles", year: 2004, genre: "animation" },
    { title: "Batman Begins", year: 2005, genre: "action" },
    { title: "King Kong", year: 2005, genre: "adventure" },
    { title: "The Dark Knight", year: 2008, genre: "action" },
    { title: "Iron Man", year: 2008, genre: "action" },
    { title: "Avatar", year: 2009, genre: "sci-fi" },
    { title: "Up", year: 2009, genre: "animation" },
    { title: "Inception", year: 2010, genre: "sci-fi" },
    { title: "Toy Story 3", year: 2010, genre: "animation" },
    { title: "The Avengers", year: 2012, genre: "action" },
    { title: "Frozen", year: 2013, genre: "animation" },
    { title: "The Hunger Games", year: 2012, genre: "action" },
    { title: "Guardians of the Galaxy", year: 2014, genre: "action" },
    { title: "Mad Max: Fury Road", year: 2015, genre: "action" },
    { title: "Star Wars: The Force Awakens", year: 2015, genre: "sci-fi" },
    { title: "La La Land", year: 2016, genre: "drama" },
    { title: "Deadpool", year: 2016, genre: "action" },
    { title: "Wonder Woman", year: 2017, genre: "action" },
    { title: "Get Out", year: 2017, genre: "horror" },
    { title: "It", year: 2017, genre: "horror" },
    { title: "Split", year: 2017, genre: "thriller" },
    { title: "Annabelle: Creation", year: 2017, genre: "horror" },
    { title: "The Shape of Water", year: 2017, genre: "drama" },
    { title: "Black Panther", year: 2018, genre: "action" },
    { title: "Avengers: Endgame", year: 2019, genre: "action" },
    { title: "Parasite", year: 2019, genre: "drama" },
    { title: "It Chapter Two", year: 2019, genre: "horror" },
    { title: "Midsommar", year: 2019, genre: "horror" },
    { title: "Us", year: 2019, genre: "horror" },
    { title: "Tenet", year: 2020, genre: "sci-fi" },
    { title: "The Invisible Man", year: 2020, genre: "horror" },
    { title: "Dune", year: 2021, genre: "sci-fi" },
    { title: "Spider-Man: No Way Home", year: 2021, genre: "action" },
    { title: "The Batman", year: 2022, genre: "action" },
    { title: "Top Gun: Maverick", year: 2022, genre: "action" },
    { title: "Avatar: The Way of Water", year: 2022, genre: "sci-fi" },
    { title: "The Marvels", year: 2024, genre: "action" },
    { title: "A Quiet Place", year: 2018, genre: "horror" },
    { title: "Zombieland: Double Tap", year: 2019, genre: "comedy" },
    { title: "The Matrix Reloaded", year: 2003, genre: "sci-fi" },
    { title: "Transformers", year: 2007, genre: "action" },
    { title: "Twilight", year: 2008, genre: "romance" },
    { title: "The Hunger Games: Catching Fire", year: 2013, genre: "action" },
    { title: "The Maze Runner", year: 2014, genre: "action" },
    { title: "Guardians of the Galaxy Vol. 2", year: 2017, genre: "action" },
    { title: "Avengers: Infinity War", year: 2018, genre: "action" },
    { title: "Joker", year: 2019, genre: "drama" },
    { title: "Knives Out", year: 2019, genre: "mystery" },
    { title: "Spider-Man: Far From Home", year: 2019, genre: "action" },
    { title: "Shang-Chi and the Legend of the Ten Rings", year: 2021, genre: "action" },
    { title: "The Flash", year: 2023, genre: "action" },
    { title: "Guardians of the Galaxy Vol. 3", year: 2023, genre: "action" },
    { title: "Barbie", year: 2023, genre: "comedy" },
    { title: "The Super Mario Bros. Movie", year: 2023, genre: "animation" },
    { title: "Mission: Impossible – Fallout", year: 2018, genre: "action" },
    { title: "Doctor Strange in the Multiverse of Madness", year: 2022, genre: "sci-fi" },
    { title: "Ant-Man and the Wasp: Quantumania", year: 2023, genre: "action" },
    { title: "The Lion King", year: 2019, genre: "animation" },
    { title: "It", year: 2017, genre: "horror" },
    { title: "The Conjuring", year: 2013, genre: "horror" },
    { title: "A Quiet Place Part II", year: 2020, genre: "horror" },
    { title: "The Revenant", year: 2015, genre: "drama" },
    { title: "Interstellar", year: 2014, genre: "sci-fi" },
    { title: "The Shape of Water", year: 2017, genre: "drama" },
    { title: "Coco", year: 2017, genre: "animation" },
    { title: "Frozen II", year: 2019, genre: "animation" },
    { title: "Rocketman", year: 2019, genre: "biography" },
    { title: "Jumanji: Welcome to the Jungle", year: 2017, genre: "adventure" },
    { title: "The Secret Life of Pets", year: 2016, genre: "animation" },
    { title: "Zootopia", year: 2016, genre: "animation" },
    { title: "Moana", year: 2016, genre: "animation" },
    { title: "The Martian", year: 2015, genre: "sci-fi" },
    { title: "Gravity", year: 2013, genre: "sci-fi" },
    { title: "Skyfall", year: 2012, genre: "action" },
    { title: "Casino Royale", year: 2006, genre: "action" },
    { title: "The Dark Knight Rises", year: 2012, genre: "action" },
    { title: "The Twilight Saga: Eclipse", year: 2010, genre: "romance" },
    { title: "Iron Man 3", year: 2013, genre: "action" },
    { title: "The Hobbit: An Unexpected Journey", year: 2012, genre: "adventure" },
    { title: "Mission: Impossible – Rogue Nation", year: 2015, genre: "action" },
    { title: "Mamma Mia!", year: 2008, genre: "musical" },
    { title: "Despicable Me 2", year: 2013, genre: "animation" },
    { title: "The Lego Movie", year: 2014, genre: "animation" },
    { title: "The Croods", year: 2013, genre: "animation" },
    { title: "The Lego Movie 2", year: 2019, genre: "animation" },
    { title: "Kung Fu Panda 2", year: 2011, genre: "animation" },
    { title: "Kung Fu Panda 3", year: 2016, genre: "animation" },
    { title: "Big Hero 6", year: 2014, genre: "animation" },
    { title: "Spider-Man: Into the Spider-Verse", year: 2018, genre: "animation" },
    { title: "The Lion King", year: 2019, genre: "animation" },
    { title: "The Conjuring 2", year: 2016, genre: "horror" },
    { title: "Hereditary", year: 2018, genre: "horror" },
    { title: "The Witch", year: 2015, genre: "horror" },
    { title: "Insidious", year: 2010, genre: "horror" },
    { title: "Paranormal Activity", year: 2007, genre: "horror" },
    { title: "The Babadook", year: 2014, genre: "horror" },
    { title: "A Quiet Place", year: 2018, genre: "horror" },
    { title: "Scary Stories to Tell in the Dark", year: 2019, genre: "horror" },
    { title: "It Follows", year: 2014, genre: "horror" }
  ];
  
  
  
  function selectRandomMovie() {
    const genre = document.getElementById('genre').value;
    const year = document.getElementById('year').value;
  
    let filteredMovies = movies.filter(movie => genre === "all" || movie.genre === genre);
  
    if (year !== "all") {
      const [startYear, endYear] = year.split('-').map(Number);
      filteredMovies = filteredMovies.filter(movie => movie.year >= startYear && movie.year <= endYear);
    }
  
    if (filteredMovies.length === 0) {
      document.getElementById('movie-output').innerText = "No movies found for the selected criteria.";
      return;
    }
  
    const randomIndex = Math.floor(Math.random() * filteredMovies.length);
    const randomMovie = filteredMovies[randomIndex];
    document.getElementById('movie-output').innerText = `${randomMovie.title} (${randomMovie.year}) - ${randomMovie.genre.charAt(0).toUpperCase() + randomMovie.genre.slice(1)}`;
  }
  