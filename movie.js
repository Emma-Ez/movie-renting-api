// Movie class
class Movie {
    constructor(title, genre, releaseYear, availableCopies) {
      this.title = title;
      this.genre = genre;
      this.releaseYear = releaseYear;
      this.availableCopies = availableCopies;
      this.rentedBy = null;
    }
  // ... (rent and returnMovie methods)
  getAvailability() {
    return this.availableCopies > 0;
  }
}

