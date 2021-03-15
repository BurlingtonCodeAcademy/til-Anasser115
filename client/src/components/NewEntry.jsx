import React from "react";

export default function NewEntry() {
  return (
    // new entry form
    <div id="form-cont">
      <form id="form" action="/entry" method="POST">
        {/* title */}
        <input
          name="title"
          type="text"
          placeholder="Title"
          required="true"
          id="title-cont"
        />

        {/* author */}
        <input
          name="author"
          type="text"
          placeholder="Author's Name"
          required="true"
          id="author-cont"
        />
        {/* text  */}
        <textarea
          name="textArea"
          type="text"
          placeholder="What did I learn today?"
          required="true"
          id="textArea-cont"
        />
        {/* category */}
        <label id="cat-label">Category:</label>
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
          <input type="radio" name="category" value="goal" />
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
        <input id="submit-button" type="submit" />
      </form>
    </div>
  );
}
