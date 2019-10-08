<template>
  <div>
    <img src="@/assets/images/dog.jpeg" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to"
    };
  },
  methods: {
    handleBtn() {
      let locale = this.$i18n.locale;
      locale === "zh" ? (this.$i18n.locale = "en") : (this.$i18n.locale = "zh");
      localStorage.setItem("lang", this.$i18n.locale);
    },
    getLocale() {
      if (localStorage.getItem("lang")) {
        this.$i18n.locale = localStorage.getItem("lang");
      }
    },
    getList() {
      this.axios.get("/api/getList");
    }
  },
  created() {
    this.getList();
    this.getLocale();
  }
};
</script>
