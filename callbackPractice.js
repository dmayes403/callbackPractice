/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });


and what you should write is the sayHi function that makes the code above work,


   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });


*/



  //Code Here for first

var first = function(names, cb){
  cb(names[0]);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last

var last = function(names, cb){
  cb(names[names.length-1]);
}

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



  //Code Here for multiply

var multiply = function(x, y, cb){
  var product = x*y;
  cb(product);
}

multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})

multiply(5, 2, function(answer){
  alert('The answer is ' + answer); //should console.log 12
})



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var contains = function(names, oneName, cb){
  if(names.indexOf(oneName) === -1){
    result = false;
  } else {
    result = true;
  }
  cb(result);
}



  //Code Here for contains

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq

var uniq = function(names, cb){
  var newArr = [];
  for(var i = 0;i < names.length; i++){
    if(newArr.indexOf(names[i]) === -1){
      newArr.push(names[i]);
    }
  }
  cb(newArr);
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
var each = function(names, cb){
  for(var i =0;i<names.length;i++){
    var item = names[i];
    var indice = i;
    cb(item, indice);
  }
}


each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */

var getUserById = function(users, id, cb){
    for(var i = 0;i < users.length; i++){
      if(users[i].id === id){
        cb(users[i]);
      }
    }
}



 //code here for getUserById

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
