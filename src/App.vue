<template>
  <div id="app">
    <router-view/>
     <el-backtop :bottom="100">
      <div
        style="{
          height: 100%;
          width: 100%;
          background-color: #f2f5f6;
          box-shadow: 0 0 6px rgba(0,0,0, .12);
          text-align: center;
          line-height: 40px;
          color: #1989fa;
        }"
      >
      UP   
      </div>
  </el-backtop>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  padding:0px;
  margin:0px;
}
body,html,div{ padding:0; margin:0;}

/* a标签单击前的效果 */
a {
    color:white;
    text-decoration: none;
}
/* a标签单击后的效果 */
.router-link-active {
    text-decoration: blueviolet;
}
.el-header {
    background-color: #B3C0D1;
    color: white;
    background:#67022b none repeat center center;
    line-height: 60px;
    text-align: left;
    width:100%;
    position:fixed;
    z-index: 2;
  }
   .el-footer {
    /* background-color: #B3C0D1; */
    color:#67022b;;
    text-align: center;
    line-height: 50px;
    width:100%;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /* line-height: 200px; */
  }
  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    /* line-height: 60px; */
    /* min-height: calc(100vh - 210px); */
    padding:70px 0px;
    z-index: 1;
  }
  body,html,div{ padding:0; margin:0;}
  body > .el-container {
    font-family: 微軟正黑體;
    margin:0px;
    padding:0px;
  }
  .el-carousel__item img {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height:400px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

</style>
