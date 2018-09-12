<template>
  <div class="index">
    <!-- <button @click="toggleMenu()">mm</button> -->
        
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
      <v-chart :options="polar"/>
      </div>
    </div>
  </div>
</template>


<script>
// import ECharts from "vue-echarts/components/ECharts";
// import "echarts/lib/chart/line";
// import "echarts/lib/component/polar";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/component/tooltip";
import "echarts/lib/chart/line";
import "echarts/lib/component/polar";
export default {
  data: function() {
    // let data = [];

    // for (let i = 0; i <= 360; i++) {
    //   let t = i / 180 * Math.PI;
    //   let r = Math.sin(2 * t) * Math.cos(2 * t);
    //   data.push([r, i]);
    // }

    return {
      d_toggle: false,
      polar: {
        title: {
          text: "极坐标双数值轴"
        },
        legend: {
          data: ["line"]
        },
        polar: {
          center: ["50%", "54%"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        angleAxis: {
          type: "value",
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            // coordinateSystem: "polar",
            name: "销量",
            type: "bar",
            // showSymbol: false,
            // data: data
            data:[5,20,36,10,10,20]
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
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.echarts {
  width: 100%;
  height: 100%;
}
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
