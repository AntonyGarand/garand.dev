import Bezier, {Vector} from './bezier.js';
import {drawProgress, drawDerivatives, drawNormals, warpToCurve} from './visuals/index.js'

const $ = document.querySelectorAll.bind(document);
const $$ = document.querySelector.bind(document);
const wrapper = $$('#canvas');
const pathElement = $$('#bezier-curve');
const points = $('.point-wrapper');
const progressGroup = $$('#progress');
const derivativeGroup = $$('#derivatives');
const normalGroup = $$('#normals');

const patternsRadioButton = $('input[type=radio][name=currentSVG]');
let currentPattern = $$('input[type=radio][name=currentSVG]:checked + svg');

const uploadSVGInput = $$('#uploadValue');
const uploadSVGWrapper = $$('#uploadedSVGWrapper');

const p0toP1 = $$('#p0-to-p1');
const p2toP3 = $$('#p2-to-p3');

const curve = new Bezier(
  new Vector(100, 100),
  new Vector(300, 100),
  new Vector(100, 300),
  new Vector(300, 300),
);

const redrawCurve = () => {
  pathElement.setAttribute('d', curve.pathString());

  // Redraw lines between 0-1 and 2-3
  p0toP1.setAttribute('x1', curve.p0.x);
  p0toP1.setAttribute('y1', curve.p0.y);
  p0toP1.setAttribute('x2', curve.p1.x);
  p0toP1.setAttribute('y2', curve.p1.y);

  p2toP3.setAttribute('x1', curve.p2.x);
  p2toP3.setAttribute('y1', curve.p2.y);
  p2toP3.setAttribute('x2', curve.p3.x);
  p2toP3.setAttribute('y2', curve.p3.y);

  // Reposition control points
  for (let i = 0; i < 4; i++) {
    const pointGroup = points[i];
    const pointVector = curve[`p${i}`];
    pointGroup.setAttribute('transform', `translate(${pointVector.x},${pointVector.y})`);
  }

  // Draw visual elements
  drawProgress(curve, progressGroup);
  drawDerivatives(curve, derivativeGroup);
  drawNormals(curve, normalGroup);
  warpToCurve(curve, currentPattern, wrapper);
};

let draggedElementIndex = -1;
let draggedElementPositionOffset = [0, 0];
points.forEach((point, index) => {
  point.addEventListener('mousedown', ({clientX, clientY}) => {
    const currentPosition = curve[`p${index}`];
    draggedElementPositionOffset = [currentPosition.x - clientX, currentPosition.y - clientY];
    draggedElementIndex = index;
  });
});

wrapper.addEventListener('mousemove', ({clientX, clientY}) => {
  if (draggedElementIndex !== -1) {
    // Find the new position
    const newX = clientX + draggedElementPositionOffset[0];
    const newY = clientY + draggedElementPositionOffset[1];

    // Update the point position
    const point = curve[`p${draggedElementIndex}`];
    point.x = newX;
    point.y = newY;

    curve.updateLength();

    // Re-draw the curve
    redrawCurve();
  }
});

wrapper.addEventListener('mouseleave', () => {
  draggedElementIndex = -1;
});
wrapper.addEventListener('mouseup', () => {
  draggedElementIndex = -1;
});

patternsRadioButton.forEach(input => {
  input.addEventListener('click', (v) => {
    currentPattern = $$('input[type=radio][name=currentSVG]:checked + svg');
    redrawCurve();
  });
});

uploadSVGInput.addEventListener('change', event => {
  const selectedFile = uploadSVGInput.files[0];
  setUploadedImage(selectedFile);
});

function setUploadedImage(file) {
  if (file.type && file.type.indexOf('image') === -1) {
    console.log('File is not an image.', file.type, file);
    return;
  }

  const reader = new FileReader();
  reader.addEventListener('load', (event) => {
    uploadSVGWrapper.innerHTML = event.target.result;
    const newSVG = uploadSVGWrapper.children[0];
    newSVG.setAttribute('style','overflow: visible');
    currentPattern = newSVG;
    redrawCurve();
  });
  reader.readAsText(file);
}

redrawCurve();


