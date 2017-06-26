var mysql = require("mysql");
var inquirer = require("inquirer");

var productArray = [];

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  viewAll();
});



 function viewAll() {
  console.log("Here are all of our products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for(var i = 0; i < res.length; i++){
    // Pushing into product array. 
    	console.log("Product Number: " + res[i].item_id + "\n" + "Product Name: " + res[i].product_name + "\n" + "Price: " + res[i].price + "\n" + "Available Units: " + res[i].stock_quantity + "\n-----------");
    }
    questionOne();
  });
}
   
 

 function questionOne(){
 	inquirer.prompt([
    	{
    		type: "input",
    		message: "Select the number of the product you would you like to buy!",
    		name: "selection"
 
    	}
    	
    	]).then(function(answers) {
			
 			connection.query("SELECT * FROM products WHERE item_id =?", [answers.selection], function(err, res) {
		    if (err) throw err;
		    console.log("Item details: ");
		    console.log("Product name: " + res[0].product_name);
		    console.log("Price: $" + res[0].price);
		    console.log(res[0].stock_quantity + " left in stock.");

		    questionTwo(res);

  
    });
 });
 }

 function questionTwo(res){
 	inquirer.prompt([
    	{
    		type: "input",
    		message: "How many units would you like to buy?",
    		name: "selection"
 
    	}
    	
    	]).then(function(answers) {
    		
    		if(answers.selection < res[0].stock_quantity){
    			console.log("Here you go! Enjoy!");
    			var updatedStock = res[0].stock_quantity - answers.selection; 
    			update(res, updatedStock);
    		}
    		else {
    			
    			console.log("Sorry! We don't have that many available!");
    			viewAll();

    		}

    		
    });
  }

  function update(res, updatedStock) {
 
	  connection.query(
	    "UPDATE products SET ? WHERE ?",
	    [
	      {
	        stock_quantity: updatedStock
	      },
	      {
	      	product_name: res[0].product_name
	      }
	     
	    ],
	    function(err, res) {
	      // console.log("Thanks! You rule!");
	      connection.destroy();
	      
	    
	    }
	  );
}


