


var data = [
    {
        "_id": "5e935f94b0ecb3f1e7c2188d",
        "isActive": false,
        "balance": "$1,109.06",
        "picture": "http://placehold.it/32x32",
        "age": 26,
        "name": "Mccall Osborn",
        "gender": "male"
    },
    {
        "_id": "5e935f94d65b81a62f64430e",
        "isActive": false,
        "balance": "$2,152.47",
        "picture": "http://placehold.it/32x32",
        "age": 25,
        "name": "Olson Lowe",
        "gender": "male"
    },
    {
        "_id": "5e935f94889d06c58631e68e",
        "isActive": true,
        "balance": "$2,701.96",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "name": "Delores Leonard",
        "gender": "female"
    },
    {
        "_id": "5e935f94f20f720d11cd6093",
        "isActive": true,
        "balance": "$1,215.36",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "name": "Fleming Foley",
        "gender": "male"
    },
    {
        "_id": "5e935f948c4a563504788d41",
        "isActive": true,
        "balance": "$2,077.13",
        "picture": "http://placehold.it/32x32",
        "age": 26,
        "name": "Pena Wyatt",
        "gender": "male"
    },
    {
        "_id": "5e935f9459e91f3b5d650b4d",
        "isActive": false,
        "balance": "$1,775.41",
        "picture": "http://placehold.it/32x32",
        "age": 39,
        "name": "Lara Deleon",
        "gender": "male"
    },
    {
        "_id": "5e935f944b34247e8b9ffc46",
        "isActive": false,
        "balance": "$1,322.41",
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "name": "Landry Guerra",
        "gender": "male"
    },
    {
        "_id": "5e935f94a12111bc33101587",
        "isActive": false,
        "balance": "$3,259.59",
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": "Sarah Cole",
        "gender": "female"
    },
    {
        "_id": "5e935f945e70b7835c3b4508",
        "isActive": true,
        "balance": "$3,942.66",
        "picture": "http://placehold.it/32x32",
        "age": 36,
        "name": "Watkins Manning",
        "gender": "male"
    }
]


function orderByAge(key, order = "asc") {
    return function innerSort(left, right) {
        if (!left.hasOwnProperty(key) || !right.hasOwnProperty(key)) {
            return 0;
        }

        const varLeft = left[key];
        const varRight = right[key];

        let comparison = 0;
        if (varLeft > varRight) {
            comparison = 1
        } else if (varLeft < varRight) {
            comparison = -1
        } else {
            comparison = 0
        }

        if (order === 'desc') {
            return comparison * -1;
        } else {
            return comparison;
        };
    }
}

function filterActives() {
    let activePeople = [];

    data.filter(person => {
        if (person.isActive) {
            activePeople.push(person);
        }
    })

    return activePeople;
}


function sumBalances() {
    let totalBalance = 0;

    data.forEach(person => {
        let parsedBalance = parseFloat(person.balance.replace("$","").replace(",",""));
        totalBalance = totalBalance + parsedBalance;
    })

    return totalBalance.toFixed(2);
}

let ageAsc = data.sort(orderByAge('age'));
let ageDesc = data.sort(orderByAge('age', 'desc'));

// console.log on terminal
console.log("Ascending age: ");
console.log(ageAsc);
console.log(`\n\n\n`);
console.log("Descending age: ");
console.log(ageDesc);
console.log(`\n\n\n`);
console.log("Active people: ");
console.log(filterActives());
console.log(`\n\n\n`);
console.log("Total balance: ");
console.log(sumBalances());




        //1 -sort items by age DESC
        //2 -sort items by age ASC
        //3 -Print only actives
        //4 -Sum all the balances

        //var num = balance.replace("$","").replace(",","");





