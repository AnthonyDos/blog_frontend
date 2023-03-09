import { useEffect, useState } from "react";


const Search = (props) => {
    const { setData,data } = props;
    const [ search, setSearch ] = useState("");
    const [ valueOnKeyDown, setValueOnKeyDown] = useState("");
   
    const HandleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        const test = data.filter(e => e.name.toLowerCase().includes(search) || e.tag.toLowerCase().includes(search))
        setData(test)
        if (valueOnKeyDown.keyCode === 8) {
            setData(JSON.parse(localStorage.getItem("articles")))
        }
    }
    
    useEffect(()=> {
        
    },[search])
    
    return(
        <form>
            <input 
                id="input"
                type="search" 
                value={search}
                onChange={(e)=> HandleSearch(e)}
                placeholder="Search article..."
                onKeyDown={(e)=> setValueOnKeyDown(e)}
            />
        </form>
    )
}

export default Search;