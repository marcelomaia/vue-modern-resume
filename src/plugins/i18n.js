import Vue from "vue";
import VueI18n from "vue-i18n";

const messages = {
  en: {
    message: {
      hello: "hello world",
    },
    contato: {
      email: "contact@marcelomaia.tech",
      habitacao: "Habitation",
    },
    linguas:{
      portugues: 'Portuguese',
      ingles: 'English'
    }
  },
  ptBr: {
    contato: {
      email: "contato@marcelomaia.tech",
      habitacao: "Habitação",
    },
    hobbies:{
      cozinhar: 'cozinhar'
    },
    principal:{
      titulo: 'Quem sou eu?',
      descricao: ' Desenvolvedor experiente com nove anos de atuação em TI, grande capacidade analítica e visão de negócio. Conhecimentos diversificados em Backend, Frontend e DevOps. Sempre trabalhou em contato com clientes e tem ótima capacidade de trabalhar de forma colaborativa. '
    },
    linguas:{
      portugues: 'Português',
      ingles: 'Inglês'
    },
    educacao:{
      titulo: 'Educação'
    },
    habilidades:{
      titulo: 'Habilidades'
    }
  },
};

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "ptBr", // set locale
  messages, // set locale messages
});

export default i18n;
