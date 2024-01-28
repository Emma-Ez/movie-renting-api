// Movie class
class Movie {
    constructor(title, genre, releaseYear, availableCopies) {
      this.title = title;
      this.genre = genre;
      this.releaseYear = releaseYear;
      this.availableCopies = availableCopies;
      this.rentedBy = null;
    }
    
  rent(customer) {
    if (this.availableCopies > 0) {
      this.availableCopies--;
      this.rentedBy = customer;
      return true;
    } else {
      return false;
    }
  }

  returnMovie() {
    this.availableCopies++;
    this.rentedBy = null;
  }
  getAvailability() {
    return this.availableCopies > 0;
  }
}

// Customer class
class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.rentals = [];
    }
  
    rentMovie(movie) {
      if (movie.rent(this)) {
        this.rentals.push(movie);
        return true;
      } else {
        return false;
      }
    }
  
    returnMovie(movie) {
      movie.returnMovie();
      this.rentals.remove(movie);
    }
    viewRentalHistory() {
        console.log("Rental History for", this.name);
        this.rentals.forEach(movie => console.log(movie.title));
    }
  }

  // MovieStore class
class MovieStore {
    constructor(movies) {
      this.movies = movies;
      this.rentals = [];
    }
  
    browseMovies() {
        return this.movies.filter(movie => movie.getAvailability());
      }
    
      rentMovie(customer, movieTitle) {
        const movie = this.movies.find(movie => movie.title === movieTitle);
        if (movie && movie.rent(customer)) {
          this.rentals.push({ customer, movie });
          return true;
        } else {
          return false;
        }
      }
    
      returnMovie(customer, movieTitle) {
        const rental = this.rentals.find(rental => rental.movie.title === movieTitle && rental.customer === customer);
        if (rental) {
          rental.movie.returnMovie();
          this.rentals.splice(this.rentals.indexOf(rental), 1);
          return true;
        } else {
          return false;
        }
      }
    }