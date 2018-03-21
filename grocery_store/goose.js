function Redirect()
{
    window.location="http://www.tutorialspoint.com";
}

function check(psChoice)
{
    sChoice = psChoice;
}

var sChoice = "name";      //defaults to name

var sNames = new Array();   // Array to store items's names
var iIsles = new Array();   // Array to store items's isle number
var dPrices = new Array();   // Array to store items's price
var iNums = new Array();   // Array to store items's quantity
	
// Populate arrays
sNames[0] = "Bananas";
iIsles[0] = 2;
dPrices[0] = 2.30;
iNums[0] = 23;

sNames[1] = "Apples";
iIsles[1] = 2;
dPrices[1] = 2.15;
iNums[1] = 45;

sNames[2] = "Chicken";
iIsles[2] = 4;
dPrices[2] = 8.35;
iNums[2] = 5;

sNames[3] = "Chips";
iIsles[3] = 6;
dPrices[3] = 3.45;
iNums[3] = 12;

sNames[4] = "Fish";
iIsles[4] = 4;
dPrices[4] = 6.30;
iNums[4] = 3;

sNames[5] = "Honey";
iIsles[5] = 12;
dPrices[5] = 1.50;
iNums[5] = 20;

sNames[6] = "Milk";
iIsles[6] = 1;
dPrices[6] = 3.50;
iNums[6] = 16;

sNames[7] = "Juice";
iIsles[7] = 1;
dPrices[7] = 4.50;
iNums[7] = 20;

sNames[8] = "Cheese";
iIsles[8] = 1;
dPrices[8] = 2.50;
iNums[8] = 11;

sNames[9] = "Rice";
iIsles[9] = 10;
dPrices[9] = 1.50;
iNums[9] = 8;

sNames[10] = "Cake";
iIsles[10] = 9;
dPrices[10] = 9.50;
iNums[10] = 5;

sNames[11] = "Water";
iIsles[11] = 8;
dPrices[11] = 2.50;
iNums[11] = 25;

sNames[12] = "Soda";
iIsles[12] = 8;
dPrices[12] = 3.75;
iNums[12] = 35;

sNames[13] = "Bread";
iIsles[13] = 9;
dPrices[13] = 2.30;
iNums[13] = 23;

sNames[14] = "Donuts";
iIsles[14] = 9;
dPrices[14] = 6.50;
iNums[14] = 20;

sNames[15] = "Candy";
iIsles[15] = 3;
dPrices[15] = 2.50;
iNums[15] = 56;

sNames[16] = "Ham";
iIsles[16] = 4;
dPrices[16] = 4.50;
iNums[16] = 14;

sNames[17] = "Seafood";
iIsles[17] = 13;
dPrices[17] = 5.50;
iNums[17] = 13;

sNames[18] = "Cereal";
iIsles[18] = 5;
dPrices[18] = 5.75;
iNums[18] = 9;

sNames[19] = "Watermelon";
iIsles[19] = 2;
dPrices[19] = 4.25;
iNums[19] = 11;

			
function vSortItems(pbSortUp)
{
    var iSub;       // Subscript counter
    var iSub2;
	var sOut;       // String to store output to the web page
    var sTempNames = sNames;    
		
	sOut = "";
	
	if(sChoice == "name")
	{
		//sOut = "goose<br>";
		if(pbSortUp == true)
		{
			//sOut += "1<br>";
			sTempNames.sort();
		}
		else //false
		{
			//sOut += "2<br>";
			sTempNames.sort();
			sTempNames.reverse();
		}
	}
	/*else if(sChoice == "price")
	{
		sOut = "monkey<br>";
		if(pbSortUp == true)
		{
			sOut += "1<br>";
		}
		else //false
		{
			sOut += "2<br>";
		}
	}
	else if(sChoice == "isle")
	{
		sOut = "hippo<br>";
		if(pbSortUp == true)
		{
			sOut += "1<br>";
		}
		else //false
		{
			sOut += "2<br>";
		}
	}
	else //num
	{
		sOut = "cat<br>";
		if(pbSortUp == true)
		{
			sOut += "1<br>";
		}
		else //false
		{
			sOut += "2<br>";
		}
	}
	*/
	
    for (iSub = 0; iSub < sNames.length; iSub++)
    {
        sOut = sOut + (iSub + 1) + ". " + sNames[iSub] + "<br>"; //"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + iIsles[iSub] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + dPrices[iSub] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + iNums[iSub] + "<br>";
    }

    // Output the final string to the web page:
    document.getElementById("txtSortOutput").innerHTML = sOut;
}

function vSearchItems()
{
	
	var sSearch = txtSearch.value;
	
	var bFound;
	bFound = false;
	
	var iSub;
	var iIndex;
	var sOut;
	sOut = "";
	for(iSub = 0; iSub < sNames.length; iSub++)
	{
		if(sNames[iSub].toLowerCase() == sSearch.toLowerCase())
		{
			sOut = sNames[iSub] + " found in isle " + iIsles[iSub] + " with a price of $" + dPrices[iSub] + " with " + iNums[iSub] + " in left stock";
			bFound = true;
		}
	}
	
	if(bFound == false)
	{
		sOut = "Item not found"; 
	}
	
	document.getElementById("txtSearchOutput").innerHTML = sOut;
	
}
         //-->