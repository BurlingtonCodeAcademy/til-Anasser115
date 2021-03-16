import React from "react";

export default function SearchBar() {
  
  return (
    <div id="search-cont">
        {/* search */}
      <form id="search-form" action="/search" method="POST">
        <input
          name="title"
          type="text"
          placeholder="Title"
          required="true"
          id="search-title-cont"
        />
        <input id="submit-button" type="submit" value="Search" />
      </form>
      {/* filter */}
      <form id="filter-form" action="/filter" method="POST">
        <label for="category">Filter by category:</label>
        <select name="category" id="category-filter" required='true' placeholder="Category" >
        <option value="">Category</option>
          <option value="personal" >Personal</option>
          <option value="work">Work</option>
          <option value="Goal">Goal</option>
          <option value="gratitude">Gratitude</option>
          <option value="food">Food</option>
        </select>
        <input type="submit" value="Filter" />
      </form>
    </div>
     
  );
  
}
