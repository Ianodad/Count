// javascript is not good with CSV file so I took the initiative to convert the file to JSON
const students = require('./convertcsv');

function myFunction(students) {
	// takes in the students us a array with object the iterate then filters
	// Which then returns an array with the filter property
	const male = students.filter((student) => student.gender === 'Male');
	// students.map(s => console.log(S))
	console.log(`There are ${male.length} males in the database`);

	const female = students.filter((student) => student.gender === 'Female');
	console.log(`There are ${female.length} females in the database`);
}


// Out put will be  
//There are 505 males in the database
// There are 495 females in the database
myFunction(students);