import App from "./app";
import style from "./main.scss";
import style2 from "./notMain.scss";


console.log(`I'm a silly entry point`);
const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;