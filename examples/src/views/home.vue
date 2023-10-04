<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  ref,
  watch,
  onBeforeUnmount,
} from "vue";
import { genRandomTree } from "../utils";
import * as THREE from "three";
import * as dat from "dat.gui";

const graphData = ref({
  nodes: [],
  links: [],
});

export default defineComponent({
  setup() {
    const state = reactive({
      graphData: genRandomTree(),
    });
    const guiCtx = ref();
    const fg2DRef = ref();
    const threeGUIFields = reactive({
      nodeColor: "rgba(83, 168, 255, 1)",
      linkColor: "rgba(255,255,255,0.2)",
      linkOpacity: 0.2,
      backgroundColor: "#090723",
      showNavInfo: true,
      nodeRelSize: 4,
      nodeVisibility: true,
      nodeOpacity: 0.75,
      nodeResolution: 24,
      linkVisibility: true,
      linkWidth: 3,
      linkResolution: 6,
      linkCurvature: 0.0,
      linkDirectionalArrowLength: 0,
      linkDirectionalArrowRelPos: 0,
      linkDirectionalArrowResolution: 8,
      linkDirectionalArrowColor: "rgba(255,255,255,.2)",
      linkDirectionalParticles: 0,
      linkDirectionalParticleSpeed: 0.01,
      linkDirectionalParticleWidth: 0.5,
      linkDirectionalParticleColor: "#ffffff",
      linkDirectionalParticleResolution: 4,
    });
    const getLinkColor = () => {
      return "rgba(255,255,255,.2)";
    };
    const getNodeColor = () => {
      return "rgba(83, 168, 255, 1)";
    };
    const createHeartMesh = () => {
      let x = -25,
        y = -25;
      const heartShape = new THREE.Shape()
        .moveTo(x + 25, y + 25)
        .bezierCurveTo(x + 25, y + 25, x + 20, y, x, y)
        .bezierCurveTo(x - 30, y, x - 30, y + 35, x - 30, y + 35)
        .bezierCurveTo(x - 30, y + 55, x - 10, y + 77, x + 25, y + 95)
        .bezierCurveTo(x + 60, y + 77, x + 80, y + 55, x + 80, y + 35)
        .bezierCurveTo(x + 80, y + 35, x + 80, y, x + 50, y)
        .bezierCurveTo(x + 35, y, x + 25, y + 25, x + 25, y + 25);

      const extrudeSettings = {
        depth: 8,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 2,
        // bevelSize: 1,
        // bevelThickness: 1,
      };

      const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);

      const mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshPhongMaterial({
          color: "#ff0080",
        })
      );
      mesh.scale.set(0.1, 0.1, 0.1);
      mesh.rotation.x = Math.PI / 2;
      mesh.rotation.z = Math.PI / 2;
      mesh.rotation.y = Math.PI / 2;
      return mesh;
    };
    watch(
      () => [threeGUIFields],
      () => {
        const gc = fg2DRef.value?.graphContext;
        gc?.nodeColor(() => threeGUIFields.nodeColor);
        gc?.linkColor(() => threeGUIFields.linkColor);
        gc?.backgroundColor(threeGUIFields.backgroundColor);
        gc?.nodeRelSize(threeGUIFields.nodeRelSize);
        gc?.nodeVisibility(threeGUIFields.nodeVisibility);
        gc?.linkVisibility(threeGUIFields.linkVisibility);
        gc?.linkWidth(threeGUIFields.linkWidth);
        gc?.linkCurvature(threeGUIFields.linkCurvature);
        gc?.linkDirectionalArrowLength(
          threeGUIFields.linkDirectionalArrowLength
        );
        gc?.linkDirectionalArrowRelPos(
          threeGUIFields.linkDirectionalArrowRelPos
        );
        gc?.linkDirectionalArrowColor(
          () => threeGUIFields.linkDirectionalArrowColor
        );
        gc?.linkDirectionalParticles(threeGUIFields.linkDirectionalParticles);
        gc?.linkDirectionalParticleSpeed(
          threeGUIFields.linkDirectionalParticleSpeed
        );
        gc?.linkDirectionalParticleWidth(
          threeGUIFields.linkDirectionalParticleWidth
        );
        gc?.linkDirectionalParticleColor(
          () => threeGUIFields.linkDirectionalParticleColor
        );
      },
      {
        deep: true,
      }
    );
    function createGUI() {
      const gui = new dat.GUI();
      guiCtx.value = gui;
      const dom = gui.domElement;
      gui.addColor(threeGUIFields, "nodeColor");
      gui.add(threeGUIFields, "nodeVisibility");
      gui.add(threeGUIFields, "nodeRelSize", 1, 20);
      gui.addColor(threeGUIFields, "linkColor");
      gui.add(threeGUIFields, "linkOpacity", 0, 1);
      gui.add(threeGUIFields, "linkVisibility");
      gui.add(threeGUIFields, "linkWidth", 1, 20);
      gui.add(threeGUIFields, "linkCurvature", 0, 0.5);
      gui.add(threeGUIFields, "linkDirectionalArrowLength", 0, 10);
      gui.add(threeGUIFields, "linkDirectionalArrowRelPos", 0, 1);
      gui.addColor(threeGUIFields, "linkDirectionalArrowColor");
      gui.add(threeGUIFields, "linkDirectionalParticleSpeed", 0, 0.5);
      gui.add(threeGUIFields, "linkDirectionalParticles", 0, 10);
      gui.add(threeGUIFields, "linkDirectionalParticleWidth", 0.5, 10);
      gui.addColor(threeGUIFields, "linkDirectionalParticleColor");
      gui.addColor(threeGUIFields, "backgroundColor");
    }
    watch(
      //() => is3D.value,
      () => {
        if (guiCtx.value) guiCtx.value.destroy();
        createGUI();
      },
      { immediate: true }
    );
    onBeforeUnmount(() => {
      guiCtx.value.destroy();
    });
    return {
      ...toRefs(state),
      getLinkColor,
      getNodeColor,
      fg2DRef,
      //createHeartMesh,
    };
  },
});
</script>
<style scoped>
@keyframes slide-fade-in {
  from {
    transform: translateX(36px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
.toggle-btn {
  position: absolute;
  right: 32px;
  bottom: 32px;
  z-index: 9;
  width: 36px;
  height: 36px;
  background-color: #090723;
  color: #fff;
  border-radius: 50%;
  padding: 4px;
  box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.5),
    -1px -1px 5px rgba(255, 255, 255, 0.5);
  text-align: center;
  line-height: 36px;
  cursor: pointer;
  animation: slide-fade-in 1s ease-in;
  transition: all 0.25s linear;
}
</style>
<template>
  <VueForceGraph2D
    ref="fg2DRef"
    :graphData="graphData"
    backgroundColor="#090723"
    :linkColor="getLinkColor"
  ></VueForceGraph2D>
</template>