import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var'; 
import '../lib/collection.js';
import bootstrap from 'bootstrap';  
import 'bootstrap/dist/css/bootstrap.min.css';



import './main.html'; 
import './Navbar/Navbar.html';
import './OrderNow/OrderNow.html'; 
import './OrderNow/OrderNow.js'; 
import './AddItem/AddItem.html'; 
import './AddItem/AddItem.js'; 
import './SignIn/SignIn.html';
import './SignIn/SignIn.js'; 
import './AboutUs/AboutUs.html'; 
import './AboutUs/AboutUs.js'; 







Template.nav.events ({
  'click .js-add1'() {
     $("#OModal").modal("show");
  }
  
 }) 


 Template.nav.events ({
  'click .js-signin'() { 
      $("#SModal").modal("show");
  }, 
  
}) 

Template.nav.events({
  'click .js-del'() {
    $("#OModal").modal("hide")
  } 
})