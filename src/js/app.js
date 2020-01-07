const regularPurchases = 300000;
const regularPurchasesPercent = 0.01;
let cashback = regularPurchases * regularPurchasesPercent;

const cashbackLimit = 3000;
if (cashback > cashbackLimit) {
    cashback = cashbackLimit;
}

console.log(cashback);