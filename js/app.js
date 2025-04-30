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

// Grand total
let Total = 0;

// Making a list of options for the coin possibility
const CoinOptions = ['Penny','Nickel','Dime','Quarter'];

// function call to create a random set of coins
let CoinSetArray = GenerateRandomSetOfCoins(CoinOptions, 10);

// function to generate random coins in an array
function GenerateRandomSetOfCoins(CoinOptions, AmountOfCoinsYouWantToGenerate)
{
    const CoinResult = [];
    for (let i = 0; i < AmountOfCoinsYouWantToGenerate; i++)
    {
        let RandomIndex = Math.floor(Math.random() * CoinOptions.length);

        CoinResult.push(CoinOptions[RandomIndex]);
    }
    return CoinResult;
}

console.log(CoinSetArray);

let SortPennies = PutPenniesInPennyWrappers(CoinSetArray);
let SortNickels = PutNickelsInNickelWrappers(CoinSetArray);
let SortDimes = PutDimesInDimeWrappers(CoinSetArray);
let SortQuarters = PutQuartersInQuarterWrappers(CoinSetArray);

function PutPenniesInPennyWrappers(CoinSetArray)
{
    for (let i = 0; i < CoinSetArray.length; i++)
    {
        if (CoinSetArray[i] === 'Penny')
        {
            PennyCounter++;
        }
    }
    return PennyCounter;
}

function PutNickelsInNickelWrappers()
{
    for (let i = 0; i < CoinSetArray.length; i++)
    {
        if (CoinSetArray[i] === 'Nickel')
        {
            NickelCounter++;
        }
    }
    return NickelCounter;
}

function PutDimesInDimeWrappers()
{
    for (let i = 0; i < CoinSetArray.length; i++)
    {
        if (CoinSetArray[i] === 'Dime')
        {
            DimeCounter++;
        }
    }
    return DimeCounter;
}

function PutQuartersInQuarterWrappers()
{
    for (let i = 0; i < CoinSetArray.length; i++)
    {
        if (CoinSetArray[i] === 'Quarter')
        {
            QuarterCounter++;
        }
    }
    return QuarterCounter;
}

console.log(PennyCounter + " pennies equaling: " + (PennyCounter * 0.01));

console.log(NickelCounter + " nickels equaling: " + (NickelCounter * 0.05));

console.log(DimeCounter + " dimes equaling: " + (DimeCounter * 0.10));

console.log(QuarterCounter + " quarters equaling: " + (QuarterCounter * 0.25));

console.log("Total: " + ((PennyCounter * 0.01)
                      + (NickelCounter * 0.05)
                      + (DimeCounter * 0.10)
                      + (QuarterCounter * 0.25)));