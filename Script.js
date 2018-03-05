// Single line comment
/* multi
line 
comment 
var name = 'Charu and Shradha';
console.log(name);
var lastName = 'Sisters';
console.log(lastName);
var age = 19;
console.log(age);
var fullAge = true;
console.log(fullAge); */

/*

var name = 'John';
var age = 26;
//console.log(name+age);
//console.log(age+age);

var job, married;
//console.log(job);
//console.log(married);
job = 'Teacher';
married = true;
console.log(name + ' ' + age + ' ' + job + ' ' + married);


age = 'thirty six';
job = 'cook';
console.log(name + ' ' + age + ' ' + job + ' ' + married);

var lastName = prompt("lastname?");
console.log(lastName);

alert(name + ' ' + age + ' ' + job + ' ' + married); 
*/

//operators
/*var now = 2018;
var birthYear = now - 26;

birthYear = now - 26 *2;
console.log(birthYear);
var ageJohn = 30;
var ageMark = 30;
ageJohn = ageMark = (3+ 5) * 4 -6;
console.log(ageJohn);
console.log(ageMark);

ageJohn++;
ageJohn = ageJohn +1;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);

*/
//if else
/*
var name = 'Charu';
var age = 18;
var married = 'no';

if(married === 'yes')
{
	console.log(name + ' is married');

} else
{ console.log('not married');}

married = true ;

if(married)
{
	console.log("Yes!");
}
else
{ console.log("no");}

if(23 === '23') //type coercion
{
	console.log("print");
}


if(23 == '23')
{
	console.log("print");
}
*/ 

var age = 35;
if(age < 20 )
	{ console.log(' John is a teen'); }
else if (age > 20 && age < 30)
 {  console.log('john is a young man');}
else
	console.log('john is a man');

var job = 'Teacher';
job = prompt('What does john do?');
switch (job)
{
	case 'Teacher':
	   console.log('John teaches kids');
	   break;
	case 'driver':
	   console.log('he drives');
	   break;
	case 'cop':
	   console.log('he is a police');
	   break;
	default:
	   console.log('he does something else');


}
