function selectTab(tabIndex) {
    //Hide Tabs
    document.getElementById('content1').style.display="none";
    document.getElementById('content2').style.display="none";
    document.getElementById('content3').style.display="none";
    
    //Show the Selected Tab
    document.getElementById('content' + tabIndex).style.display="block";  
  }



function openInfo(evt, tabName) {

	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);

    s2.innerHTML = "";

    var optionArray = restrictListProducts(products, s1.value);

		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);
		
		s2.appendChild(document.createElement("br"));    
	}
}
	

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)+" Thanks for your visiting, See you next time!"));
}

var products = [
	{
		name: "potato $1.99/lb",
		vegetarian: true,
		FitnessFood: false,
    Seafood: false,
		price: 1.99
	},
	{
		name: "bread $4.35/bag",
		vegetarian: true,
		FitnessFood: false,
    Seafood: false,
		price: 4.35
	},
	{
		name: "salmon $21.5/lb",
		vegetarian: false,
		FitnessFood: false,
    Seafood:true,
		price: 21.50
	},
  {
		name: "chickbreast $5.00/lb",
		vegetarian: false,
		FitnessFood: true,
    Seafood:false,
		price: 5.00
	},
  {
		name: "bottlewater $1.00/bottle",
		vegetarian: true,
		FitnessFood: true,
    Seafood:false,
		price: 1.00
	},
  {
		name: "icecream $3.50/box",
		vegetarian: false,
		FitnessFood: false,
    Seafood:false,
		price: 3.50
	},
  {
		name: "Beef $11.00/lb",
		vegetarian: false,
		FitnessFood: false,
    Seafood:false,
		price: 11.00
	}
  ,
  {
		name: "chocolate $2.00/bar",
		vegetarian: true,
		FitnessFood: false,
    Seafood:false,
		price: 2.00
	},
  {
		name: "icewine $30.00/bottle",
		vegetarian: true,
		FitnessFood: false,
    Seafood:false,
		price: 30.00
	},
  {
		name: "springwater $1.50/bottle",
		vegetarian: true,
		FitnessFood: true,
    Seafood:false,
		price: 1.50
	},
  {
		name: "rice 18.00/bag(8kg)",
		vegetarian: true,
		FitnessFood: false,
    Seafood:false,
		price: 18.00
	},
  {
		name: "porkbone $12.00/lb",
		vegetarian: false,
		FitnessFood: false,
    Seafood:false,
		price: 12.00
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
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
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