const PROGRESS_POINT_COUNT = 10;
const PROGRESS_POINT_DISTANCE = 1 / PROGRESS_POINT_COUNT;

const svgns = "http://www.w3.org/2000/svg";
const model = document.createElementNS(svgns, 'circle');
model.setAttribute('fill', '#f00');
model.setAttribute('r', '4');

export const drawProgress = (curve, svgGroup) => {
  removeProgress(svgGroup);

  for (let i = 0; i <= PROGRESS_POINT_COUNT; i++) {
    const instance = model.cloneNode();
    const t = i * PROGRESS_POINT_DISTANCE;

    instance.setAttribute('cx', curve.x(t));
    instance.setAttribute('cy', curve.y(t));
    svgGroup.appendChild(instance);
  }
};

export const removeProgress = (svgGroup) => {
  while (svgGroup.children.length) {
    svgGroup.removeChild(svgGroup.children[0]);
  }
};

