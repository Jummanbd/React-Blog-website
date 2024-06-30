
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import App from './App.jsx';
import './assets/css/style.css';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(

<BrowserRouter history={history}>
    <App />
</BrowserRouter>,
)
