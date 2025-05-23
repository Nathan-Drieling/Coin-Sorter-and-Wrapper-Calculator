// COIN SORTER AND WRAPPER CALCULATOR PROGRAM

// Counters for each coin will keep trach of how many coins are created
let PenniesCounter = 0;
let NickelsCounter = 0;
let DimesCounter = 0;
let QuartersCounter = 0;

// Making a list of options for the coin possibility
const CoinOptions = ['Penny','Nickel','Dime','Quarter'];

// function call to create a random set of coins
let CoinSetArray = GenerateRandomSetOfCoins(CoinOptions, 200);

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

// Printing out the randomly generated coins.
console.log(CoinSetArray);

// function calls to find each coin type in the set of coins
let FindPennies = PutPenniesInPennyWrappers(CoinSetArray);
let FindNickels = PutNickelsInNickelWrappers(CoinSetArray);
let FindDimes = PutDimesInDimeWrappers(CoinSetArray);
let FindQuarters = PutQuartersInQuarterWrappers(CoinSetArray);

function PutPenniesInPennyWrappers(CoinSetArray)
{
    let PennyWrapper = 50;
    let WrapperAmountForPennies = 0;
    let PenniesRemainder = 0; 

    for (let i = 0; i < CoinSetArray.length; i++)
    {
        if (CoinSetArray[i] === 'Penny')
        {
            PenniesCounter++;
            WrapperAmountForPennies = Math.floor(PenniesCounter/PennyWrapper);

            PenniesRemainder = PenniesCounter % PennyWrapper;
        }
    }

    console.log(`${WrapperAmountForPennies} is the amount of penny wrappers needed. ${PenniesRemainder > 0 ? ` And the remainder is: ${PenniesRemainder}` : ""}`);

    return PenniesCounter;
}

function PutNickelsInNickelWrappers()
{
    let NickelsWrapper = 40;
    let WrapperAmountForNickels = 0;
    let NickelsRemainder = 0; 

    for (let i = 0; i < CoinSetArray.length; i++)
    {
        if (CoinSetArray[i] === 'Nickel')
        {
            NickelsCounter++;

            WrapperAmountForNickels = Math.floor(NickelsCounter/NickelsWrapper);

            NickelsRemainder = NickelsCounter % NickelsWrapper;
        }
    }

    console.log(`${WrapperAmountForNickels} is the amount of nickel wrappers needed. ${NickelsRemainder > 0 ? ` And the remainder is: ${NickelsRemainder}` : ""}`);

    return NickelsCounter;
}

function PutDimesInDimeWrappers()
{

    let DimesWrapper = 50;
    let WrapperAmountForDimes = 0;
    let DimesRemainder = 0; 

    for (let i = 0; i < CoinSetArray.length; i++)
    {
        if (CoinSetArray[i] === 'Dime')
        {
            DimesCounter++;

            WrapperAmountForDimes = Math.floor(DimesCounter/DimesWrapper);

            DimesRemainder = DimesCounter % DimesWrapper;
        }
    }

    console.log(`${WrapperAmountForDimes} is the amount of dime wrappers needed. ${DimesRemainder > 0 ? ` And the remainder is: ${DimesRemainder}` : ""}`);

    return DimesCounter;
}

function PutQuartersInQuarterWrappers()
{

    let QuartersWrapper = 40;
    let WrapperAmountForQuarters = 0;
    let QuartersRemainder = 0; 

    for (let i = 0; i < CoinSetArray.length; i++)
    {
        if (CoinSetArray[i] === 'Quarter')
        {
            QuartersCounter++;   

            WrapperAmountForQuarters = Math.floor(QuartersCounter/QuartersWrapper);

            QuartersRemainder = QuartersCounter % QuartersWrapper;
        }
    }

    console.log(`${WrapperAmountForQuarters} is the amount of quarters wrappers needed. ${QuartersRemainder > 0 ? ` And the remainder is: ${QuartersRemainder}` : ""}`);

    return QuartersCounter;
}

// Doing the math for the value of each coin
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

// Doing the math to find the grand total
let GrandTotal = (PenniesCounter * 0.01) 
               + (NickelsCounter * 0.05) 
               + (DimesCounter * 0.10)
               + (QuartersCounter * 0.25);
 
const RoundedGrandTotal = GrandTotal.toFixed(2);

console.log("Total: $" + RoundedGrandTotal);