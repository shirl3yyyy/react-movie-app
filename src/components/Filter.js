import React from "react";

 const Filter = ({ setSearchTitle, setSearchRating }) => {
  const handleTitleChange = (e) => {
    setSearchTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    setSearchRating(e.target.value);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;