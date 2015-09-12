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

---

##Filters
- {{data | filter:options}}
- Timestamp example: {{1388123412323 | date:'MM/dd/yyyy @ h:mma'}} results in 12/27/2013 @ 12:50am
- date, uppercase, lowercase, currency
- limitTo: limit number of charactes in a string, or number of items in an array
	- ex: {{ng-repeat='product in store.products | limitTo:3'}}
- orderBy: sort items
	- ex: {{ng-repeat='product in store.products | orderBy:"-price"'}} sorts descending order. Without the '-', it would sort in ascending order.

