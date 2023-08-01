import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    onSearch(searchQuery);
  };

  return (
    <input
      type="text"
      placeholder="Search by Name, Username, or Email"
      onChange={handleSearch}
    />
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
