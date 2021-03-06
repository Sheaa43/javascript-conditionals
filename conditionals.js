var clicks = 0;


$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickCounter").submit(countClick);
    $("#ageValidator").submit(checkAge);
    $("#salesTax").submit(calcSalesTax)
    $("#catFood").submit(recommendFood);
    $("#randomCard").submit(drawCard);


	function countClick(event) {
	    event.preventDefault();
		// Increment a variable that tracks the
		// number of button clicks
        clicks++;

		// Print the current number of clicks to the
		// <p> with ID "clickCountOutput"
        $("clickCountOutput").text(clicks);
		// When the count gets to 10, reset it to 0
        if(clicks === 10)
        {
            clicks = 0;
        }


	}


    function checkAge(event) {
        event.preventDefault();
        // Get the user's birth year from the text
        // box with ID of "birthYear"
        var year = parseInt($("#birthYear").val());
        var age = 2020 - year;
        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"
        if (age <= 17)
        {
          $("#birthYearOutput").text("Child");
        }
        else (age >= 18)
        {
            $("#birthYearOutput").text("Adult");
        }
        // If they are 18 or over, print "Adult" instead

    }

    function calcSalesTax(event) {
	    event.preventDefault()
        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        var purchaseAmount = $("#purchaseAmount").val();
        purchaseAmount = parseFloat(purchaseAmount);
        var salesTax = 0;
        var state = $("#state").val();
        if (state === "WI")
        {
            salesTax = 5;
        }
        else if(state === "IL")
        {
            salesTax = 8;
        }
        else if(state === "MN")
        {
            salesTax = 7.5;
        }
        else if(state === "MI")
        {
            salesTax = 5.5;
        }
        else
            alert("Invalid Selection!");

        var calcSalesTax = purchaseAmount * salesTax;
        $("#salesTaxOutput").text(calcSalesTax);

        // Get the state from the text box with ID "state"

        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%

        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"

        // If the user enters a state not listed above,
        // print "Error" instead


    }

    function recommendFood(event) {
	    event.preventDefault()

        var catAge = $("#catAge").val();
        if (catAge < 2)
        {
            $("#catAgeOutput").text("Kitten Chow");
        }
        else if (catAge <= 10)
        {
            $("#catAgeOutput").text("Adult Chow");
        }
        else
        {
            $("#catAgeOutput").text("Senior Chow");
        }
        //$("#catAgeOutput").text(recommendFood)
        // Get the cat's age from the text box with
        // ID of "catAge"

        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"

        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"





    }

    function drawCard(event) {
	    event.preventDefault()
        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description = "";

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"
        if(faceValue === 1)
        {
            description += "Ace";
        }
        else if(faceValue === 11)
        {
            description += "Jack";
        }
        else if(faceValue === 12)
        {
            description += "Queen";
        }
        else if(faceValue === 13)
        {
            description += "King";
        }
        else
        {
            description += faceValue;
        }
        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"
        if(suit === 1)
        {
            description += " Clubs";
        }
        else if (suit === 2)
            {
                description += " Spades";
            }
        else if (suit === 3)
        {
            description += " Hearts";
        }
        else if (suit === 4)
        {
            description += " Clubs";
        }
        // Print the card's description to the <p> with
        // ID of "drawCardOutput"

        $("#drawCardOutput").text(description);


    }

});