import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ButtonSlider from './buttonSlider';
import ButtonSliderSecond from './buttonSliderSecond';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><ButtonSlider /> <ButtonSliderSecond/></div>, document.getElementById('root'));
registerServiceWorker();
