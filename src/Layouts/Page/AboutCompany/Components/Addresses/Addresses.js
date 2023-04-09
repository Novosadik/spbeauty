import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
import style from './Addresses.module.css';
function Addresses() {
    return (
        <div className={`d-inline-flex gap-2 mt-4 ${style.main_container}`}>
            
            <div className='d-inline-flex flex-column gap-3'>
                <div className='title d-inline-flex' style={{marginLeft: 8}}> Адреса заведений</div>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                <div style={{marginTop: 183}}>
                    <SecondaryButton>Добавить филиал</SecondaryButton>
                </div>
                
            </div>
        </div>
    );
}

export default Addresses;