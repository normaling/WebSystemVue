<template>
  <el-container align="center">
    <el-header>
      <h1>学生信息可视化</h1>
    </el-header>
    <el-main>
      <div>
        <div id="main" style="width:1300px;height:600px;"></div>
      </div>
    </el-main>
    <el-footer>
      <div class="app-container">
        <!--搜索表单-->
        <el-form :inline="true" :model="searchEmp" class="demo-form-inline">
          <el-form-item label="姓名">
            <el-input v-model="searchEmp.name" placeholder="请输入学生姓名" />
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="searchEmp.gender" placeholder="请选择">
              <el-option label="男" value="1" />
              <el-option label="女" value="2" />
            </el-select>
          </el-form-item>
          <el-form-item label="入学时间">
            <el-date-picker
              v-model="entrydate"
              clearable
              value-format="yyyy-MM-dd"
              type="daterange"
              placeholder="选择日期"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width: 400px; margin-left: 20px"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button type="info" @click="clear">清空</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import { find } from '@/api/student_rep.js'
export default {
  name: 'Index',
  data() {
    return {
      searchEmp: {
        name: '',
        gender: ''
      },
      entrydate: '',
      beginTime: '',
      endTime: '',
      Xdata: [],
      Ydata: []
    }
  },
  mounted() {
    this.onSubmit()
  },
  methods: {
    // 查询方法
    onSubmit() {
      find(
        this.searchEmp.name,
        this.searchEmp.gender,
        this.beginTime,
        this.endTime
      ).then((res) => {
        this.Xdata = res.data.data.jobType
        this.Ydata = res.data.data.count
        this.myecharts()
      })
    },
    clear() {
      this.searchEmp = { name: '', gender: '' }
      this.entrydate = ''
      this.Xdata = []
      this.Ydata = []
    },
    myecharts() {
      var myChart = this.$echarts.init(document.getElementById('main'))
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '学生信息可视化'
        },
        tooltip: {},
        legend: {
          data: ['人数']
        },
        xAxis: {
          data: this.Xdata
        },
        yAxis: {},
        series: [{
          name: '人数',
          type: 'bar',
          data: this.Ydata
        }]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>
<style>

</style>
