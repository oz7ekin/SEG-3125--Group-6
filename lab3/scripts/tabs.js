function selectTab(tabIndex) {
    //Hide Tabs
    document.getElementById('content1').style.display="none";
    document.getElementById('content2').style.display="none";
    document.getElementById('content3').style.display="none";
    
    //Show the Selected Tab
    document.getElementById('content' + tabIndex).style.display="block";  
  }



function openInfo(d, tabName) {

	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(tabName).style.display = "block";
	d.currentTarget.className += " active";

}



function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);

    s2.innerHTML = "";

    var optionArray = restrictListProducts(products, s1.value);
	var optionArray2 = restrictListProducts2(products, s1.value);
	var optionArray3 = restrictListProducts3(products, s1.value);

		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
   
		s2.appendChild(document.createElement("br"));    
		s2.appendChild(document.createElement("br")); 
		
		let img = document.createElement("img");
		img.src = optionArray3[i];

		img.style.height = '80px';
		// img.style.position = 'absolute';
		// img.style.margin = '0'
		img.style.border = "10px solid orange";
		img.style.borderRadius = "10px";

		s2.appendChild(img);

		s2.appendChild(document.createElement("br"));    
		s2.appendChild(document.createElement("br")); 

		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);

		var productPrice = optionArray2[i];
		var pricevar = document.createElement("output");
		pricevar.type = "label";
		pricevar.name = "productPrice";
		pricevar.value = "       $"+productPrice;
		s2.appendChild(pricevar);

		s2.appendChild(document.createElement("br"));    
		s2.appendChild(document.createElement("br"));  

		var labelText = document.createElement('label')
		labelText.htmlFor = '   Add To Cart';
		labelText.appendChild(document.createTextNode('   Add To Cart   '));
		s2.appendChild(labelText);
		// s2.appendChild("Add to Cart");

		s2.appendChild(checkbox);

		s2.appendChild(document.createElement("br"));    
		s2.appendChild(document.createElement("br"));     
	}
}
	

function selectedItems(){
	
	var element = document.getElementsByName("product");
	var price = document.getElementsByName("productPrice");
	var chosenProducts = [];
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < element.length; i++) { 
		if (element[i].checked) {
			para.appendChild(document.createTextNode(element[i].value));
			para.appendChild(document.createTextNode(price[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(element[i].value);
		}
	}
		
	c.appendChild(para);	
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
	
	document.getElementById("confirmMessage").style.display = "block";
	setTimeout(function() {
		document.getElementById("confirmMessage").style.display = "none";
	  }, 2000);

}



var products = [
	{
		name: "bottlewater",
		vegetarian: true,
		FitnessFood: true,
		Seafood:false,
		GlutenFree: true,
		Organic: false,
		price: 1.00,
		img: 'imgs/bottlewater.jpg'
	},
	{
		name: "springwater",
		vegetarian: true,
		FitnessFood: true,
		Seafood:false,
		GlutenFree:true,
		Organic: false,
		price: 1.50,
		img: 'imgs/springwater.jpg'
	},
	{
		name: "potato",
		vegetarian: true,
		FitnessFood: false,
		Seafood: false,
		GlutenFree: true,
		Organic: true,
		price: 1.99,
		img: 'imgs/potato.jpg'
	},
	{
		name: "chocolate",
		vegetarian: true,
		FitnessFood: false,
		Seafood:false,
		GlutenFree:true,
		Organic: false,
		price: 2.00,
		img: 'imgs/chocolate.jpg'
	},
	{
		name: "icecream",
		vegetarian: false,
		FitnessFood: false,
		Seafood:false,
		GlutenFree:true,
		Organic: false,
		price: 3.50,
		img: 'imgs/icecream.jpg'
	},
	{
		name: "bread",
		vegetarian: true,
		FitnessFood: false,
		Seafood: false,
		GlutenFree: false,
		Organic: false,
		price: 4.35,
		img: 'imgs/bread.jpg'
	},
	{
		name: "chickenbreast",
		vegetarian: false,
		FitnessFood: true,
		Seafood:false,
		GlutenFree:true,
		Organic: false,
		price: 5.00,
		img: 'imgs/chickenbreast.jpg'
	},
	{
		name: "beef",
		vegetarian: false,
		FitnessFood: false,
		Seafood:false,
		GlutenFree:true,
		Organic: true,
		price: 11.00,
		img: 'imgs/beef.jpg'
	}
	,
	{
		name: "porkbone",
		vegetarian: false,
		FitnessFood: false,
		Seafood:false,
		GlutenFree:true,
		Organic: false,
		price: 12.00,
		img: 'imgs/porkbone.jpg'
	},
	{
		name: "rice",
		vegetarian: true,
		FitnessFood: false,
		Seafood:false,
		GlutenFree:true,
		Organic: true,
		price: 18.00,
		img: 'imgs/rice.jpg'
	},
	{
		name: "salmon",
		vegetarian: false,
		FitnessFood: false,
		Seafood:true,
		GlutenFree:true,
		Organic: true,
		price: 21.50,
		img: 'imgs/salmon.jpg'
	},
  {
		name: "icewine",
		vegetarian: true,
		FitnessFood: false,
		Seafood:false,
		GlutenFree:true,
		Organic: false,
		price: 30.00,
		img: 'imgs/icewine.jpg'
	}
];
	

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "FitnessFood") && (prods[i].FitnessFood == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Seafood") && (prods[i].Seafood == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].GlutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].Organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

function restrictListProducts2(prods, restriction) {
	let product_price = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_price.push(prods[i].price);
		}
		else if ((restriction == "FitnessFood") && (prods[i].FitnessFood == true)){
			product_price.push(prods[i].price);
		}
		else if ((restriction == "Seafood") && (prods[i].Seafood == true)){
			product_price.push(prods[i].price);
		}
		else if ((restriction == "GlutenFree") && (prods[i].GlutenFree == true)){
			product_price.push(prods[i].price);
		}
		else if ((restriction == "Organic") && (prods[i].Organic == true)){
			product_price.push(prods[i].price);
		}
		else if (restriction == "None"){
			product_price.push(prods[i].price);
		}
}
return product_price;
}

function restrictListProducts3(prods, restriction) {
	let product_img = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_img.push(prods[i].img);
		}
		else if ((restriction == "FitnessFood") && (prods[i].FitnessFood == true)){
			product_img.push(prods[i].img);
		}
		else if ((restriction == "Seafood") && (prods[i].Seafood == true)){
			product_img.push(prods[i].img);
		}
		else if ((restriction == "GlutenFree") && (prods[i].GlutenFree == true)){
			product_img.push(prods[i].img);
		}
		else if ((restriction == "Organic") && (prods[i].Organic == true)){
			product_img.push(prods[i].img);
		}
		else if (restriction == "None"){
			product_img.push(prods[i].img);
		}
}
return product_img;
}

function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		} 
	}
	return totalPrice;
}
function submit() {
	document.getElementById("response").style.display = "block";
	setTimeout(function() {
		location.reload();
	  }, 2200);

	
  }
