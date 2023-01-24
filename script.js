// 1 პუნქტი

for (let index = 0; index < 100; index++) {
  console.log(index);
}

// 2 პუნქტი

let index = 0;
while (index < 50) {
  console.log(index);
  index++;
}

// 3 პუნქტი

let index = 0;
do {
  console.log(index);
  index++;
} while (index < 150);

// 4 პუნქტი

let array = [];
for (let index = 1; index < 10000; index++) {
  array.push(index * index);
  console.log(index);
}

// 5 პუნქტი

let names = ["irakli", "qeti", "lado", "giorgi", "salome", "niki", "nuca"];

let addname = [...names];
addname.unshift("noka");
console.log(addname);

names.push("mariami");
console.log(names);

names.pop();
console.log(names);

let reversenames = names.reverse();
console.log(reversenames);

let sortednames = names.sort();
console.log(sortednames);
