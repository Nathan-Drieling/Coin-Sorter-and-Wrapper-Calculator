// COIN SORTER AND WRAPPER CALCULATOR PROGRAM
// Algorithm: make coin(s)
//            check if coin is penny, nickel, dime, or quarter
//            while loop while coins are unsorted
//            if penny
//               function call to put penny in wrapper
//            if dime
//               function call to put dime in wrapper
//            if quarter
//               function call to put quarter in wrapper
//            if else
//               This is not a valid coin
//            exit loop
//            total value of coins for each type
//            total value of coins together

// Each coin wrapper is its own array. If a wrapper is full, make a new one and fill that too

var PennyWrapper = [50];
var NickelsWrapper = [40];
var DimesWrapper = [50];
var QuartersWrapper = [40];

// Counters for each coin will keep trach of how many coins are created

let PennyCounter = 0;
let NickelCounter = 0;
let DimeCounter = 0;
let QuarterCounter = 0;

// Making a list of options for the coin possibility
const CoinOptions = ['penny ','nickel ','dime ','quarter '];

// function call to create a random set of coins
const CoinSetArray = GenerateRandomSetOfCoins(CoinOptions, 10);

// function to generate random coins in an array
function GenerateRandomSetOfCoins(CoinOptions, length)
{
    const CoinResult = [];
    for (let i = 0; i < length; i++)
    {
        const RandomIndex = Math.floor(Math.random() * CoinOptions.length);

        if (CoinResult.includes("penny "))
        {
            PennyCounter++;
        }
        else if (CoinResult.includes("nickel "))
        {
            NickelCounter++;
        }
        else if (CoinResult.includes("dime "))
        {
            DimeCounter++;
        }
        else if (CoinResult.includes("quarter "))
        {
            QuarterCounter++;
        }
        
        CoinResult.push(CoinOptions[RandomIndex]);
    }
    return CoinResult;
}

console.log(CoinSetArray);

console.log(PennyCounter + " pennies equaling: " + PennyCounter * 0.01);
console.log(NickelCounter + " nickels equaling: " + NickelCounter * 0.05);
console.log(DimeCounter + " dimes equaling: " + DimesCounter * 0.10);
console.log(QuarterCounter + " quarters equaling: " + QuarterCounter * 0.25);

console.log("Total: " + (PennyCounter * 0.01)
                      + (NickelCounter * 0.05)
                      + (DimeCounter * 0.10)
                      + (QuarterCounter * 0.25))



function PutPennyInPennyWrapper()
{
    PennyWrapper[i];
    i++;
}

function PutNickelInNickelWrapper()
{

}

function PutDimeInDimeWrapper()
{

}

function PutQuarterInQuarterWrapper()
{

}
