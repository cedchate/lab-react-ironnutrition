import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {
    const [name, setName] = useState('');    
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(1);
    const [servings, setServings] = useState(1);
    const makeFood= (event) => {
        event.preventDefault();
        if(name==='' && image===''&&calories===1&&servings===1){
            return;
        }
        const newfood= {name:name, image:image, calories:calories, servings:servings};
        props.callback(newfood);
        // console.log(newfood)
        // props.callback(food);
    }
  return (
    <form onSubmit={makeFood}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={(event) => {setName(event.target.value)}} />

      <label>Image</label>
      <Input value={image} type='text' onChange={(event) => {setImage(event.target.value)}} />
      {/* render antd <Input /> type="text" here */}

      <label>Calories</label>
      <Input value={calories} type='number' onChange={(event) => {setCalories(event.target.value)}} />
      {/* render antd <Input /> type="number" here */}

      <label>Servings</label>
      <Input value={servings} type='number' onChange={(event) => {setServings(event.target.value)}} />
      {/* render antd <Input /> type="number" here */}

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;