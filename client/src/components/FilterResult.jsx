import React from 'react'

export default function FilterResult() {
//getting filter result from url 
let category = document.location.pathname.replace('/ExistingEntry/filter/','')
if(category.replace('%20', " ")){
    category=category.replace('%20', " ")
}

//fetching result

console.log("inside")
fetch(`/categories/${category}`)
.then((res) => res.json())
//if there is no matching
.then((entry) => {
    if(entry.length === 0){
        document.getElementById("full-list").innerText="Didn't find any matching records"
    }
  else  {entry.forEach((element) => {
      // container
      let Cont = document.createElement("div");
      Cont.id = element._id;
      Cont.className = "listing-cont";

      //title element
      let Title = document.createElement("h3");
      Title.innerText = element.title;
      Title.className = "listing-title";

      //author element
      let Author = document.createElement("h5");
      Author.innerText = element.author;
      Author.className = "listing-author";

      //text area element
      let TextArea = document.createElement("h5");
      TextArea.innerText = element.textArea;
      TextArea.className = "listing-textArea";

      //Category element
      let Category = document.createElement("h5");
      Category.innerText = element.category;
      Category.className = "listing-category " + element.category;

      //Date element
      let Dates = document.createElement("h5");
      Dates.innerText = element.date;
      Dates.className = "listing-date";

      //Edit button
      let Edit = document.createElement("button");
      Edit.innerText = "Edit";
      Edit.className = "listing-edit";
      Edit.id = element._id;
      Edit.onclick = Editing;

      //Delete button
      let Delete = document.createElement("button");
      Delete.innerText = "Delete";
      Delete.className = "listing-delete";
      Delete.onclick = Deleting;

      //adding all elements to the container
      Cont.appendChild(Edit);
      Cont.appendChild(Delete);
      Cont.appendChild(Title);
      Cont.appendChild(Author);
      Cont.appendChild(TextArea);
      Cont.appendChild(Category);
      Cont.appendChild(Dates);
      //adding the container to the page
      document.getElementById("full-list").appendChild(Cont);
    });}
  });

// editing function
function Editing(id) {
let newId = id.path[1].id;

id.path[1].innerHTML = `
  <form id="editForm" action="/editEntry" method="POST">
    <input
      name="title"
      type="text"
      placeholder="Title"
      required="true"
      id="title-cont"
    />
    <input
    name="author"
    type="text"
    placeholder="Author's Name"
    required="true"
    id="author-cont"
  />
    <textarea
      name="textArea"
      type="text"
      placeholder="What did I learn today?"
      required="true"
      id="textArea-cont"
    ></textarea>
    <label id='cat-label'>Category:</label>
    <label>
      <input
        type="radio"
        name="category"
        value="personal"
        required="true"
      />
      Personal
    </label>
    <label>
      <input type="radio" name="category" value="work" />
      Work
    </label>
    <label>
      <input type="radio" name="category" value="Goal" />
      Goal
    </label>
    <label>
      <input type="radio" name="category" value="gratitude" />
      Gratitude
    </label>
    <label>
      <input type="radio" name="category" value="food" />
      Food
    </label>
    <label>id:</label>
    <input type="text" name="id" value="${newId}" readOnly="true" />
    
    <input id="submit-button" type="submit" />
  </form>
`;
}
//deleting function
function Deleting(id) {
let newId = id.path[1].id;
console.log("/delete/" + newId);
fetch("/delete/" + newId);
window.location.pathname="/ExistingEntry"
}
return <div id="full-list"></div>

}