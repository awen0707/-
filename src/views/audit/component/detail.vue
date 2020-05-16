<template>
  <span style="padding: 0 10px">
    <el-dialog :title="title" :visible.sync="visible" :modal="false">
      <el-form
        :model="formData"
        label-position="center"
        label-width="100px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="讲解名称">
          <el-input v-model="formData.name" disabled />
        </el-form-item>
        <el-form-item label="讲解人">
          <el-input v-model="formData.account" disabled />
        </el-form-item>
        <el-form-item label="博物馆地址">
          <el-input v-model="formData.password" disabled />
        </el-form-item>
        <el-form-item label="讲解时间">
          <el-input v-model="formData.phone" disabled />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="formData.phone" disabled />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="visible = false">
          关闭
        </el-button>
      </div>
    </el-dialog>
    <span @click="visible = true">
      <slot />
    </span>
  </span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      visible: false,
      formData: {}
    }
  },
  created() {
    this.formData = Object.assign({}, this.data)
  }
}
</script>

<style lang="scss" scoped>
</style>
