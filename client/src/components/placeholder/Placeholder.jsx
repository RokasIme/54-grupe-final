import style from "./Placeholder.module.css";

export function Placeholder({ text }) {
  return <div className={style.placeholder}> {text}</div>;
}
