<template>
  <layout-golden class="screen">
    <gl-col>
      <gl-component title="compA" :height="height">
        <h1>CompA</h1>
      </gl-component>
      <gl-component title="compB" :height="height">
        <h1>CompB</h1>
      </gl-component>
      <gl-stack>
        <gl-component title="compC" :height="height">
          <h1>CompC</h1>
        </gl-component>
      </gl-stack>
    </gl-col>
  </layout-golden>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      height: 10
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.screen {
	width: 100vw;
	height: 100vh;
}
body {
  margin: 0px;
}
</style>
