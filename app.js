let input = document.getElementById("textInput");
let submitButton = document.getElementById("submitButton");
let list = document.getElementById("list");
let message = document.getElementById("message");
let titles = document.getElementById("titles");

const createMessage = (text, className) => {
  message.innerText = text;
  message.classList = className;
  setTimeout(() => {
    message.innerText = "";
  }, 800);
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let inputValue = input.value;

  if (!inputValue) {
    createMessage("Please fill inputs", "error");
    return;
  } else {
    createMessage("New item added", "succsess");
  }

  let listItem = `<li class="list-item">${inputValue}   
  <span id="delete" class="delete-icon">x</span></li>`;
  list.insertAdjacentHTML("afterbegin", listItem);
  input.value = "";
  checkValue();
  return;
});

function checkValue() {
  let deleteBtn = document.getElementById("delete");
  deleteBtn.addEventListener("click", (e) => {
    list.removeChild(deleteBtn.parentNode);
    createMessage("Item deleted", "error");
  });
}

console.log("asda");
