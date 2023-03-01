import { Divider, Input } from 'antd';

function Search (props) {
    
    const handleSearch= (event) => {
        props.setQuery(event.target.value);
        props.callback(event.target.value);
    }
    // console.log(props.query)
    return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={props.query} type="text" onChange={handleSearch} />
    </>
    );
}

export default Search