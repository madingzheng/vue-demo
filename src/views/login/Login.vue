<template>
  <section id="login">
    <section class="login_form">
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          prop="user"
          :rules="[{ required: true, message: '用户名不能为空' }]"
        >
          <el-input
            type="age"
            prefix-icon="el-icon-user"
            v-model.number="numberValidateForm.user"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="pwd"
          :rules="[{ required: true, message: '密码不能为空' }]"
        >
          <el-input
            type="age"
            prefix-icon="el-icon-lock"
            v-model.number="numberValidateForm.pwd"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('numberValidateForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('numberValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      numberValidateForm: {
        user: "",
        pwd: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("submit");
          this.$axios.post("/api/login");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="less">
#login {
  height: 100%;
  background-image: url("../../assets/images/lg_bg.png");
  display: flex;
  align-items: center;
  justify-content: center;
  .login_form {
    width: 500px;
  }
}
</style>
