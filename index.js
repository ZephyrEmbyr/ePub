<script src="index.js"></script> 


var blacklisted=[];
 var whitelisted=[];
//actual function that submits data to array when "submit" is clicked.
$('#submitx').click(submitx);
$('#show').click(show)  ;
 function submitx() {
  var newblacklisted;
  var newwhitelisted;
    newblacklisted=$("#blacklist").val();// get the text input from the user
    // split the string to get the input the string
    newblacklisted = newblacklisted.split(/[ ,]+/);
    newwhitelisted=$("#whitelist").val();// get the text input from the user
    // split the string to get the input the string
    newwhitelisted = newwhitelisted.split(/[ ,]+/);
    //add to a new array that we make of all blacklisted/whitelisted words
    for(var i = 0; i<newblacklisted.length; i++){
      blacklisted.push(newblacklisted[i]);
    }
    for(var i = 0; i<newwhitelisted.length; i++){
      whitelisted.push(newwhitelisted[i]);
    }
    //remove words that the user wants to take out of the black listed/whitlisted list
    newblacklisted=$("#rmblacklist").val();
    newblacklisted = newblacklisted.split(/[ ,]+/);
    newwhitelisted=$("#rmwhitelist").val();
    newwhitelisted = newwhitelisted.split(/[ ,]+/);

    for(var i = 0; i<newblacklisted.length; i++){
      //x contains the index
      var x = match(blacklisted,newblacklisted[i])
      if(x >-1){
        //takes out the word and places everything in a new array
        blacklisted.splice(x,1);//splice mutates array, does not return anything
      }
    }

    for(var i = 0; i<newwhitelisted.length; i++){
      var x = match(whitelisted,newwhitelisted[i])
      if(x >-1){
        whitelisted.splice(x,1);//splice mutates array, does not return anything
      }
    }
    //COMMENTED OUT BECAUSE IT DOES NOT EXIST; NEED TO ADD BACK LATER searchFile();
}

function show(){
  //toString method will already print out the array
  alert(blacklisted.toString());
  alert(whitelisted.toString());
}

//toString function
// function toString()
//finds the index at which the word occurs in the list
function match(list,string) {
  var l = list;
  var s = string;
  for(var i = 0; i<l.length; i++){
    if(l[i]===s){
      return i;
    }
  }
    return -1;
}

