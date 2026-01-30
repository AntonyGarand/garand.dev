export class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  multiply(scalar) {
    return new Vector(this.x * scalar, this.y * scalar);
  }

  divide(scalar) {
    return new Vector(this.x / scalar, this.y / scalar);
  }

  add(otherVector) {
    return new Vector(this.x + otherVector.x, this.y + otherVector.y);
  }

  subtract(otherVector) {
    return new Vector(this.x - otherVector.x, this.y - otherVector.y);
  }

  normalize() {
    const scale = Math.sqrt(this.x ** 2 + this.y ** 2);
    return this.divide(scale);
  }

  distance(other) {
    if (this.equals(other)) {
      return 0;
    }
    return Math.sqrt(
      Math.abs(this.x - other.x) ** 2 + Math.abs(this.y - other.y) ** 2
    );
  }

  equals(other) {
    return this.x === other.x && this.y === other.y;
  }
}

export default class Bezier {
  constructor(p0, p1, p2, p3) {
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;

    this.steps = 500;
    this.updateLength();
  }

  updateLength(){
    let length = 0;
    const steps = this.steps;
    const stepSize = 1 / steps;

    let lastPoint = this.p0;

    this.points = [{time: 0, distance: 0}];
    for (let i = 1; i <= steps; i++) {
      const time = stepSize * i;
      const currentPoint = this.point(time);
      length += currentPoint.distance(lastPoint);
      this.points.push({ time, distance: length });
      lastPoint = currentPoint;
    }
    this.length = length;
  }

  point(time) {
    const x = this.x(time);
    const y = this.y(time);
    return new Vector(x, y);
  }

  nPoint(time) {
    const nTime = this.normalizedTime(time);
    return this.point(nTime);
  }

  normalizedTime(time) {
    if(time === 1 || time === 0){
      return time;
    }
    // Time is the same as progress percent, as it's clamped between 0 and 1
    const objective = time * this.length;
    let travelledDistance = 0;
    for(var i = 0; i < this.points.length-1 && travelledDistance < objective; i++){
      travelledDistance = this.points[i].distance;
    }
    const point = this.points[i-1];
    const nextPoint = this.points[i];

    const remainder = objective - point.distance;
    const between = nextPoint.distance - point.distance;

    const baseTime = 1 / this.steps * i;
    const progress = baseTime + remainder / between * (1 / this.steps);

    return progress;
  }

  x(time) {
    return this.value(time, "x");
  }

  y(time) {
    return this.value(time, "y");
  }

  nx(time) {
    return x(this.normalizedTime(time));
  }

  ny(time) {
    return y(this.normalizedTime(time));
  }

  /*
   * Parametric function of a cubic bézier curve
   * Applied on the [variable] axis, which is 'x' or 'y'
   */
  value(time, variable) {
    const oppTime = 1 - time;

    return (
      this.p0[variable] * oppTime ** 3 +
      this.p1[variable] * 3 * oppTime ** 2 * time +
      this.p2[variable] * 3 * oppTime * time ** 2 +
      this.p3[variable] * time ** 3
    );
  }

  derivative(time) {
    // -3(1-t)^2 * P0 +
    // 3(1-t)^2 * P1 - 6t(1-t) * P1 +
    // - 3t^2 * P2 + 6t(1-t) * P2 +
    // 3t^2 * P3

    const timePow2 = time ** 2;
    const oppTime = 1 - time;
    const oppTimePow2 = oppTime ** 2;

    const p0Result = this.p0.multiply(-3 * oppTimePow2);
    const p1Result = this.p1
      .multiply(3 * oppTimePow2)
      .subtract(this.p1.multiply(6 * time * oppTime));
    const p2Result = this.p2
      .multiply(-3 * timePow2)
      .add(this.p2.multiply(6 * time * oppTime));
    const p3Result = this.p3.multiply(3 * timePow2);

    return p0Result
      .add(p1Result)
      .add(p2Result)
      .add(p3Result)
      .normalize();
  }

  normal(time) {
    const derivative = this.derivative(time);
    return new Vector(derivative.y, -derivative.x);
  }

  pathString() {
    return `M${this.p0.x},${this.p0.y} C${this.p1.x},${this.p1.y} ${
      this.p2.x
    },${this.p2.y} ${this.p3.x},${this.p3.y}`;
  }
}
