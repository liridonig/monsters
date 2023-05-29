import "./search-box.styles.css";

const SearchBox = ({className, placeholder, onChangeHandler}) => {
  return (
    <input
      className={`search-box ${className}`}
      type="Search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
