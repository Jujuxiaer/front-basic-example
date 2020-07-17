<template>
  <div id="cotainer mt-5">
    <div class="row">
      <div class="col form-inline">
        <b-form-input v-model="newTask" required placeholder="回车添加任务" @keyup.enter="add"></b-form-input>
        <b-button @click="add" variant="primary" class="ml-3">添加</b-button>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-3">
        <div class="p-2 alert alert-secondary">
          <h3>项目名称</h3>
          <draggable class="list-group ms-column" group="tasks" :list="logs">
            <div class="list-group-item" v-for="(element, index) in logs" :key="index">{{element.name}}</div>
          </draggable>
        </div>
      </div>
      <div class="col-3">
        <div class="p-2 alert alert-primary">
          <h3>项目进度</h3>
          <draggable class="list-group ms-column" group="tasks" :list="progress">
            <div class="list-group-item" v-for="(element, index) in progress" :key="index">{{element.name}}</div>
          </draggable>
        </div>
      </div>
      <div class="col-3">
        <div class="p-2 alert alert-warning">
          <h3>项目测试</h3>
          <draggable class="list-group ms-column" group="tasks" :list="test">
            <div class="list-group-item" v-for="(element, index) in test" :key="index">{{element.name}}</div>
          </draggable>
        </div>
      </div>
      <div class="col-3">
        <div class="p-2 alert alert-success">
          <h3>项目上线</h3>
          <draggable class="list-group ms-column" group="tasks" :list="done">
            <div class="list-group-item" v-for="(element, index) in done" :key="index">{{element.name}}</div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    name: 'App',
    data() {
      return {
        newTask: "",
        logs: [
          {name: "vue-draggable-demo"},
          {name: "拖拽功能"},
          {name: "测试功能"},
          {name: "打包上线"},
        ],
        progress: [],
        test: [],
        done: []
      }
    },
    methods: {
      add() {
        if (this.newTask) {
          this.logs.push({name: this.newTask});
          this.newTask = "";
        }
      }
    },
    components: {
      draggable
    }
  }
</script>

<style>
  .ms-column {
    min-height: 300px;
  }
</style>
