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
    linguas: {
      portugues: "Portuguese",
      ingles: "English",
    },
  },
  ptBr: {
    contato: {
      email: "contato@marcelomaia.tech",
      habitacao: "Habitação",
    },
    hobbies: {
      cozinhar: "cozinhar",
      leitura: "leitura",
      musica: 'musica',
      exercicios: 'exercicios',
      aprender: 'aprender',
      ciclismo: 'ciclismo',
      natureza:'natureza',
      ensinar: 'ensinar'
      
    },
    principal: {
      titulo: "Quem sou eu?",
      descricao:
        "Desenvolvedor experiente com nove anos de atuação em TI, grande capacidade analítica e visão de negócio. Conhecimentos diversificados em Backend, Frontend e DevOps. Sempre trabalhou em contato com clientes e tem ótima capacidade de trabalhar de forma colaborativa.",
    },
    linguas: {
      portugues: "Português",
      ingles: "Inglês",
    },
    educacao: {
      titulo: "Educação",
    },
    habilidades: {
      titulo: "Habilidades",
    },
    educacao: {
      titulo: 'Educação',
      1: {
        inicio: "2009",
        fim: "2013",
        titulo: "Bacharelado em Ciência da Computação",
        lugar: "Belém-PA",
        descricao: "Universidade Federal do Pará (UFPA)",
      },
      2: {
        inicio: "2014",
        fim: "2016",
        titulo: "Mestrado em Ciência da Computação",
        lugar: "Belém-PA",
        descricao: "Programa de Pós Graduação em Ciência da Computação (PPGCC)",
      },
    },
  },
};

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "ptBr", // set locale
  messages, // set locale messages
});
Vue.prototype.$xxx = i18n;
export default i18n;
