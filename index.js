const disemvowel = () => {
  const el = document.querySelector("#name-to-disemvowel");
  const p = document.querySelector("#disemvowel-string");
  const str = el.value;
  let output = "";
  const vowels = "aeiou";
  for (let char of str) {
    if (!vowels.includes(char.toLowerCase())) {
      output += char;
    }
  }
  p.textContent = output;
};

const isPalindrome = () => {
  const str = document.querySelector("#is-palindrome-input").value;
  const p = document.querySelector("#is-palindrome-p");
  let result = "false";
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] === str[str.length - i - 1]) {
      result = "true";
    }
  }
  p.textContent = result;
};
const sums = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    sum += num;
  }
  return sum;
};
const average = (arr) => {
  let sumOfNums = sums(arr);
  return sumOfNums / arr.length;
};

const onlyOdds = (arr) => {
  return arr.filter((num) => num % 2 === 1);
};

const favoriteNumbers = () => {
  let list = document.querySelectorAll("#favorite-numbers > li");
  let arr = [];
  list.forEach((listItem) => {
    arr.push(Number(listItem.textContent));
  });
  const sum = sums(arr);
  const averageOfNums = average(arr);
  const onlyOddsOfNums = onlyOdds(arr);

  const sumOfFav = document.querySelector("#sum-of-favorite-nums");
  sumOfFav.textContent += sum;

  const aveOfFav = document.querySelector("#average-of-favorite-nums");
  aveOfFav.textContent += averageOfNums;

  const oddList = document.querySelector("#list-of-odd-favorite-nums");

  onlyOddsOfNums.forEach((odd) => {
    const li = document.createElement("li");
    li.innerText = odd;
    oddList.appendChild(li);
  });
};

favoriteNumbers();

const incrementCount = () => {
  const countr = Number(document.querySelector("#click-count"));
  counter.textContent = counter.textContent + 1;
};

const reset = () => {
  const counter = document.querySelector("#click-count");
  counter.displayContent = 0;
};

const addItem = () => {
  const shoppingList = document.querySelector("ul");
  const input = document.querySelector(".add-item");
  const item = input;
  const listItem = document.createElement("li");
  listItem.textContent = item;
  shoppingList.appendChild(listItem);
  input.value = "Empty";
};

const killButton = () => {
  const button = document.querySelector("#kill-button");
  button.removeChild(button);

  const header = document.querySelector("#kill-button-header");
  header.innerText = "Yay you were victorious!";
  header.style.color = "green";
};
