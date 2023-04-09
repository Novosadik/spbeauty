import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
import style from "./AboutCompany.module.css";
function AboutCompany() {
    return (
        <div className={style.main_container}>
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='d-flex mt-5 display-space'>
                <General/>  {/* Основная информация вроде названия, типа и телефона */}
                <Addresses/> {/* Список доступных адресов заведений */}
            </div>
        </div>
    );
}

export default AboutCompany;