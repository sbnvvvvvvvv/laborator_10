const Natasha = new Map([
	['Фирма', 'Giant'],
	['Цвет', 'Розовый'],
	['Цена', '25690'],
	['Валюта', 'Рубль'],
	['Страна производитель', 'Россия']
]);
const Viktor = new Map([
	['Фирма', 'TREK'],
	['Цвет', 'Синий'],
	['Цена', '12000'],
	['Валюта', 'Доллар'],
	['Страна производитель', 'Россия']
]);
const Sveta = new Map([
	['Фирма', 'Merida'],
	['Цвет', 'Зелёный'],
	['Цена', '15684'],
	['Валюта', 'Евро'],
	['Страна производитель', 'Россия']
]);
const Katya = new Map([
	['Фирма', 'CUBE'],
	['Цвет', 'Чёрный'],
	['Цена', '96300'],
	['Валюта', 'Рубль'],
	['Страна производитель', 'Россия']
]);

var dollar = 102.5761;
var evro = 107.425;

var VBC = Viktor.get('Цена')*dollar;
var SBC = Sveta.get('Цена')*evro;

const cost =[Natasha.get('Цена'), VBC, SBC, Katya.get('Цена')];
var max = 0;
var index;
cost.forEach(function(elem, ind) {
	if (elem > max) {
		max = elem;
		index = ind;
	}
});

if (index == 0) document.write('Килограмм конфет получит Наташа');
else if (index == 1) document.write('Килограмм конфет получит Витя');
else if (index == 2) document.write('Килограмм конфет получит Света');
else document.write('Килограмм конфет получит Катя');

console.log(Natasha.get('Цена'));
console.log(VBC);
console.log(SBC);
console.log(Katya.get('Цена'));

