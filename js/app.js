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

let PenniesCounter = 0;
let NickelsCounter = 0;
let DimesCounter = 0;
let QuartersCounter = 0;

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

let FindPennies = PutPenniesInPennyWrappers(CoinSetArray);
let FindNickels = PutNickelsInNickelWrappers(CoinSetArray);
let FindDimes = PutDimesInDimeWrappers(CoinSetArray);
let FindQuarters = PutQuartersInQuarterWrappers(CoinSetArray);

function PutPenniesInPennyWrappers(CoinSetArray)
{
    for (let i = 0; i < CoinSetArray.length; i++)
    {
        if (CoinSetArray[i] === 'Penny')
        {
            PenniesCounter++;
        }
    }
    return PenniesCounter;
}

function PutNickelsInNickelWrappers()
{
    for (let i = 0; i < CoinSetArray.length; i++)
    {
        if (CoinSetArray[i] === 'Nickel')
        {
            NickelsCounter++;
        }
    }
    return NickelsCounter;
}

function PutDimesInDimeWrappers()
{
    for (let i = 0; i < CoinSetArray.length; i++)
    {
        if (CoinSetArray[i] === 'Dime')
        {
            DimesCounter++;
        }
    }
    return DimesCounter;
}

function PutQuartersInQuarterWrappers()
{
    for (let i = 0; i < CoinSetArray.length; i++)
    {
        if (CoinSetArray[i] === 'Quarter')
        {
            QuartersCounter++;
        }
    }
    return QuartersCounter;
}

let PenniesTotalValue = PenniesCounter * 0.01;
const RoundedPenniesAmount = PenniesTotalValue.toFixed(2);

console.log(PenniesCounter + " pennies equaling: " + RoundedPenniesAmount);

let NickelsTotalValue = NickelsCounter * 0.05;
const RoundedNickelsAmount = NickelsTotalValue.toFixed(2);

console.log(NickelsCounter + " nickels equaling: " + RoundedNickelsAmount);

let DimesTotalValue = DimesCounter * 0.10;
const RoundedDimesAmount = DimesTotalValue.toFixed(2);

console.log(DimesCounter + " dimes equaling: " + RoundedDimesAmount);

let QuartersTotalValue = QuartersCounter * 0.25;
const RoundedQuartersAmount = QuartersTotalValue.toFixed(2);

console.log(QuartersCounter + " quarters equaling: " + RoundedQuartersAmount);

let GrandTotal = RoundedPenniesAmount + RoundedNickelsAmount 
+ RoundedDimesAmount + RoundedQuartersAmount;

console.log("Total: $" + GrandTotal);