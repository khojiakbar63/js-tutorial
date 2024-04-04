### LOOPS | FUNCTIONS | ARRAYS | OBJECTS

>~LOOPS:

> Javascriptda 2 xil loop bor:
1. for
2. while - bu ham 2 ta korinishda:

- while
- do while

1. For loopning ko'rinish:

```
for(let i = 0; i < 10; i++){

    // shart false bo'lguniga 
         qadar bu qism bajariladi

}
```
---

2. While loops:

- while loopning ko'rinish:

```
   let i = 0;
   while(i < 10){

      // shart false bo'lguniga 
         qadar bu qism bajariladi
   }
```

- do while loopning ko'rinish:

```
   let i = 0;
   do{

      // shart false bo'lguniga 
         qadar bu qism bajariladi

   }while(i < 10);
```

======================================================

>~FUNCTIONS:

> Javascriptda functionning ko'p turi bor, biz bazilari bilan cheklanamiz:

1. Function declaration
2. Function expression
3. Arrow function
4. Self-Invoking Functions

### -Function declaration
Bu functionda 
- [x] - function kalit so'zi bor
- [x] - functionName - bu functionning nomi
- [x] - (parametrlar) - bu functionning parametrlari
- [x] - { } - bu functionning nimalar bajarishi
- [x] - return - bu functionning qiymatni qaytarishi
- [x] - bu function o'zidan oldin ham keyin ham chaqirilsa ishlaydi


```
function functionName(parametrlar) {

   // shartlarni bajarish

   return; // bu qiymatni qaytarib beradi

}

functionName(parametrlar);  //functionni chaqirish...
```
- Misol:

```
let age;
function knowAge(age){
    // let currentYear = +prompt('Enter the current year: ');
    // let birthYear = +prompt('Enter your birth year: ');
    age = currentYear - birthYear;

    console.log(`Your age is ${age} .`); 
}
// knowAge(age);
```
---

### -Function expression

```
const functionName = function(parametrlar) {
   
   // shartlarni bajarish

   return; // bu qiymatni qaytarib beradi

}
```

Bu functionda 
- [x] - variable kerak bo'ladi
- [x] - anonim function o'sha variablega beriladi
- [x] - bu function faqat ozidan pastda chaqiriladi

-Misol:

```
const sayHello = function(){
    let name = prompt("What is your name?");
    console.log(`${name}, hello.`);
}
// sayHello();
```

### -Arrow function

```
const functionName = (parametrlar) => {

   // shartlarni bajarish

   return; // bu qiymatni qaytarib beradi
}
```

Bu functionda 
- [x] - function kalit so'zi ishaltimaydi
- [x] - o'zgaruvchi kerak bo'ladi 
- [x] - (parametrlar) => {} bu qisim variablega biriktiriladi va arrow function hosil bo'ladi
- [x] - bu function faqat ozidan pastda chaqiriladi
- [x] - arrow functionning ichidagi qiymatni qaytarish uchun return kerak lekin bitta holatda return qo'yilmaydi bu

```
const sayHello = (name) => console.log(`${name}, hello!`)

sayHello("Kojiakbar");
```

-Misol:

```
const sayHello = (name) => {

    console.log(`${name}, hello.`);

}

sayHello();

- [x] - bu function faqat ozidan pastda chaqiriladi
```

### -Self-Invoking Functions

```
(function(){

   // shartlarni bajarish

}) ()
```

-Misol:

```
(function(){
   
   console.log("Hello, World!");

})();
```

Bu functionda 
- [x] - function kalit so'zi ishaltiladi
- [x] - o'zgaruvchi kerak bo'lmaydi 
- [x] - anonim function qavslar ichiga o'raladi va chaqirish uchun functiondan keyin qavs ochiq yopiq qavslar qoyiladi.
- [x] - return kalit sozi ham k-k bo'maydi.


============================================================================================================

>~ARRAYS: 

- bu maxsus o'zgaruvchiki oziga birdan ortiq qiymat qabul qila oladi
- qiymatlar tipi farq qilmadi har xil data tiplar qo'llanishi mumkin
- arraylarda qiymatlarning index raqami boladi
- arraylar ichiga obyektlarni qabul qila oladi

- Misol:

```
const  = [ 26 , 'Khojiakbar' , true, function(){}, {name: 'Khojiakbar', age: 26, isMarried: true} ];
```
- lekin odatda bir guruhga mansub qiymatlar qo'shilishi tavsiya qilinadi: 
- Misol:

```
const cars = ['damas', 'gentra', 'lacetti', 'nexia', 'tico'];
```
---

- Misol:

```
const arrayName = [ 1 , 'Khojiakbar' , true, function(){}, {name: 'Khojiakbar'} ];
```
---
- Array ichidagi qiymatlarni tanlab olish uchun: indexlar ishlatiladi:
- Misol:
```
const cars = ['damas', 'gentra', 'lacetti', 'nexia', 'tico'];
cars[1];
natija: 'gentra'
chunki indexlar 0 dan boshlanadi
```
---
- Array ichidagi qiymatlarni o'zgartirish uchun:
- Misol:
```
   
const cars = ['damas', 'gentra', 'lacetti', 'nexia', 'tico'];
cars[1] = 'kia';
```
---
- Arrayni uzunligini olish uchun:
- Misol:
```
   
const cars = ['damas', 'gentra', 'lacetti', 'nexia', 'tico'];
const carsLength = cars.length;
console.log(carsLength);
```
---
- Oxirgi array qiymatiga kirish uchum
- Misol:
```
   
const cars = ['damas', 'gentra', 'lacetti', 'nexia', 'tico'];
cars[cars.length - 1];
```
---

- Arrayni loop qilish ya'ni ichidagi har bir elementni ko'rib chiqsh:
- Misol:
```
   
const cars = ['damas', 'gentra', 'lacetti', 'nexia', 'tico'];
for(let i = 0; i < cars.length; i++){
   
   console.log(cars[i]);
}
```
- Array ekanligini tekshirish uchun 2 ta usul bor:
- Misol-1:
```
const cars = ['damas', 'gentra', 'lacetti', 'nexia', 'tico'];
Array.isArray(cars)
natija: true;
```
- Misol-2:
```
const cars = ['damas', 'gentra', 'lacetti', 'nexia', 'tico'];
cars instanceof Array;
natija: true;
```


### Array metodlari:

> at(index)
- bu ko'rsatilgan indexdagi elementni olib beradi;
- Misol:
```
const cars = ['damas', 'gentra', 'lacetti', 'nexia', 'tico'];
cars.at(2);
```
---

> join()
- bu metod barcha array elementlarini string qilib jamlab beradi;
- bu metod toString() ga oxshab ishlaydi, bundan tashqari ajratuvchi qo'shib beradi;
- Misol:
```
const cars = ["Banana", "Orange", "Apple", "Mango"];
cars.join('*');
natija: 'Banana * Orange * Apple * Mango'
```
---

> pop()
- bu metod arrayning oxiridagi elementni olib tashlaydi
- Misol:
```
   
const cars = ['damas', 'gentra', 'lacetti', 'nexia', 'tico'];
let poppedItem = cars.pop();

console.log(cars);
console.log(poppedItem);

natija: ['damas', 'gentra', 'lacetti', 'nexia'];
natija: 'tico';
```
  
---
>push(element) 
- bu arrayning oxiriga element qo'shib beradi;
- Misol:
```
const cars = ['damas', 'gentra', 'lacetti', 'nexia', 'tico'];
cars.push('kia');
```
---

>shift() 
- bu arrayning boshidagi elementni listdan olib beradi;
- Misol:
```
const cars = ['damas', 'gentra', 'lacetti', 'nexia', 'tico'];
let shiftedItem = cars.shift();

console.log(cars);
console.log(shiftedItem);

natija: ['gentra', 'lacetti', 'nexia', 'tico'];
natija: 'damas';
```
---

> unshift(element) 
- bu arrayning boshiga element qo'shib beradi;
- Misol:
```  
const cars = ['damas', 'gentra', 'lacetti', 'nexia', 'tico'];
cars.unshift('kia');

console.log(cars);

natija: ['kia', 'damas', 'gentra', 'lacetti', 'nexia', 'tico'];
```
---

> concat()

- bu metod arraylarni bir biriga qo'shib yangi array yasab beradi;
- Misol: inson va lar => insonlar
```
const myHobbies = ["walking alone", "listening podcasts"];
const myInterests = ["programming", "language"];
const myDesires = myHobbies.concat(myInterests);

console.log(myDesires);

natija: ['walking alone', 'listening podcasts', 'programming', 'language'];
```
---

>concat() 3ta array qo'shib yangi array yasab beradi;

```
const arr1 = ["HTML", "CSS"];
const arr2 = ["JAVASCRIPT", "JAVA", "DART"];
const arr3 = ["VUE", "REACT"];
const mySkills = arr1.concat(arr2, arr3);

console.log(mySkills);

natija: ['HTML', 'CSS', 'JAVASCRIPT', 'JAVA', 'DART', 'VUE', 'REACT'];
```
---

> concat() arrayga value qoshish uchun:
```
const arr1 = ["HTML", "CSS"];
const mySkills = arr1.concat('Javascript');

console.log(mySkills);

natija: ['HTML', 'CSS', 'Javascript'];
```

> flat()
-bu metod array ichidagi arraylarni bitta yaxlit arrayga olib qo'yadi.
- Misol:
```
   
const arr1 = [['HTML', 'CSS',[MIXINS, 'FLEXBOX', 'GRID', 'BOOTSTRAP', 'TAILWIND'],]['JAVASCRIPT', 'JAVA', 'DART']];
const mySkills = arr1.flat();

console.log(mySkills);

natija: ['HTML', 'CSS', 'MIXINS', 'FLEXBOX', 'GRID', 'BOOTSTRAP', 'TAILWIND', 'JAVASCRIPT', 'JAVA', 'DART'];
```
---

> splice()
- bu metod arrayning istalgan joyidagi elementni kesib olib orniga boshqa element(larni) joylab beradi.
```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);

natija: ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango'];
```
- bu yerda 2 = index, 0 = nechta element olib tashlanishligi

---

> slice()
- bu metod arrayning istalgan joyidagi elementlarni kesib oladi.

```
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

console.log(citrus);

natija: ['Orange', 'Lemon'];
```
---
> sort()
- bu metod arrayni alifbo bo'yicha tartiblash uchun ishlatiladi.
- Misol:
```
   
   
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits);

natija: ['Apple', 'Banana', 'Mango', 'Orange'];
```
---
> reverse()
- bu metod arrayni teskari tartiblash uchun ishlatiladi.
- Misol:
```
   
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.reverse();

console.log(reversed);

natija: ['Apr', 'Mar', 'Feb', 'Jan'];
```
---

>~OBJECTS:

- bu maxsus o'zgaruvchiki oziga bir nechta qiymat qo'shiladi
- qiymatlar tipi farq qilmadi har xil data tiplar qo'llanishi mumkin
- hamma narsalar obyekt bolishi mumkin
- obyektlarda qiymatlarni nomi bo'ladi
- misollar: odam, moshina, kompyuter, kino, kurs
- obyektlar ichiga arraylarni qabul qila oladi va indexlari orqali tanlanadi
- obyektlar ichiga obyektlarni qabul qila oladi va . orqali tanlanadi

```
const person = {
   firstName:"John",
   lastName:"Doe",
   age:50,
   eyeColor:"blue",
   hobbies: ["reading", "music", "sports"],
   address:{
       city:"Tashkent",
       district:"Akkurgan",
       zip:"10001"
   }
   };

   console.log(person.firstName);
   console.log(person.lastName);
   console.log(person.age);
   console.log(person.eyeColor);
   console.log(person.hobbies[1]);
      
   console.log(person.address.city);
   console.log(person.address.district);
   console.log(person.address.zip);
```