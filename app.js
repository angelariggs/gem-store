(function(){
  // 'store' = application name; [] are where dependencies will go.
  var app = angular.module('gemStore',['store-products']);

  //name of controller is Cap Case and always uses name Controller
  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('GalleryController', function(){
    this.current = 0;
    
    this.setCurrent = function(currImg){
      if (currImg) {
        this.current = currImg;
      } else {
        this.current = 0;
      }
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};
    
    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [
    {
      name:'Azurite',
      price: 2,
      description: 'Aborably wrinkled pit pup faces',
      canPurchase: true,
      soldOut: false,
      images: [],
      reviews: [
        {
          stars: 5,
          body: "I love the Azurite stone!",
          author: "jack@jill.com"
        },
        {
          stars: 4,
          body: "Azurite rocks!",
          author: "tom@thumb.com"
        },
        {
          stars: 1,
          body: "Azurite sucks!",
          author: "peter@pumpkineater.com"
        }
      ]
    },
    {
      name:'Emerald',
      price: 6.88,
      description: 'Green as the glacier waters of Canada',
      canPurchase: true,
      soldOut: false,
      images: [],
      reviews: [
        {
          stars: 5,
          body: "Emerald is great!",
          author: "river@song.com"
        },
        {
          stars: 3,
          body: "Emerald is just okay.",
          author: "rose@blondie.com"
        },
        {
          stars: 1,
          body: "Emerald sucks!",
          author: "martha@badass.com"
        }
      ]
    },
    {
      name:'Sunstone',
      price: 8.99,
      description: 'The color of love in Oregon',
      canPurchase: true,
      soldOut: false,
      images: [],
      reviews: [
        {
          stars: 5,
          body: "Sunstone is great!",
          author: "robert@heinlein.com"
        },
        {
          stars: 3,
          body: "Sunstone is just okay.",
          author: "robert@parker.com"
        },
        {
          stars: 1,
          body: "Sunstone sucks!",
          author: "spider@robinson.com"
        }
      ]
    }
  ];
})();





