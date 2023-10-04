<template>
  <VueForceGraph2D :graphData="graphData">
    <VueForceGraphContextMenu v-slot="data" bindType="canvas">
      <ul>
        <li @click="actionHandle(data)">hello</li>
      </ul>
    </VueForceGraphContextMenu>
    <VueForceGraphContextMenu bindType="node">
      <VueForceGraphMenuItem :data="menuData" @change="menuChange">hello</VueForceGraphMenuItem>
    </VueForceGraphContextMenu>
    <VueForceGraphContextMenu v-slot="data" bindType="edge">
      <div @click="deleteItem(data)">sfsf</div>
    </VueForceGraphContextMenu>
  </VueForceGraph2D>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
function genRandomTree(N = 300, reverse = false) {
  return {
    nodes: [...Array(N).keys()].map((i) => ({ id: i })),
    links: [...Array(N).keys()]
      .filter((id) => id)
      .map((id) => ({
        [reverse ? "target" : "source"]: id,
        [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1)),
      })),
  };
}
export default defineComponent({
  setup() {
    const state = reactive({
      graphData: genRandomTree(40),
      menuData: [
        {
          id: "delete",
          label: "删除",
        },
        {
          id: 1,
          label: "hhh",
        },
      ],
    });
    const deleteItem = (data) => {
      console.log(data);
    };
    const menuChange = (data) => {
      console.log(data);
      const { activeData, menuItem } = data;
      switch (menuItem.id) {
        case "delete":
          const newNodes = state.graphData.nodes.filter(
            (node) => node.id !== activeData.id
          );
          const newEdges = state.graphData.links.filter(
            (link) =>
              !(
                (link.target as any).id === activeData.id ||
                (link.source as any).id === activeData.id
              )
          );
          console.log(state.graphData);
          state.graphData = {
            nodes: newNodes,
            links: newEdges,
          };
      }
    };
    const actionHandle = (data) => {
      console.log(data);
    };
    const getNodeColor = (node) => {
      return "rgb(178, 255, 221)";
    };
    const getLinkColor = (link) => {
      return "rgb(178, 255, 221)";
    };
    return {
      ...toRefs(state),
      deleteItem,
      menuChange,
      actionHandle,
      getNodeColor,
      getLinkColor,
    };
  },
});
</script>
<style>
#app,
body,
html {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
</style>
