import Vue from "vue";
import I18n from "vue-i18n";
import zh from "./zh";
import en from "./en";
import tw from "./tw";
import iviewEn from "view-design/dist/locale/en-US";
import iviewZh from "view-design/dist/locale/zh-CN";
import iviewTW from "view-design/dist/locale/zh-TW";


Vue.use(I18n);
const messages = {
  en: Object.assign(en, iviewEn),
  zh: Object.assign(zh, iviewZh),
  tw: Object.assign(tw, iviewTW),
};

function getLocal() {
  let lang = "zh";
  Vue.env && Vue.env.language ? lang = Vue.env.language : lang
  return lang;
}

const i18n = new I18n({
  locale: getLocal(),
  messages,
});

export default i18n;
