import { useRef, useContext, useLayoutEffect } from 'react'
import Button from '../UI/Button'
import style from './TodoForm.module.css'
import { RiDownloadLine } from "react-icons/ri";
import { ThemeContext } from '../../index'

export default function TodoForm({ addTodoList, string }) {

    let theme = useRef(useContext(ThemeContext));

    function changeTheme(e) {
        theme = e.target.value;
        document.documentElement.setAttribute('data-theme', theme);
    }

    const elementImput = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        addTodoList(elementImput.current.value);
        elementImput.current.value = ''
    }

    useLayoutEffect(() => {
        elementImput.current.value = string;
    }, [string])

    elementImput?.current?.focus();

    return <form
        onSubmit={onSubmit}
        className={style.form}>
        <input ref={elementImput} type="text" placeholder='Enter todo' autoFocus />
        <Button onClick={onSubmit} type='submit'><RiDownloadLine /></Button>
        <select id="lang" onChange={changeTheme}>
            <option value="dark">dark</option>
            <option value="light">light</option>
            <option value="blue">blue</option>
        </select>
    </form>
}