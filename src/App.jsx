import { Button } from 'antd';
import { useState } from 'react';
import { Input, Form } from 'antd';
import { Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const { Search } = Input;

const App = () => {
  const [data , setData] = useState([
    {id:1,  name: "Muhamad" , age : '30' , status : "true"  },
    {id:2,  name: "Alex" , age : '30' , status : "false"  },
    {id:3,  name: "Junior" , age : '30' , status : "false" },
  

  ])
  const [openAd, setOpenAd] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const [addName, setAddName] = useState("")
  const [addAge, setAddAge] = useState("")
  const [obdatedate, setObdatedate] = useState(data)


  const handleAddButtonClick = () => {
    setOpenAd(!openAd);
  };

  const addUser = () => {
    const user = {
      id: Date.now(),
      name: addName,
      age: addAge,
    }
    setData([...data, user]);
    setObdatedate([...data, user]);
    setAddName("");
    setAddAge("");
    setOpenAd(!openAd);

  }

  const deleteUser=(id)=> {
    const newData = data.filter((elem) => elem.id !== id);
    setData(newData);
  }

  const SelectStat = (e) => {
      obdatedate.filter((elem) => {
        if (e.target.value == "true") {
          return elem;
        }
      })
  }

  return (
    <div>
      <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', paddingLeft: '50px', paddingRight: '50px' }}>
        <Search style={{ width: '30%' }} placeholder="input search loading default" loading />
      

        <Button type="primary" onClick={handleAddButtonClick}> Add + </Button> </div>
        <div className='w-[200px] ml-5'> <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={SelectStat}
          
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"true"}>Active</MenuItem>
          <MenuItem value={"false"}>Inactive</MenuItem>
        </Select>
      </FormControl></div>
        

      {openAd ? (
        <Form layout="vertical" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
          <Form.Item label="Field A">
            <Input value={addName} onChange={(e) => setAddName(e.target.value)} placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Field B">
            <Input value={addAge} onChange={(e) => setAddAge(e.target.value)} placeholder="input placeholder" />
          </Form.Item>
          <Form.Item>
            <Button onClick={addUser} type="primary" htmlType="submit">Submit</Button>
            <Button className=' bg-red-800 text-green-100 ml-5' onClick={handleAddButtonClick}>Cancel</Button>
          </Form.Item>
        </Form>
      ) : null}

<div className='flex gap-10 justify-center my-10 items-center flex-wrap '>
{
  obdatedate.map((elem,i) => {
    return (
<Card key={i} title="Card title" bordered={false} style={{width: 300, border: '1px solid black ', }}>
    <p>{elem.name}</p>
    <p>{elem.age}</p>
    <p>{elem.id}</p>
    <p className='py-[5px]'>{elem.status=="true"? "Online" : "Offline"}</p>
    <Button onClick={() =>deleteUser(elem.id)} type="primary" danger>
      Delete <DeleteOutlined />
    </Button>
    
  </Card>
    )
  })
}
</div>



    </div>
  );
};

export default App;
