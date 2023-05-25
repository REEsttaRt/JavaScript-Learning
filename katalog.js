class Media{
    constructor(title){
      this._title = title
      this._rating = [10]
      this._isCheckedOut = false
    }
  
    get title(){
      return this._title
    }
  
    get rating(){
      return this._rating
    }
  
    get isCheckedOut(){
      return this._isCheckedOut
    }
  
    set isCheckedOut(CheksOut){
      this._isCheckedOut = isCheckedOut
    }
  
    toggleCheckOutStatus(isCheckedOut){
    this._isCheckedOut = !this._isCheckedOut
    }
  
    getAvarageRating(){
      let sum = this.ratings.reduce((currentSum,rating) => currentSum + rating, 0)
      const lengthOfRatings = this.ratings.lenght
  
   return sum / lengthOfRatings
    }
  
    addRating(rating){
      this.ratings.push(rating)
    }
  }
  
  class Book extends Media{
  constructor(title, author, pages){
  super(title)
  this._author = author
  this._pages = pages
  }
  
  
  
  get author(){
    return this._author
  }
  
  get pages(){
    return this._pages
  }
  }
  
  
  class Movie extends Media{
    constructor(title,director,runTime){
    super(title)
    this._director = director
    this._runTime = runTime
  }
  
    get director(){
      return this._director
    }
  
    get runTime(){
      return this._runTime
    }
  
  
  }
  
  const historyOfEverything = new Book("A Short History of Nearly Everything","Bill Bryson", 554)
  historyOfEverything.toggleChechOutStatus()
  console.log(historyOfEverything.isCheckedOut)
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  historyOfEverything.getAvarageRating()
  console.log(historyOfEverything.getAvarageRating())
  
  const speed = new Movie("Speed", "Jan de Bont", 116)
  speed.toggleCheckOutStatus()
  console.log(speed.toggleCHeckOutStatus())
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  speed.getAvarageRating()
  console.log(speed.getAvarageRating())
  