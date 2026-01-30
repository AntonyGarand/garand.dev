import bezier, { Vector } from '../bezier.js';
const PROGRESS_POINT_COUNT = 10;
const PROGRESS_POINT_DISTANCE = 1 / PROGRESS_POINT_COUNT;
const LINE_LENGTH = 20;

const svgns = "http://www.w3.org/2000/svg";
const model = document.createElementNS(svgns, 'line');
model.setAttribute('stroke', '#f00');
model.setAttribute('stroke-width', '1');

export const drawNormals = (curve, svgGroup) => {
  removeNormals(svgGroup);

  for (let i = 0; i <= PROGRESS_POINT_COUNT; i++) {
    const instance = model.cloneNode();
    const t = i * PROGRESS_POINT_DISTANCE;

    const position = curve.point(t);
    const normal = curve.normal(t);
    const positionEnd = position.add(normal.multiply(LINE_LENGTH));

    instance.setAttribute('x1', position.x);
    instance.setAttribute('x2', positionEnd.x);
    instance.setAttribute('y1', position.y);
    instance.setAttribute('y2', positionEnd.y);

    svgGroup.appendChild(instance);
  }
};

export const removeNormals = (svgGroup) => {
  while (svgGroup.children.length) {
    svgGroup.removeChild(svgGroup.children[0]);
  }
};

