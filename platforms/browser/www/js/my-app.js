// Initialize app
//var myApp = new Framework7();
  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    root: '#app',
    name: 'My App',
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');
//var pageContent = document.getElementById('pagecontent');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
    //pageContent.append(app.loginScreen.create());
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
})

// Récupération des id
var msgSentTemplate = document.getElementById('template-msg-sent');

// ajoute le message tapé par l'utilisateur dans la conversation
function addMessage(msg) {
  var pageMessages = document.getElementById('page-messages');
  var msgSentTemp = document.getElementById('template-msg-sent');
  var clone = msgSentTemp.content.cloneNode(true);
  pageMessages.appendChild(clone);
  console.log(pageMessages.lastElementChild.children[0].children[0].children[0]);
  console.log(msg);
  pageMessages.lastElementChild.children[0].children[0].children[0].innerText = msg; //todo
}

// génère un message de réponse dans la conversation
function msgAutoReply() {

}