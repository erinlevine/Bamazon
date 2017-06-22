var mysql = require("mysql");
var inquirer = require("inquirer");

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
    // Log all results of the SELECT statement
    console.log(res);
  });
}

var askUnits = function(){
		inquirer.prompt([
		{
			type: "input",
			message: "What is the ID of the product you would like to buy?",
			name: "response"

		},
		{
			type: "input",
			message: "How many units of the product would you like to buy?",
			name: "response"
		}
		//Once we receive a response, this is executed. A basic if statement.
		]).then(function(answers) {
			if(answers.response >= res.items){ //I don't know the proper way to reference the database
			console.log("Here you go! Enjoy!");
			//Then remove the number in response from total items in stock
		}
			else{
				console.log("Sorry! I don't have that many in stock!");
			}
		
	});
	}
}