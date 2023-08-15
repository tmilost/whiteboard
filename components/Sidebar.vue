<script setup>
function onDragStart(event, nodeType) {
  if (event.dataTransfer) {
    event.dataTransfer.setData('application/vueflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }
}
</script>

<template>
  <aside>
    <div class="description">You can drag these nodes to the pane.</div>

    <div class="nodes">
      <div class="vue-flow__node-input" :draggable="true" @dragstart="onDragStart($event, 'input')">Input Node</div>

      <div class="vue-flow__node-default" :draggable="true" @dragstart="onDragStart($event, 'default')">Default Node</div>

      <div class="vue-flow__node-output" :draggable="true" @dragstart="onDragStart($event, 'output')">Output Node</div>


      <div :draggable="true" @dragstart="onDragStart($event, 'triangle')">
        <div class="triangle-sidebar">
          <p>Triangle</p>
        </div>
      </div>

      <div class="vue-flow__node-output" :draggable="true" @dragstart="onDragStart($event, 'default')">
        <div class="slack-logo"><img src="../public/Slack-Logo.png" alt="slack logo"></div>
      </div>

    </div>
  </aside>
</template>

<style lang="scss">
.triangle-sidebar {
  margin-top: 1.2px;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid var(--vf-node-bg);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: none;
  margin: auto;

  p {
    margin-top: 29px;
    color: black;
  }
}

.slack-logo {

  img {
    width: 50px;
  }
}
</style>
