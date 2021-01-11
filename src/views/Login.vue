<template>
  <div class="login">
    <div class="language" @click="changeLanguage()">
      <div class="langtxt">{{ nowLanguage }}</div>
      <img src="@images/upload/downn.png" class="downimg" />
    </div>
    <img src="@images/upload/logo.png" class="logo" />

    <div class="content">
      <img src="@images/upload/loginicon.png" class="image" />
      <div class="right">
        <div class="title">{{ $t("ivcs.systemtitle") }}</div>
        <div class="subtitle">{{ $t("ivcs.welcome") }}</div>
        <Input
          class="input"
          style="margin-top: 10px"
          :placeholder="nameplacehold"
          v-model="name"
          @keyup.enter.native="LoginSystem"
        />
        <Input
          class="input"
          style="margin-top: 10px"
          :placeholder="pwdplacehold"
          v-model="pwd"
          type="password"
          @keyup.enter.native="LoginSystem"
        />
        <Input
          class="input"
          style="margin-top: 10px"
          :placeholder="orgplacehold"
          v-model="org"
          @keyup.enter.native="LoginSystem"
        />
        <div class="btn" @click="LoginSystem">{{ $t("ivcs.login") }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// import Language from "./Toast/Language";
// import { responseError, cacheLoginData } from "../api/api";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      name: null,
      pwd: null,
      org: null,
      sessionId: null,
      nowLanguage: this.$store.state.languages.language,
    };
  },

  computed: {
    nameplacehold() {
      if (this.name) {
        return "";
      }
      return this.$t("ivcs.plname");
    },

    pwdplacehold() {
      if (this.pwd) {
        return "";
      }
      return this.$t("ivcs.plpwd");
    },

    orgplacehold() {
      if (this.org) {
        return "";
      }
      return this.$t("ivcs.plorg");
    },
  },

  mounted() {},

  methods: {
    ...mapMutations(["SET_LANG", "SET_LANGUAGE"]),
    /*切换语言*/
    changeLanguage() {
      var self = this;
      this.$Modal.success({
        title: "",
        render: (h) => {
          return h(Language, {
            ref: "Language",
          });
        },
        width: 600,
        closable: false,
        okText: "OK",
        cancelText: "cancel",
        onOk() {
          console.log(this.$refs.Language.language);
          if (this.$refs.Language.language === "简体中文") {
            self.SET_LANG("zh");
            self.SET_LANGUAGE("简体中文");
          } else if (this.$refs.Language.language === "繁体中文") {
            self.SET_LANG("tw");
            self.SET_LANGUAGE("繁体中文");
          }
          self.$i18n.locale = self.$store.state.languages.lang;
          self.nowLanguage = self.$store.state.languages.language;
        },
        onCancel() {},
      });
    },

    LoginSystem() {
      if (this.name == null || this.name === "") {
        this.$Message.info(this.$t("ivcs.plname"));
        return;
      } else if (this.pwd == null || this.pwd === "") {
        this.$Message.info(this.$t("ivcs.plpwd"));
        return;
      } else if (this.org == null || this.org === "") {
        this.$Message.info(this.$t("ivcs.plorg"));
        return;
      }
      this.$Spin.show();
      ivcs.agent.init(
        loginUrl,
        this.name,
        this.pwd,
        this.org,
        defaultMediaOptions,
        async (resp) => {
          this.$Spin.hide();
          console.log("init success", resp);
          let length = resp.groupsList.length;
          if (length === 0) {
            this.$Message.info({
              content: this.$t("ivcs.noGroups"),
              duration: 3,
            });
          } else {
            cacheLoginData(resp);
            this.cacheGroupList(resp.groupsList);
            this.$router.push("/agent");
            // try {
            //     let loginAms = await this.agentLoginAms();
            //     this.chooseGroup(resp.groupsList);
            //     cacheLoginData(resp);
            // }catch (e) {
            //     console.log('error',e);
            // }
          }
          // let groupNames = '';
          // for (let i = 0; i < length; i++) {
          //     let groups = resp.groupsList[i];
          //     groupNames = groupNames + groups.name;
          //     if (i != length - 1) {
          //         groupNames = groupNames + ',';
          //     }
          // }
        },
        (error) => {
          console.log(error);
          this.$Spin.hide();
          this.$Message.error(error.message);
        }
      );
    },

    cacheGroupList(groups) {
      let groupsList = [];
      groups.forEach((item) => {
        groupsList.push({
          name: item.name,
          id: item._id,
        });
      });
      sessionStorage.setItem("groupsList", JSON.stringify(groupsList));
    },
  },
};
</script>

<style scoped>
.login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00ff00;
  /* background: url("@images/uplaod/background.png"); */
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  left: 30px;
  top: 30px;
  width: 144px;
  height: 30px;
  position: absolute;
}

.content {
  width: 580px;
  height: 333px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 2px 7px 115px 10px rgba(47, 112, 158, 0.4);
  border-radius: 13px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.image {
  width: 239px;
  height: 192px;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 50px;
}

.title {
  width: 270px;
  height: 29px;
  font-size: 15px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: rgba(79, 79, 79, 1);
  /*line-height:24px;*/
  text-align: left;
}

.subtitle {
  width: 270px;
  height: 18px;
  font-size: 9px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(194, 192, 192, 1);
  line-height: 18px;
  text-align: left;
  margin-top: 20px;
}

.input {
  width: 250px;
  background: rgba(246, 246, 246, 1);
  border-radius: 3px;
}

.btn {
  width: 250px;
  height: 35px;
  background: rgba(44, 137, 234, 1);
  border-radius: 16px;
  margin-top: 40px;
  font-size: 14px;
  font-family: Source Han Sans CN, serif;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 35px;
  cursor: pointer;
}

.language {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 200px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.langtxt {
  width: 95px;
  height: 40px;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
  text-align: right;
  margin-right: 3px;
}

.downimg {
  width: 10px;
  height: 8px;
}
</style>


