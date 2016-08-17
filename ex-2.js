
// can be broken because I'm getting a headache!

function myFunction() 
 {
var info = prompt(`Enter your 10 digit number EX: "938-444-2390"` );
if (info.match('/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/)') 
 (alert("WOW you actually trust me? :0 ") 

}



function mybdayfun() {
    
    var mybdayfunn = prompt('Enter your birthday EX: " 01/21/1994 ') 
    if (mybdayfunn.length != 9
        || mybdayfunn.charAt(6) != '/' 
        || mybdayfunn.charAt(5) != '/' )
     alert ('Nice try!') 
    else 
    alert('good job');
    
}
function postalCode() {

 var postalCodeInput = prompt('Enter your postal code Ex: "98278 or 98278-3333" ')
 if (postalCodeInput.length === 5   )
 alert('Good Good') 

 else alert('Nah fam!');

 if (  postalCodeInput.length === 10 ) 
  alert('good good')
 }

var why = prompt("Hello!, why are you here");
 
var why = window.prompt(`You entered : ${why}    
The length of ${why} is : ${why.length}    
The fifth character is : ${why.charAt(5)}    
Lowecase : ${why.toLowerCase()}
Uppercase: ${why.toUpperCase()}
A sentence using ${why}: ${why} ! that must be  a lie!? pls...be
sub word: ${why.substr(1,3)}` ); 



