

    var menu = [
        {type: "a1", name:  "Small Garlic-Herb Breadsticks with Marinara Sauce", price:  2.25}, 
        {type: "a2", name: "Large Garlic-Herb Breadsticks with Marinara Sauce", price: 3.75}, 
        {type: "a3", name: "Small Cheese Breadsticks with Marinara Sauce", price: 2.25}, 
        {type: "a4", name: "Large Cheese Breadsticks with Marinara Sauce", price: 3.75}, 
        {type: "a5", name: "Fried Pickles with Chipotle Mayo", price: 4.75}, 
        {type: "a6", name: "Fried Veggie Eggrolls with Sweet and Sour Dipping Sauce", price: 4.95}, 
        {type: "a7", name: "Hummus and Pita with Veggies", price: 3.25}, 
        {type: "a8", name: "Mozzarella Sticks", price: 4.95}, 
        {type: "a9", name: "Tortilla Chips and Salsa", price: 2.50}, 
        {type: "a10", name: "Two Soft Pretzels", price: 2.75}, 
        {type: "a11", name: "Plain Chicken Fingers", price: 5.95}, 
        {type: "a12", name: "Buffalo Chicken Fingers", price: 5.95}, 
        {type: "a13", name: "Buffalo Chicken Wings", price: 6.25}, 
        {type: "a14", name: "BBQ Chicken Wings", price: 6.25}, 
        {type: "a15", name: "Honey Mustard Chicken Wings", price: 6.25}, 
        {type: "a16", name: "Monterey Jack Cheese Quesadilla", price: 4.75}, 
        {type: "a17", name: "Monterey Jack Veggie Quesadilla", price: 5.50}, 
        {type: "a18", name: "Monterey Jack Chicken Quesadilla", price: 5.50}, 
        
        {type: "s1", name: "Kale Salad", price: 6.25}, 
        {type: "s2", name: "Cobb Salad", price: 6.25}, 
        {type: "s3", name: "Small Magee's Garden Salad", price: 2.25}, 
        {type: "s4", name: "Large Magee's Garden Salad", price: 3.75}, 
        {type: "s5", name: "Small Jack's Caesar Salad", price: 3.00}, 
        {type: "s6", name: "Large Jack's Caesar Salad", price: 4.25}, 
        {type: "s7", name: "Mandarin Almond Salad", price: 5.00}, 
        {type: "s8", name: "Greek Salad with Hummus", price: 5.25}, 
        
        {type: "p1", name: "Chicken Pesto Panino", price: 6.25}, 
        {type: "p2", name: "Portobello and Goat Cheese Panino", price: 6.25}, 
        {type: "p3", name: "Homemade Meatloaf and Cheddar Panino", price: 6.25}, 
        {type: "p4", name: "Chicken Finger Basket with French fries", price: 6.50}, 
        {type: "p5", name: "Quinoa Chili served with a small garden salad", price: 6.25},
        
        {type: "sw1", name: "Jack’s Deli Sandwich", price: 5.50},
        {type: "sw2", name: "Jack’s Double-Decker Turkey Club", price: 5.75},
        {type: "sw3", name: "BLT Sandwich", price: 4.25},
        {type: "sw4", name: "Italian Sub", price: 5.95},
        {type: "sw5", name: "Veggie Flatbread", price: 5.50},
        {type: "sw6", name: "Hamburger", price: 4.00},
        {type: "sw7", name: "Cheeseburger", price: 4.75},
        {type: "sw8", name: "Turkey Burger", price: 4.75},
        {type: "sw9", name: "Polar Bear Burger", price: 5.75},
        {type: "sw10", name: "Smoke House Burger", price: 5.95},
        {type: "sw11", name: "Blue Mango Garden Burger", price: 5.50},
        {type: "sw12", name: "Shaved Philly Steak and Cheese", price: 5.75},
        {type: "sw13", name: "Flat Top Falafel with Tzatziki Sauce", price: 4.75},
        {type: "sw14", name: "Chicken Parmesan Sandwich", price: 4.75},
        {type: "sw15", name: "Classic Grilled Cheese Sandwich", price: 3.00},
        
        {type: "b1", name: "Fish Taco", price: 5.95},
        {type: "b2", name: "Burrito “El Grande”", price: 5.95},
        {type: "b3", name: "Chicken Caesar Wrap", price: 5.25},
        {type: "b4", name: "Vegetarian Caesar Salad Wrap(V)", price: 4.50}, 
        {type: "b5", name: "Buffalo Chicken and Blue Cheese Wrap", price: 6.50},
        {type: "b6", name: "Cobb Salad Wrap", price: 5.95},
        
        {type: "si1", name: "Cobb Salad Wrap", price: 5.95},
        {type: "si2", name: "Small French Fries", price: 1.75},
        {type: "si3", name: "Large French Fries", price: 2.25},
        {type: "si4", name: "Small Fajita Fries", price: 1.75},
        {type: "si5", name: "Large Fajita Fries", price: 2.25},
        {type: "si6", name: "Small Onion Rings", price: 1.75},
        {type: "si7", name: "Large Onion Rings", price: 2.50},
        {type: "si8", name: "Small Sweet Potato Fries", price: 2.25},
        {type: "si9", name: "Large Sweet Potato Fries", price: 2.95},
        {type: "si10", name: "Guacamole", price: 1.50}
        
    ];  


function getItem(index){
	return menu[index].name;
	console.log(menu[index].name);
}


// Change page logic
function changePage(page){
    navActive(page); //change color of button in nav bar
    
    if(page == 'home'){
        document.getElementById('home').style.display = "block";
        document.getElementById('menu').style.display = "none";
        document.getElementById('confirmation').style.display = "none";
        document.getElementById('about').style.display = "none";
    }else if(page == 'menu'){
        document.getElementById('home').style.display = "none";
        document.getElementById('menu').style.display = "block";
        document.getElementById('confirmation').style.display = "none";
        document.getElementById('about').style.display = "none";
    }else if(page == 'confirmation'){
        document.getElementById('home').style.display = "none";
        document.getElementById('menu').style.display = "none";
        document.getElementById('confirmation').style.display = "block";
        document.getElementById('about').style.display = "none";
    }else if(page == 'about'){
        document.getElementById('home').style.display = "none";
        document.getElementById('menu').style.display = "none";
        document.getElementById('confirmation').style.display = "none";
        document.getElementById('about').style.display = "block";
    }
}

// Change page logic
function navActive(page){
    var navBar = document.getElementById('navigationBar').getElementsByTagName('li');
    
    for(i=0; i<navBar.length; i++) {
        var a = navBar[i].innerText;
        if(navBar[i].innerText.toLocaleLowerCase() == page) {
            navBar[i].classList.add("active");
        } else {
            navBar[i].classList.remove("active");
        }
    }
    
}


$("#wow").click(makeOrder);

function makeOrder(){
    alert("wow reacts only");
//    var checker = [a1, a2, a3, a4, a5, a6];
//	var stuff = [];
//	for(var k; k < checker.length; k++)
//	{
//		if ($('#checker[k]').is(":checked"))
//			{
//				stuff.push(checker[k]);
//			}
//	}
    
    $('input[type=checkbox]').each(function () {
        console.log(this.id);
    });
                                   
    changePage('confirmation');
}

  


<!--Saves user input into a string object-->
function storeInput(order){
    var txtName = document.getElementById("txtname");
    var txtBowId = document.getElementById("txtBowId");
    var bowId = txtBowId.value;
    var name = txtName.value;
    
  } // end storeName
