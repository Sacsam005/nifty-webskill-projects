// create a div and inject into a page which contains a heading. if clicked it should be an editable content and whenever a user clicks away after making an edit, the div should update with the new content

let divElem = document.createElement("div");

// add text to the divElem
let val = localStorage.getItem("text");
let text;

if ((val = null)) {
  let text = document.createTextNode("This is my txt");
  divElem.appendChild(text);
} else {
  text = document.createTextNode(val);
}

divElem.setAttribute("id", "elem");
divElem.setAttribute("class", "elem");
divElem.setAttribute(
  "style",
  "border: 2px solid orange; padding:2rem; width: 50%;"
);

let container = document.querySelector(".container");
let first = document.getElementById("first");

// insert divElem before id = first
container.insertBefore(divElem, first);

// add event listener to the divElem
divElem.addEventListener("click", function () {
  let noTextArea = document.getElementsByClassName("textarea").length;
  if (noTextArea == 0) {
    let html = divElem.innerHTML;
    divElem.innerHTML = ` <textarea class="textarea form-control" class="textarea" id="textarea" rows="3">${html}</textarea>
`;
  }

  // listen for the blur event on textarea
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    divElem.innerHTML = textarea.value;
    localStorage.setItem("text", textarea.value);
  });
});
