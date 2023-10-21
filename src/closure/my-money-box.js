function moneyBox(){
    let saveCoins = 0;
    return function (coins){
        saveCoins += coins
        console.log(`MoneyBox: $.${saveCoins}`);
    }
}

const myMoneyBox = moneyBox()
myMoneyBox(5)
myMoneyBox(5)
myMoneyBox(10)

const MoneyBoxAna = moneyBox()
MoneyBoxAna(10)
MoneyBoxAna(5)
MoneyBoxAna(10)