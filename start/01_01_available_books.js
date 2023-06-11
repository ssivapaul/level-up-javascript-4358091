// Write your code here
/* function Book(title, author, ISBN, numCopies) {   
    this.title = title;
    this.author = author;
    this.isbn = ISBN;
    this.numCopies = numCopies;

  }
  Book.prototype.getAvailability = function() {
    //console.log(this.numCopies);
    if(this.numCopies <= 0) {
      return "Out of stock";
    } else if (this.numCopies  < 10) {
      return "low stock";
    } else {
      return "in stock";  
    }  
  }

  Book.prototype.sell = function(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  Book.prototype.restock = function(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
 */

  class Book {
    constructor(title, author, ISBN, numCopies) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
      this.numCopies = numCopies;
    }
    getAvailability() {
      console.log(this.numCopies);
      if(this.numCoipes == 0) {
        return "Out of stock";
      } else if ( this.numCopies < 10) {
        return "Low stock";
      } else {
        return "In stock";
      }
    }

    sell(numCopiesSold = 1) {
      this.numCopies -= numCopiesSold;
    }

    restock(numCopiesStocked = 1) {
      this.numCopies += numCopiesStocked;
    }
    get availability () {
      return this.getAvailability();
    }
  }
  
  
  const HungerGames = new Book("Hunger Gameas", "Suzane Collins", 123919, 5);
  console.log(HungerGames.getAvailability())

  HungerGames.restock(12);
  console.log(HungerGames.getAvailability())

  HungerGames.sell(17);
  console.log(HungerGames.getAvailability())