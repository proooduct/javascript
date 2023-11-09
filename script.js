function studentLevel(name, std) {
  console.log(name, std);

  if (std >= 1 && std <= 5) {
    console.log(`Hi ${name} and you are Junior`);
  } else if (std > 5 && std <= 10) {
    console.log(`Hi ${name} and you are Intermediate`);
  } else if (std > 10 && std <= 12) {
    console.log(`Hi ${name} and you are Senior`);
  } else {
    console.error("Invalid");
  }
}

const student1 = studentLevel("Shubham", 12);
console.log(student1);
