<template>
  <div class="manage-page">
    <el-row style="height: 100%;">
      <el-col :span="5" style="min-height: 100%; background-color: #324057;">
        <el-menu :default-active="defaultActive" background-color="#324057" text-color="#bfcbd9" router>
          <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-document"></i>数据管理</template>
            <el-menu-item index="userList">用户列表</el-menu-item>
            <el-menu-item index="idenList">认证列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-star-on"></i>图表</template>
           <el-menu-item index="visitor">用户分布</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-setting"></i>设置</template>
           <el-menu-item index="adminSet">管理员设置</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="19" style="height: 100%;overflow: auto;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
.manage-page {
  width: 100%;
  height: 100%;
}
</style>
