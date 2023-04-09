import PrimaryButton from "../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../Components/SecondaryButton";
import style from "./Heading.module.css";
function Heading() {
    return (
        <div className='d-flex flex-row justify-content-between mt-5'>
            <h1 className='large-title'>Данные о компании</h1>
            <div className={style.main_container}> 
                <SecondaryButton>Закрыть запись</SecondaryButton>
            </div>
        </div>
    );
}

export default Heading;