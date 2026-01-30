const Warp = window.Warp;

const svgns = "http://www.w3.org/2000/svg";
let svgGroup = document.createElementNS(svgns, 'g');

export async function warpToCurve(curve, svgModel, svgWrapper) {
  // || 1 to prevent an infinite loop
  const width = svgModel.getAttribute('width') || 1;
  const height = svgModel.getAttribute('height') || 1;

  const count = Math.ceil(curve.length / width);

  const svgs = [];
  for (let i = 0; i < count; i++) {
    const newSvg = svgModel.cloneNode(true);
    const warp = new Warp(newSvg);
    warp.interpolate(4);
    warp.transform(([x, y]) => {
      let t = (x + i * width) / curve.length;
      if (t < 0) t = 0;
      if (t > 1) t = 1;
      t = curve.normalizedTime(t);
      const point = curve.point(t);
      const normal = curve.normal(t);

      const offsetX = (normal.x * (y - height / 2));
      const offsetY = (normal.y * (y - height / 2));

      const newX = point.x + offsetX;
      const newY = point.y + offsetY;

      return [newX, newY];
    });

    svgs.push(newSvg);
  }

  while (svgGroup.hasChildNodes()) {
    svgGroup.removeChild(svgGroup.firstChild);
  }

  svgs.forEach(element => svgGroup.appendChild(element));

  if (!svgWrapper.contains(svgGroup)) {
    svgWrapper.insertBefore(svgGroup, svgWrapper.children[3]);
  }
}

