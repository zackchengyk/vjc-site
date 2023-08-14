import { a as jsxs, j as jsx, F as Fragment } from "../chunks/chunk-ac9dafa4.js";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { useGLTF, useTexture, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import "react/jsx-runtime";
function Counter() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setCount((count2) => count2 + 1), children: [
    "Counter ",
    count
  ] });
}
const modelURL = "dioramas/models/test-scene.gltf";
const textureURL = "dioramas/textures/baked.jpg";
function Classroom(props) {
  const { nodes, materials } = useGLTF(modelURL);
  const texture = useTexture(textureURL);
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  const tm = new THREE.MeshStandardMaterial({ map: texture });
  return /* @__PURE__ */ jsxs("group", { ...props, dispose: null, children: [
    /* @__PURE__ */ jsx("mesh", { geometry: nodes.Base.geometry, material: tm }),
    /* @__PURE__ */ jsx("mesh", { geometry: nodes.Board.geometry, material: tm }),
    /* @__PURE__ */ jsx("mesh", { geometry: nodes.Cube001.geometry, material: tm }),
    /* @__PURE__ */ jsx("mesh", { geometry: nodes.Cube001_1.geometry, material: tm }),
    /* @__PURE__ */ jsx("mesh", { geometry: nodes.Cube001_2.geometry, material: tm }),
    /* @__PURE__ */ jsx("mesh", { geometry: nodes.Cube001_3.geometry, material: tm }),
    /* @__PURE__ */ jsx("mesh", { geometry: nodes.Cube001_4.geometry, material: tm }),
    /* @__PURE__ */ jsx("mesh", { geometry: nodes.Cube001_5.geometry, material: tm })
  ] });
}
useGLTF.preload(modelURL);
const Experience = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(OrbitControls, {}),
    /* @__PURE__ */ jsx("ambientLight", { intensity: 1 }),
    /* @__PURE__ */ jsx(Classroom, {})
  ] });
};
function Page() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Welcome" }),
    "This page is:",
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: "Rendered to HTML." }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Interactive. ",
        /* @__PURE__ */ jsx(Counter, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "row", gap: 20 }, children: [
      /* @__PURE__ */ jsx(Canvas, { shadows: true, orthographic: true, camera: { position: [5, 5, -5], zoom: 40 }, children: /* @__PURE__ */ jsx(Experience, {}) }),
      /* @__PURE__ */ jsx(Canvas, { shadows: true, orthographic: true, camera: { position: [5, 5, -5], zoom: 40 }, children: /* @__PURE__ */ jsx(Experience, {}) }),
      /* @__PURE__ */ jsx(Canvas, { shadows: true, orthographic: true, camera: { position: [5, 5, -5], zoom: 40 }, children: /* @__PURE__ */ jsx(Experience, {}) })
    ] })
  ] });
}
export {
  Page
};
