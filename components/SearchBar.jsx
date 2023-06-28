import React, {useState} from 'react' 
// to store it on usestate variables


import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"

const SearchBar = () => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response => response.json))
        .then((json) => {
            const results =json.filter((user) => {
                return (
                value && 
                user && 
                user.name && 
                user.name.toLowerCase().includes(value)
            );
            });
            console.log(results);
        });
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

  return (
    <div className='input-wrapper'> 
    {/* this will contain two things search icons & input which will taken to text. */}
        <FaSearch id="search-icon" />
        <input 
        placeholder='Type to search...' 
        value={input} 
        onChange={(e) => handleChange(e.target.value) }
    />
    </div>
  );    
}

export default SearchBar
