const REGULAR = {
    name: 'regular',
    percent: 0.01
};
const INCREASED = {
    name: 'increased',
    percent: 0.05
};
const SPECIAL = {
    name: 'increased',
    percent: 0.3
};

const cashbackLimit = 3000;

const purchases = [
    {
        sum: 4662,
        category: REGULAR
    },
    {
        sum: 780,
        category: INCREASED
    },
    {
        sum: 4760,
        category: SPECIAL
    },
    {
        sum: 234,
        category: SPECIAL
    }
];

let cashback = 0;
purchases.forEach(purchase => {
    cashback += purchase.sum * purchase.category.percent;
});
if (cashback > cashbackLimit) {
    cashback = cashbackLimit;
}

console.log(`Размер кэшбека: ${cashback}`);