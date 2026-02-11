/**
 * Cursor Geometry Utilities
 *
 * Shared utilities for creating cursor arrow geometries and materials.
 * Used by both the CursorBackground component and demo components.
 *
 * @module utils/cursorGeometry
 */

import * as THREE from "three";

/**
 * Enum representing the different cursor visual types
 */
export enum CursorType {
  Outline = "outline",
  Mesh = "mesh",
  Plane = "plane",
  Plain = "plain",
}

/**
 * Configuration for cursor color generation
 */
export interface CursorColorConfig {
  coloredPercent: number;
  saturationRange: { min: number; max: number };
  lightnessRange: {
    dark: { min: number; max: number };
    light: { min: number; max: number };
  };
}

/**
 * Default color configuration matching CursorBackground
 */
export const DEFAULT_COLOR_CONFIG: CursorColorConfig = {
  coloredPercent: 0.25,
  saturationRange: { min: 0.1, max: 0.3 },
  lightnessRange: {
    dark: { min: 0.3, max: 0.5 },
    light: { min: 0.15, max: 0.35 },
  },
};

/**
 * Creates a 3D arrow geometry using ExtrudeGeometry
 * Arrow points upward by default (+Y direction)
 *
 * @returns The centered 3D arrow geometry
 */
export function create3DArrowGeometry(): THREE.ExtrudeGeometry {
  const shape = new THREE.Shape();

  // Arrow head
  shape.moveTo(0, 0.2);
  shape.lineTo(-0.08, 0.05);
  shape.lineTo(-0.04, 0.05);

  // Arrow shaft
  shape.lineTo(-0.04, -0.15);
  shape.lineTo(0.04, -0.15);
  shape.lineTo(0.04, 0.05);

  // Complete head
  shape.lineTo(0.08, 0.05);
  shape.lineTo(0, 0.2);

  const extrudeSettings = {
    depth: 0.05,
    bevelEnabled: true,
    bevelThickness: 0.01,
    bevelSize: 0.01,
    bevelSegments: 2,
  };

  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geometry.center();

  return geometry;
}

/**
 * Creates a 2D arrow outline geometry using BufferGeometry
 * Used for the "plain" cursor type
 *
 * @returns The 2D arrow outline geometry
 */
export function create2DArrowOutlineGeometry(): THREE.BufferGeometry {
  const points = [];

  // Arrow head
  points.push(new THREE.Vector3(0, 0.2, 0));
  points.push(new THREE.Vector3(-0.08, 0.05, 0));
  points.push(new THREE.Vector3(-0.04, 0.05, 0));

  // Arrow shaft
  points.push(new THREE.Vector3(-0.04, -0.15, 0));
  points.push(new THREE.Vector3(0.04, -0.15, 0));
  points.push(new THREE.Vector3(0.04, 0.05, 0));

  // Complete head
  points.push(new THREE.Vector3(0.08, 0.05, 0));
  points.push(new THREE.Vector3(0, 0.2, 0));

  return new THREE.BufferGeometry().setFromPoints(points);
}

/**
 * Creates an outline material for the cursor
 * Used with EdgesGeometry for a wireframe look
 *
 * @param color - The color for the material
 * @returns LineBasicMaterial configured for outline
 */
export function createOutlineMaterial(color: THREE.Color): THREE.LineBasicMaterial {
  return new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity: 0.8,
  });
}

/**
 * Creates a wireframe material for the cursor
 * Used with MeshBasicMaterial in wireframe mode
 *
 * @param color - The color for the material
 * @returns MeshBasicMaterial configured for wireframe
 */
export function createWireframeMaterial(color: THREE.Color): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({
    color,
    wireframe: true,
    transparent: true,
    opacity: 0.7,
  });
}

/**
 * Creates a plane material for the cursor
 * Low opacity for a translucent fill effect
 *
 * @param color - The color for the material
 * @returns MeshBasicMaterial configured for plane
 */
export function createPlaneMaterial(color: THREE.Color): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: 0.3,
    side: THREE.DoubleSide,
  });
}

/**
 * Creates a plain material for the cursor
 * Used for the 2D line variant
 *
 * @param color - The color for the material
 * @returns LineBasicMaterial configured for plain lines
 */
export function createPlainMaterial(color: THREE.Color): THREE.LineBasicMaterial {
  return new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity: 0.9,
    linewidth: 2,
  });
}

/**
 * Generates a random cursor color based on theme and configuration
 *
 * @param isDark - Whether the current theme is dark
 * @param config - Color configuration options
 * @returns Object containing color components and the THREE.Color
 */
export function generateCursorColor(
  isDark: boolean,
  config: CursorColorConfig = DEFAULT_COLOR_CONFIG
): { hue: number; saturation: number; baseLightness: number; color: THREE.Color } {
  const hue = Math.random();
  const isColored = Math.random() < config.coloredPercent;
  const saturation = isColored
    ? config.saturationRange.min +
      Math.random() * (config.saturationRange.max - config.saturationRange.min)
    : 0;

  const lightnessRange = isDark
    ? config.lightnessRange.dark
    : config.lightnessRange.light;

  const baseLightness =
    lightnessRange.min +
    Math.random() * (lightnessRange.max - lightnessRange.min);

  const color = new THREE.Color().setHSL(hue, saturation, baseLightness);

  return { hue, saturation, baseLightness, color };
}

/**
 * Creates a cursor mesh based on the specified type
 *
 * @param type - The cursor type to create
 * @param color - The color for the cursor
 * @param arrow3DGeometry - Shared 3D geometry instance
 * @param arrow2DOutlineGeometry - Shared 2D geometry instance
 * @returns The created cursor mesh or line
 */
export function createCursorMesh(
  type: CursorType,
  color: THREE.Color,
  arrow3DGeometry: THREE.ExtrudeGeometry,
  arrow2DOutlineGeometry: THREE.BufferGeometry
): THREE.LineSegments | THREE.Mesh | THREE.Line {
  switch (type) {
    case CursorType.Outline: {
      const edgesGeometry = new THREE.EdgesGeometry(arrow3DGeometry);
      return new THREE.LineSegments(edgesGeometry, createOutlineMaterial(color));
    }

    case CursorType.Mesh: {
      return new THREE.Mesh(arrow3DGeometry, createWireframeMaterial(color));
    }

    case CursorType.Plane: {
      return new THREE.Mesh(arrow3DGeometry, createPlaneMaterial(color));
    }

    case CursorType.Plain: {
      return new THREE.Line(arrow2DOutlineGeometry, createPlainMaterial(color));
    }

    default:
      throw new Error(`Unknown cursor type: ${type}`);
  }
}

/**
 * Gets the cursor type based on index and counts
 *
 * @param index - The cursor index
 * @param outlineCount - Number of outline cursors
 * @param meshCount - Number of mesh cursors
 * @param planeCount - Number of plane cursors
 * @returns The CursorType for this index
 */
export function getCursorType(
  index: number,
  outlineCount: number,
  meshCount: number,
  planeCount: number
): CursorType {
  if (index < outlineCount) return CursorType.Outline;
  if (index < outlineCount + meshCount) return CursorType.Mesh;
  if (index < outlineCount + meshCount + planeCount) return CursorType.Plane;
  return CursorType.Plain;
}