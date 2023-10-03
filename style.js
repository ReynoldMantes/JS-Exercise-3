function averageGrade(...grades) {
  
  const total = grades.reduce((acc, grade) => acc + grade, 0);
  const average = total / grades.length;

  
  if (average < 75) {
    console.log(Average Grade: ${average.toFixed(2)});
    console.log('You Failed');
  } else if (average <= 100) {
    console.log(Average Grade: ${average.toFixed(2)});
    console.log('You Passed');
  } else {
    console.log(Average Grade: ${average.toFixed(2)});
    console.log('Invalid Input');
  }
}


averageGrade(75, 65, 60, 75);        
averageGrade(99, 100, 98, 97);       
averageGrade(1000, 2000, 850, 90);
