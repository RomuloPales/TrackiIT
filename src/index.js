import react from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './globalStyle';
const root =  ReactDOM.render(<App />, document.getElementById('root'));

root.render(
        <react.StrictMode>
            <GlobalStyle />
            <App /> 
        </react.StrictMode>,
    
    );