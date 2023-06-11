// Write your code here
// class Movie {
//   constructor(title, director, genre, releaseYear, rating){
//     this.title = title;
//     this.director = director;
//     this.genre = genre;
//     this.releaseYear = releaseYear;
//     this.rting = rating;
//   }

//   getOverView() {
//     console.log(`\n\t\t  ${this.title}, a ${this.genre} film directed by ${this.director} 
//                   was released in ${this.releasedYear}. It received a rating of
//                   ${this.rating}`);
//   }

//   get Overview() {
//    return getOverView;
//   }
// }

function Movie(title, director, genre, releaseYear, rating){
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rting = rating;
  }

  Movie.prototype.getOverView = function() {
    console.log(`\n\t\t  ${this.title}, a ${this.genre} film directed by ${this.director} 
                  was released in ${this.releasedYear}. It received a rating of
                  ${this.rating}`);
  }


const spiderman = new Movie("Spiderman", "Sam Raimi", "A", 2002, 87);
const batman = new Movie("The Dark Night", "Christopher Nolan", "Action", 2008, 83);

console.log(`\n`);
console.log(spiderman);
spiderman.getOverView();
batman.getOverView();
