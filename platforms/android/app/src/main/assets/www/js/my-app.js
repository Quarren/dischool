// Initialize app
//var myApp = new Framework7();
  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
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
var pageContent = document.getElementById('pagecontent');

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

pageContent.append(app.loginScreen.create({
  content: '<div class="page-content login-screen-content"><div class="login-screen-title">Dischool</div><form><div class="list"><ul><li class="item-content item-input"><div class="item-inner"><div class="item-title item-label">Username</div><div class="item-input-wrap"><input type="text" name="username" placeholder="Your username" /></div></div></li><li class="item-content item-input"><div class="item-inner"><div class="item-title item-label">Password</div><div class="item-input-wrap"><input type="password" name="password" placeholder="Your password" /></div></div></li></ul></div><div class="list"><ul><li><a href="#" class="list-button">Sign In</a></li></ul><div class="block-footer"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p><a href="#" class="link back">Close Login Screen</a></p></div></div></form></div></div>'
}));