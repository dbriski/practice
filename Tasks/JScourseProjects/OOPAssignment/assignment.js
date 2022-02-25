class Course {
  // filed must be declared before using private properties!
  #price;

  set price(val) {
    if (val < 0 ) {
      throw 'Invalid Value!'
    }
    this.#price = val;
  }

  get price() {
    return "$" + this.#price;
  }

  constructor(courseTitle, courseLength, coursePrice) {
    this.title = courseTitle;
    this.length = courseLength;
    this.#price = coursePrice;
  }

  calculate() {
    const value = this.length / this.#price;
    return value;
  }

  courseSummary() {
    return `Course name: ${this.title}, Duration: ${this.length} hours, Price: ${this.price}`;
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, num) {
    super(title, length, price);
    this.numOfExercises = num;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }

  publish() {
    console.log('Buy the new Cookbook, link below!')
  }
}

const cookingCourse = new TheoreticalCourse('Easy meals', '20', 40);
const dancingCourse = new PracticalCourse('Low flow', '10', 30, 30);
console.log(cookingCourse);
console.log(dancingCourse);
console.log(cookingCourse.calculate());
cookingCourse.publish();
console.log(cookingCourse.courseSummary());
console.log(dancingCourse.calculate());
console.log(dancingCourse.courseSummary());
