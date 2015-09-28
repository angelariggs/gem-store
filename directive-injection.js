  //name of controller is Cap Case and always uses name Controller
    app.controller('StoreController', ['$http', function($http){
      var store = this;
      store.products = [];

      $http.get('/products.json').success(function(data){
        store.products = data;
      });
    }]);