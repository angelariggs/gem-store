(function(){
  var app = angular.module('store-products', []);

  app.directive("productPanels", function(){
    return {
      restrict: "E",
      templateUrl: "product-panels.html",
      controller: function(){
        // this takes the place of "ng-init='tab=1'" in the HTML
        this.tab = 1;

        // this takes the place of the ng-click in HTML
        this.selectTab = function(setTab){
          this.tab = setTab;
        };

        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        };
      }, // ends function
      controllerAs: "panel"
    }; // ends return
  });// ends app.directive productPanels

  app.directive("productDescription", function(){
    return{
      restrict: "E",
      templateUrl: "product-description.html"
    };
  }); // ends app.directive productDescription
})(); // ends closure