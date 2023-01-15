import _ from 'lodash';
import './css/index.css';
import lol from './assets/lol.jpg';

const component = () => {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'Webpack', 'Tupack']);
  // Add the image to our existing div.
  const myImage = new Image();
  myImage.src = lol;
  document.getElementById('img').src = lol;
  element.appendChild(myImage);

  return element;
};

document.body.appendChild(component());
