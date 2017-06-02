
for (var  i = 5; i <= 120; i += 10){
	console.log(i);
}

for (var i = 4096; i >= 1; i = i/2) {
	console.log(i);
}

var americanPresidents = ['georgeWashington' , 'johnAdams' , 'thomasJefferson'];
for ( var i = 0; i < americanPresidents.length; i++){
	console.log(`${americanPresidents[i]} are American Presidents`);
}

//You can use another kind of for loop to iterate over objects. 
//Iterate over the object below and use console.log() 
//to output the names of the keys in the object.


var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (variable in antSpecies) {
	console.log(variable);
}






