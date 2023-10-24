import Button from '@mui/material/Button';
import { Card , Typography} from '@mui/material';
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const CountContext = createContext();
function App() {
  const [count,setCount] = useState(0)
  return (
    <CountContext.Provider value={{
      count:count,
      setCount:setCount
    }}>
      <div style={{
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        }}>
      <Card variant="outlined" style={{
        width:'30rem',
        maxheight:'30rem',
        padding:'2rem 0',
        gap:'2rem',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
        // justifyContent:'center'
      }}>
        <Typography variant='h2' style={{fontWeight:'700'}}>Counter App</Typography>
          <Typography variant='subtitle2' style={{ fontSize: '1rem' ,fontWeight:'600'}}>Using ContextAPI</Typography>
      <Buttons />
      <CountCard />
      </Card>
      </div>
    </CountContext.Provider>
  )
}
function Buttons()
{
  return(
    <div style={{
      display: 'flex',
      // alignItems: 'center',
      justifyContent: 'space-between',
      gap:'10rem'
    }}>
      <Increase ></Increase>
      <Decrese ></Decrese>
    </div>
  )
}

function Increase() {
  const {setCount} = useContext(CountContext)
  return (
    <div>
      <Button variant='contained' size="large"
      onClick={()=>{
        setCount((existCount)=> existCount + 1)
      }}>Incremnt</Button>
    </div>
  )
}
function Decrese() {
  const {setCount} = useContext(CountContext)
  return (
    <div>
      <Button variant='contained' size="large"
        onClick={() => {
          setCount((existCount) => existCount - 1)
        }}
      >Decrement</Button>
    </div>
  )
}
function CountCard()
{
  const {count} = useContext(CountContext)
  return(
    <div>
      <Typography variant='h3' style={{fontWeight:'700'}}>{count}</Typography>
    </div>
  )
}
export default App
