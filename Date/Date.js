// Ps: Any Date() type variable is an object composed by (year, month, day, hour, minutes, seconds, milliseconds)
	
// A date time on javascript is based on a value of milliseconds, since (00:00:00 - 01/01/1970 UTC)


// Creating a date at the current moment
var moment = new Date()

	// Creating a date hard coded
	
// Ps: Indexes starts from 0 (January = 0, December = 11)
var date = new Date(
	2017, 10, 22, /* YYYY/MM/DD */ 
	7, 04, 55, /* HH:MM:SS */
	999 /* Ms*/
)
	// Creating a date from milliseconds
// Ps: Value 0 MS = 1970-1-1 00:00:00:000
var dateInMs = new Date(1000000000000)

console.log(moment, 'Current moment')
console.log(date, 'Date created hard coded')
console.log(dateInMs, 'Moment created using milliseconds')


	// Changing values from a Date() type, manually (Using SETTERS)
date.setHours(23);
date.setMinutes(59);
date.setSeconds(59);
date.setMilliseconds(999);
date.setFullYear(1970);
date.setMonth(11); //DECEMBER
date.setDate(31);

	// Returning values from a Date() type, manually (Using GETTERS)
console.log(
	date.getHours(), ':',
	date.getMinutes(), ':',
	date.getSeconds(), ':',
	date.getMilliseconds(), ' ',
	date.getFullYear(), '/',
	date.getMonth(), '/', //PS: January = 0 and December = 11
	date.getDate()
);


console.log(moment.getDay(), 'Day of the week (0 = Sunday, 6 = Saturday');

console.log(moment.getTime(), 'Time in milliseconds, used to do calculations');

// Changing timezone locally (Returns as string, for view only)
console.log(moment.toLocaleTimeString(), 'Current time')

	// TIPS: Calculating how many milliseconds have each day
let diaMs = 1000*60*60*24 // ( milliseconds * seconds * minutes * hours)= Milliseconds per day (86400000)
console.log(diaMs, '1 day in milliseconds');
