import './Inputs.css';

const Inputs = (props) => {
    return(
        <Inputs type = {props.type} placeholder = {props.holder} name = {props.name}></Inputs>
    );
}

export default Inputs;