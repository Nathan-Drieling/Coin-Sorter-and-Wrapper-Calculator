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

// assigning base values to each coin type for the total all together
let penniesValue = 0.01;
let nickelsValue = 0.05;
let dimesValue = 0.10;
let quartersValue = 0.25;

// Each coin wrapper is its own array. If a wrapper is full, make a new one and fill that too

let PennyWrapper = [50];
let NickelsWrapper = [40];
let DimesWrapper = [50];
let QuartersWrapper = [40];

// Counters for each coin will keep trach of how many coins are created

let PennyCounter = 0;
let NickelCounter = 0;
let DimeCounter = 0;
let QuarterCounter = 0;

// Making a list of options for the coin possibility
const CoinOptions = ['penny ','nickel ','dime ','quarter '];

// function to generate random coins in an array
function GenerateRandomSetOfCoins(CoinOptions, length)
{
    let CoinResult = '';
    const CoinOptionsLength = CoinOptions.length;
    
    for (let i = 0; i < length; i++)
    {
        const RandomIndex = Math.floor(Math.random() * CoinOptionsLength);

        if (RandomIndex.includes("penny "))
        {
            PennyCounter++;
            PutPennyInPennyWrapper();
        }
        else if (RandomIndex.includes("nickel "))
        {
            NickelCounter++;
            PutNickelInNickelWrapper();
        }
        else if (RandomIndex.includes("dime "))
        {
            DimeCounter++;
            PutDimeInDimeWrapper();
        }
        else if (RandomIndex.includes("quarter "))
        {
            QuarterCounter++;
            PutQuarterInQuarterWrapper();
        }
        
        CoinResult += CoinOptions[RandomIndex];
    }
    return CoinResult;
}


const RandomSetOfCoins = GenerateRandomSetOfCoins(CoinOptions, 10);


console.log(RandomSetOfCoins);

console.log(PennyCounter + " pennies equaling: " + PennyCounter * 0.01);
console.log(NickelCounterCounter + " nickels equaling: " + NickelCounter * 0.05);
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
