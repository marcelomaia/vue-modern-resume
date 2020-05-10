import Vue from "vue";
import VueI18n from "vue-i18n";
import en from '../i18n/en'
import ptBr from '../i18n/ptBr'

const messages = {
  en: en,
  ptBr: ptBr
};

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "ptBr", // set locale
  messages, // set locale messages
});

export default i18n;
