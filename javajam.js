

var today= new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
    greeting= 'Good evening!';
    } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
    greeting = 'Good morning!';
    } else {
    greeting = 'Welcome! ' ;
    document.write('<h3>' + greeting + '</h3>');
    }
    function getCustomerName() {
var customerName = prompt("Please enter your name","Name goes here>"); 
                if(customerName!=null) {
                    document.write("Welcome")
                }
                }

                // // <button 
                // //     type="button"

                //     // onclick="document.getElementById('demo').innerHTML = Date()"
                // >
                // Click here to reserve a private party room.</button>


var birthday = prompt("Please enter your birth date and month here.")
var favoriteIcecream = prompt("Please enter your favorite flavor of ice cream.")
var partyRoom = prompt("Plese enter the number of guests.")
