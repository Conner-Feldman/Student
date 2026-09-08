// this program demonstrates the use of optional chaining in TypeScript to safely access properties that may not exist on an object. 
// The `House` interface defines a house with a required `sqft` property and an optional `yard` property, which itself has a `sqft` property. 
// The `printYardSize` function uses optional chaining to check if the `yard` property exists before trying to access its `sqft` value. 
// If the yard does not exist, it logs "No yard"; otherwise, it logs the size of the yard.
interface House {
    sqft: number;
    yard?: {
        sqft: number;
    };
}

function printYardSize(house: House) {
    const yardSize = house.yard?.sqft;
    if (yardSize === undefined) {
        console.log('No yard');
    } else {
        console.log('Yard is ${yardSize} sqft');
    }
}

let home: House = {
    sqft: 500
};

let homeWithYard: House = {
    sqft: 800,
    yard: {
        sqft: 200
    }
};
printYardSize(home); // Output: No yard
printYardSize(homeWithYard); // Output: Yard is 200 sqft