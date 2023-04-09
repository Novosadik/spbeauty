import styled from "styled-components";
import style from './TitledTextInput.module.css'

const Input = styled.input`
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    align-self: stretch;
    color: #0F172A;
    font-size: 15px;
    line-height: 18px;
    &:hover {
        background-color: #F8FAFC;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div className={` ${style.text_color}`}>{title}</div>);
    return (
        <div className={`d-flex flex-column ${style.container_input}`}>
            {Title}
            <Input className='p-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;