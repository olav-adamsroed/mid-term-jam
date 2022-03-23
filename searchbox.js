import react from 'react';

const SearchBar = (props) => {
    return (
        <div className='col col-sm4'>
            <input className='fomr-control' 
            value={props.value}
            onChange={() => props.setSearchValue(event.target.value)}
            placeholder='What movie would you like?...' ></input>
        </div>
    );
};

export default SearchBar;
