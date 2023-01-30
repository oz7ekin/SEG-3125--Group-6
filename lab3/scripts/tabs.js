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



function populateListProductChoices(a, b) {
    var m = document.getElementById(a);
    var n = document.getElementById(b);

    n.innerHTML = "";

    var optionArray = restrictListProducts(products, m.value);
	var optionArray2 = restrictListProducts2(products, m.value);

		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		n.appendChild(checkbox);
		
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		n.appendChild(label);

		var productPrice = optionArray2[i];
		var checkbox2 = document.createElement("output");
		checkbox2.type = "label";
		checkbox2.name = "productPrice";
		checkbox2.value = "       $"+productPrice;
		n.appendChild(checkbox2);
		
		n.appendChild(document.createElement("br"));    
	}
}
	

function selectedItems(){
	
	var element = document.getElementsByName("product");
	var price = document.getElementsByName("productPrice");
	var chosenProducts = [];
	
	var lst = document.getElementById('displayCart');
	lst.innerHTML = "";
	
	var s = document.createElement("P");
	s.innerHTML = "You selected : ";
	s.appendChild(document.createElement("br"));
	for (i = 0; i < element.length; i++) { 
		if (element[i].checked) {
			s.appendChild(document.createTextNode(element[i].value));
			s.appendChild(document.createTextNode(price[i].value));
			s.appendChild(document.createElement("br"));
			chosenProducts.push(element[i].value);
		}
	}
		
	lst.appendChild(s);	
	lst.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
	
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
		price: 1.00
	},
	{
		name: "springwater",
		vegetarian: true,
		FitnessFood: true,
		Seafood:false,
		GlutenFree:true,
		Organic: false,
		price: 1.50
	},
	{
		name: "potato",
		vegetarian: true,
		FitnessFood: false,
		Seafood: false,
		GlutenFree: true,
		Organic: true,
		price: 1.99
	},
	{
		name: "chocolater",
		vegetarian: true,
		FitnessFood: false,
		Seafood:false,
		GlutenFree:true,
		Organic: false,
		price: 2.00
	},
	{
		name: "icecream",
		vegetarian: false,
		FitnessFood: false,
		Seafood:false,
		GlutenFree:true,
		Organic: false,
		price: 3.50
	},
	{
		name: "bread",
		vegetarian: true,
		FitnessFood: false,
		Seafood: false,
		GlutenFree: false,
		Organic: false,
		price: 4.35
	},
	{
		name: "chickbreast",
		vegetarian: false,
		FitnessFood: true,
		Seafood:false,
		GlutenFree:true,
		Organic: false,
		price: 5.00
	},
	{
		name: "Beef",
		vegetarian: false,
		FitnessFood: false,
		Seafood:false,
		GlutenFree:true,
		Organic: true,
		price: 11.00
	}
  ,
  {
	name: "porkbone",
	vegetarian: false,
	FitnessFood: false,
	Seafood:false,
	GlutenFree:true,
	Organic: false,
	price: 12.00
},
  {
		name: "rice)",
		vegetarian: true,
		FitnessFood: false,
		Seafood:false,
		GlutenFree:true,
		Organic: true,
		price: 18.00
	},
	{
		name: "salmon",
		vegetarian: false,
		FitnessFood: false,
		Seafood:true,
		GlutenFree:true,
		Organic: true,
		price: 21.50
	},
  {
		name: "icewine",
		vegetarian: true,
		FitnessFood: false,
		Seafood:false,
		GlutenFree:true,
		Organic: false,
		price: 30.00
	}
];
	

function restrictListProducts(prods, restriction) {
	let product_names = [];
	let product_price = [];
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
