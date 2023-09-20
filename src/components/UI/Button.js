import style from './Button.module.css'

export default function Button(props) {
    const {onClick, title, disabled=false, type='button'} = props;
    return <button className={style.button} title={title} onClick={onClick} type={type} disabled={disabled}>
        {props.children}</button>
}