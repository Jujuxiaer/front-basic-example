class Student {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  introduce() {
    console.log(`我是${this.name}, 考了${this.score}分。`);
  }
}

const student = new Student("Jujuxiaer, 92");
console.log('student', student);
student.introduce();