import Button from '@mui/material/Button';
import { Card, Typography } from '@mui/material';
import {
    RecoilRoot,
    atom,
    useRecoilValue,
    useSetRecoilState,
} from 'recoil';

function AppRecoil() {
    return (
        <RecoilRoot>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Card variant="outlined" style={{
                    width: '30rem',
                    maxheight: '30rem',
                    padding: '2rem 0',
                    gap: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                    // justifyContent:'center'
                }}>
                    <Typography variant='h2'
                        style={{ fontWeight: '700' }}
                    >Counter App
                    </Typography>
                    <Typography variant='subtitle2' style={{ fontSize: '1rem', fontWeight: '600' }}>Using RcoilState</Typography>
                    <Buttons />
                    <CountCard />
                </Card>
            </div>
        </RecoilRoot>
    )
}
function Buttons() {
    return (
        <div style={{
            display: 'flex',
            // alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10rem'
        }}>
            <Increase ></Increase>
            <Decrese ></Decrese>
        </div>
    )
}

function Increase() {
    const setCount = useSetRecoilState(countState)
    return (
        <div>
            <Button variant='contained' size="large"
                onClick={() => {
                    setCount((existCount) => existCount + 1)
                }}>Incremnt</Button>
        </div>
    )
}
function Decrese() {
    const setCount = useSetRecoilState(countState)
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
function CountCard() {
    let count = useRecoilValue(countState)
    return (
        <div>
            <Typography variant='h3' style={{ fontWeight: '700' }}>{count}</Typography>
        </div>
    )
}
export default AppRecoil
const countState = atom({
    key: 'countState', // unique ID (with respect to other atoms/selectors)
    default: '0', // default value (aka initial value)
});