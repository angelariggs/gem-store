#Angular Notes from Codeschool Course

##Directives:
- Marker on an HTML tag that tells Angular to run/reference JS code
- HTML annotations that trigger JS behaviors
- How we bind JS behavior to HTML

##Expressions:
- Allow you to insert dynamic values into your HTML
- How values get displayed within the page

##Controllers:
- Where we define our app's behavior by defining functions and values

##Modules:
- Where the application components live

##Dependency Injection:
- How we define the services (e.g. $http or $log) that our controller needs
- ex 1: app.controller('SomeController', ['$http', function($http){	
} ]);
- ex 2: app.controller('SomeController', ['$http', '$log', function($http, $log){	
} ]);

## Custom Directives:
### Template-expanding directive is the simplest kind
- They define a custom tag or attribute that is expanded or replaced
- Can include Controller logic, if needed
- Can also express complex UI
- Call events and register event handlers
- Reuse common components
- A dash in HTML translates to CamelCase in JavaScript
	- ex: product-title in HTML becomes productTitle in JS

## Attributes vs Element Directives
- Element directive: <product-title></product-title>
	- Use element directives for UI
- Attribute directive: <h3 product-title></h3>
	- Use attribute directives for adding behaviors to HTML
- Use open and closing tags; self-closing tags aren't best practice

---
#Directives

##ng-app=' '
- attach the Application Module to the page

##ng-controller='Something as otherthing'
- attach a Controller function to the HTML page

##ng-source=''
- attaches images from the App Module
- HTML ex: <img ng-src='{{product.images[0]}}'/>

##ng-show=''
- will only show the item being referred to if it's a 'true' state (e.g. boolean true, !=0, not an empty array)
- ex for array: 
	- images = []
	- ng-show='product.images.length'
	- because an array is defined by length, we have to include '.length' to test whether it's true

##ng-click=''
- takes an expression to evaluate
- changes the value of expressions

##ng-init
- allows you to evaluate an expression in the currents scope

##ng-model
- binds the form elements value to the property

##ng-submit
- allows us to call a func when a form is submitted

---

##Filters
- {{data | filter:options}}
- Timestamp example: {{1388123412323 | date:'MM/dd/yyyy @ h:mma'}} results in 12/27/2013 @ 12:50am
- date, uppercase, lowercase, currency
- limitTo: limit number of charactes in a string, or number of items in an array
	- ex: {{ng-repeat='product in store.products | limitTo:3'}}
- orderBy: sort items
	- ex: {{ng-repeat='product in store.products | orderBy:"-price"'}} sorts descending order. Without the '-', it would sort in ascending order.

	---

	Initialization and config should go inside the controllers.

