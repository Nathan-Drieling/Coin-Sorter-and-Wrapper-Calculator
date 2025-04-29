// COIN SORTER AND WRAPPER CALCULATOR PROGRAM

// creating variables to describe the QUANTITY of coins (change values for your own experimentation)
let pennies = 200;
let nickles = 200;
let dimes = 200;
let quarters = 200;

// creating boolean values to use for if check
let IsAPenny = true;
let IsANickel = true;
let IsADime = true;
let IsAQuarter = true;

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


// function to generate random voins in an array
function GenerateRandomSetOfCoins(CoinOptions, length)
{
    let CoinResult = '';
    const CoinOptionsLength = CoinOptions.length;
    
    for (let i = 0; i < length; i++)
    {
        const RandomIndex = Math.floor(Math.random() * CoinOptionsLength);

        CoinResult += CoinOptions[RandomIndex];
    }
    return CoinResult;
}

const CoinOptions = ['penny','nickel','dime','quarter'];
const RandomSetOfCoins = GenerateRandomSetOfCoins(CoinOptions, 200);
console.log(RandomSetOfCoins);





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


// if else check to put coin in a wrapper

for (let i = 0; i < TotalAmountOfCoins; i++)
{
    if (IsAPenny)
    {
        PutPennyInPennyWrapper();
    }
    else if (IsANickel)
    {
        PutNickelInNickelWrapper();
    }
    else if (IsADime)
    {
        PutDimeInDimeWrapper();
    }
    else if (IsAQuarter)
    {
        PutQuarterInQuarterWrapper();
    }
}
