// Поменяйте код так, чтобы каждая переменная была объявлена до того, как ей присвоено значение. Пользуйтесь правилом: везде, где возможно, в первую очередь используйте const, если нельзя const, то let.

const NDS = 0.20
const NDFL = 0.13
const EXCISE = 0.1
let RENT = 40000
let FOOD = 15000
let OTHER = 15000
const MY_SALARY = 120000

const ndflTax = MY_SALARY * NDFL;
const mySalaryNet = MY_SALARY - ndflTax;
const otherTaxes = mySalaryNet * (NDS + EXCISE);
let totalAvailable = mySalaryNet - otherTaxes;
totalAvailable -= FOOD + OTHER + RENT
alert('Зарплата ' + MY_SALARY + ' рублей')
alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
alert('Осталось ' + totalAvailable + ' рублей')