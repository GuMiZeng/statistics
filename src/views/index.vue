<template>
  <div class="index">
    <h1 class="header">分析平台</h1>
    <div class="content">
      <div class="left" :span="d_toggle ? 1 : 4">
      <p class="toggle" @click="toggleMenu()"><Icon size="30" type="ios-menu" /></p>
        <Menu class="menu" width="auto" active-name="1">
          <MenuItem name="1">
            <Icon :size="d_toggle ? 30 : 16" type="md-document" />
            <span v-if="!d_toggle">文章管理</span>
          </MenuItem>
          <MenuItem name="2">
            <Icon :size="d_toggle ? 30 : 16" type="md-chatbubbles" />
            <span v-if="!d_toggle">文章管理</span>
          </MenuItem>
          <MenuItem name="3">
            <Icon :size="d_toggle ? 30 : 16" type="md-heart" />
            <span v-if="!d_toggle">文章管理</span>
          </MenuItem>
        </Menu>
      </div>
      <div class="right">
      <v-chart :options="data" :auto-resize="true" @dblclick="dblclick"/>
      </div>
    </div>
  </div>
</template>


<script>
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
import "echarts/lib/chart/line";
import "echarts/lib/component/polar";
export default {
  data: function() {
    return {
      d_toggle: false,
      data: {
        // title:'linear',
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "mm",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 1220]
          }
        ],
        animationDuration: 2000
      }
    };
  },
  methods: {
    toggleMenu() {
      console.log(this.d_toggle);
      this.d_toggle = !this.d_toggle;
    },
    dblclick(_params){
      console.log(_params)
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .echarts {
//   width: 50vw;
//   height: 50vh;
// }
.header {
  height: 80px;
  line-height: 80px;
  box-shadow: 0 10px 10px #f8f8f8;
  text-align: center;
  font-size: 30px;
}
.content {
  display: flex;
}
.left {
  position: relative;
  min-width: 60px;
  border-right: 1px #d7dde4 solid;
  // &:before {
  //   content: "";
  //   display: block;
  //   width: 1px;
  //   background: #d7dde4;
  //   position: absolute;
  //   top: 0;
  //   bottom: 0;
  //   left: -1px;
  // }
  .toggle {
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
  }
  .menu {
    // position: sticky;
    font-size: 16px;
  }
}
.right {
  min-height: calc(100vh - 80px);
  padding: 2% 0 2% 2%;
  // &:after {
  //   content: "";
  //   display: block;
  //   width: 1px;
  //   background: #d7dde4;
  //   position: absolute;
  //   top: 0;
  //   bottom: 0;
  //   left: -1px;
  // }
}
</style>
