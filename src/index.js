import _ from 'lodash';
import './css/index.css';

const component = () => {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'Webpack']);
  return element;
};

document.body.appendChild(component());
