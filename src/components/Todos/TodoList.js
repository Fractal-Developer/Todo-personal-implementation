import { RiDraftLine, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import style from './TodoList.module.css';
export default function TodoList({ todoList, delElement, editElement, complite }) {
    return !todoList.length ? <p>The list is empty...</p> : todoList.map((listElement, index) => {
        return <div key={index} className={`${style.element} ${listElement.isComplite ? style.noActive : ''}`}>
            <RiDraftLine display={listElement.isComplite?'none':''} className={style.icon} onClick={()=>{editElement(index)}} />
            <p className={style.pp}>{listElement.text}</p>
            <RiDeleteBin2Line className={`${style.icon} ${style.iconDel}`} onClick={delElement(index)} />
            <FaCheckCircle className={`${style.icon} ${style.iconCompl}`} onClick={complite(index)} />
        </div>
    })
}