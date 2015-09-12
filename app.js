(function(){
	// 'store' = application name; [] are where dependencies will go.
	var app = angular.module('gemStore',[]);
	
	//name of controller is Cap Case and always uses name Controller
	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			name:'Azurite',
			price: 2,
			description: 'Aborably wrinkled pit pup faces',
			canPurchase: true,
			soldOut: false
		},
		{
			name:'Emerald',
			price: 6.88,
			description: 'Green as the glacier waters of Canada',
			canPurchase: true,
			soldOut: false
		},
		{
			name:'Azurite',
			price: 8.99,
			description: 'The color of love in Oregon',
			canPurchase: true,
			soldOut: false
		}
	];
})();