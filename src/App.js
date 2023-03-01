import foods from "./foods.json";
import './App.css';
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { useState } from "react";
import Search from "./components/Search";
import { Row, Divider, Button } from 'antd';

function App() {
  const [foodsList, setFoodList] = useState(foods);
  const [foodBackUp, setBackUp] = useState(foods);
  const [query, setQuery] = useState('');
  const [displayForm, setDisplay]= useState(false);
  const addFood= (food) => {
    const copy= [...foodsList];
    copy.unshift(food);
    // console.log(copy)
    setFoodList(copy);
    setBackUp(copy);
  }
  const handleSearch= (query) => {
    const copy= [...foodBackUp];
    const filterCopy= copy.filter((one) => one.name.toLocaleLowerCase().includes(query))
    // console.log(filterCopy.length, copy.length);
    setFoodList(filterCopy);
  }
  const deleteFood= (food) => {
    const nameFood= foodsList.map((food)=> food.name);
    const namebackUp= foodBackUp.map((food)=> food.name);
    const index = nameFood.indexOf(food);
    const indexB= namebackUp.indexOf(food);
    const copy= [...foodsList];
    const copyB= [...foodBackUp];
    copyB.splice(indexB, 1);
    copy.splice(index, 1);
    setBackUp(copyB);
    setFoodList(copy);
  }
  
  const DisplayForm=() => {
    setDisplay(!displayForm);
  }
  return (
    <div className="App">
    <Button onClick={DisplayForm}>Add New Food</Button>
    {(displayForm)? <AddFoodForm callback={addFood}/>: <></>}
    <Search query={query} setQuery={setQuery} callback={handleSearch}/>
    <Divider>Food List</Divider>
    <Row style={{ width: '100%', justifyContent: 'center' }}>
      {(!foodsList.length)?
            <p>Oops! There is no more content to show.</p>
        :
        foodsList.map((food) => {
        return(
        <FoodBox food={food} callback={deleteFood}/>
        );
      })}
      </Row>
      </div>
  );
}

export default App;
