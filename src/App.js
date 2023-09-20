import { useState, useRef, useEffect } from 'react'
import { RiDeleteBinLine, RiRefreshLine, RiCheckboxMultipleLine, RiCheckboxMultipleBlankLine } from "react-icons/ri";
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import style from './App.module.css'
import Button from './components/UI/Button';

export default function App() {

    const string = useRef('');
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')) || []);

    const addTodoList = (elem) => {
        // elem.preventDefault();
        setTodoList([...todoList, {text: elem, isComplite: false}]);
        string.current='';
    };

    const delElement = (index) => () => {
        setTodoList(todoList.filter((_, ind) => ind !== index))
    }

    const complite = (index) => () => {
        const arr = todoList.map((element, ind)=>{
            return ind !== index ?  element : {...element, isComplite: !element.isComplite}
        });
        setTodoList(arr);
    }

    const delComlite = () => {
        const arr = todoList.filter((element) => element.isComplite === false);
        setTodoList(arr);
    }

    const editElement = (index) => {
        string.current = todoList[index].text;
        delElement(index)();
    }

    function setAllComplite() {
        const arr = todoList.map((element) => {
            return {element, isComplite: true}
        })
        setTodoList(arr)
    }
    
    function setAllNoComplite() {
        const arr = todoList.map((element) => {
            return {element, isComplite: false}
        })
        setTodoList(arr)
    }
    
    function complitedTodoExist() {
        return !todoList.some((e) => {
            return e.isComplite === true
        });
    }
    
    function complitedTodoNoExist() {
        return !todoList.some((e) => {
            return e.isComplite === false
        });
    }

    useEffect(() => {
        localStorage.setItem('todoList',  JSON.stringify(todoList));
    }, [todoList]);

    return (
        <div className={style.app}>
            <div className={style.form}>
                <h1>Todo App</h1>
                <TodoForm addTodoList={addTodoList} string={string.current} />
                <Button title='Delete completed tasks' onClick={delComlite} disabled={complitedTodoExist()}><RiRefreshLine/></Button>
                <Button title='Clear all entries' onClick={()=>setTodoList([])} disabled={!todoList.length}><RiDeleteBinLine/></Button>
                <Button title='Mark all as not completed' onClick={setAllNoComplite} disabled={complitedTodoExist()}><RiCheckboxMultipleBlankLine/></Button>
                <Button title='Mark all as completed' onClick={setAllComplite} disabled={complitedTodoNoExist()}><RiCheckboxMultipleLine/></Button>
            </div>
            <div className={style.list}>
                <TodoList todoList={todoList} delElement={delElement} editElement={editElement} complite={complite}/>
            </div>
        </div>
    )
}
