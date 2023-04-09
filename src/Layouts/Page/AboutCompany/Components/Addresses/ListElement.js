import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';
import stylt from './ListElement.module.css'

const Option = styled.div`
    outline: none;
    background-color: #fff;
    color: #000;
    width: 320px;
    margin-letf:12px;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-self-stretch gap-2'>
            <Option className='flex-grow-1 p-2'>{props.children}</Option>
            <div className={stylt.btn_border}>
                <SecondaryButton minWidth='0'><EditIcon/></SecondaryButton>
            </div>
            <div className={stylt.btn_border}>
                <SecondaryButton minWidth='0'><RemoveIcon/></SecondaryButton>
            </div>
        </div>
    );
}

export default ListElement;