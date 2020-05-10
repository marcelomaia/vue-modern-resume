<template>
  <v-card color="grey darken-3" dark>
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          Marcelo <span class="light-blue--text text--lighten-3">Maia</span>
        </h1>
        <span>
          Fullstack Developer
        </span>
        <div class="bandeiras-linguagem">
          <button @click="setaPortugues">
            <span
              class="iconify"
              data-icon="emojione-v1:flag-for-brazil"
              data-inline="false"
            />
          </button>
          <button @click="setaIngles">
            <span
              class="iconify"
              data-icon="emojione-v1:flag-for-united-states"
              data-inline="false"
            />
          </button>
        </div>
      </div>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" />
      <sidebar-section :options="sections.hobbies">
        <template v-slot:item="{ item }">
          <v-chip>
            <v-avatar>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-avatar>
            {{ $t(item.text) }}
          </v-chip>
        </template>
      </sidebar-section>
      <sidebar-section :options="sections.languages">
        <template v-slot:items="{ items }">
          <v-container pa-0>
            <v-layout wrap class="text-xs-center">
              <template v-for="(item, i) in items">
                <v-flex :key="i" md4 sm4 xs6>
                  <v-progress-circular
                    rotate="360"
                    size="80"
                    width="2"
                    :value="item.value"
                    color="white"
                    class="ma-2"
                  >
                    {{ $t(item.text) }}
                  </v-progress-circular>
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </template>
      </sidebar-section>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from "@/views/dark-template/sidebar/Avatar";
import SidebarSection from "@/views/dark-template/sidebar/Section";
export default {
  name: "Sidebar",
  components: { SidebarSection, Avatar },
  methods: {
    setaPortugues() {
      this.$i18n.locale = 'ptBr'
    },
    setaIngles() {
      this.$i18n.locale = 'en'
    },
  },
  data() {
    return {
      sections: {
        info: {
          title: "INFO",
          items: [
            {
              name: "Email",
              icon: "mdi-email",
              text: "contato.email",
            },
            {
              name: "Website",
              icon: "mdi-web",
              text: "marcelomaia.tech",
            },
            {
              name: "Whatsapp",
              icon: "mdi-whatsapp",
              text: "+55 11 9 3431-5432",
            },
            {
              name: "contato.habitacao",
              icon: "mdi-map-marker",
              text: "São Paulo, Brasil",
            },
          ],
        },
        socials: {
          title: "SOCIAL",
          items: [
            {
              icon: "mdi-github-circle",
              text: "github.com/marcelomaia",
              link: "https://github.com/marcelomaia",
            },
            {
              icon: "mdi-linkedin-box",
              text: "linkedin.com/in/marcelomaia2",
              link: "https://linkedin.com/in/marcelomaia2",
            },
            {
              icon: "mdi-instagram",
              text: "instagram.com/marcelomaiaa2",
              link: "https://instagram.com/marcelomaiaa2",
            },
            {
              icon: "mdi-telegram",
              text: "t.me/marcelomaiaa",
              link: "https://t.me/marcelomaiaa",
            },
          ],
        },
        hobbies: {
          title: "HOBBIES",
          items: [
            {
              icon: "mdi-bullseye",
              text: "hobbies.aprender",
            },
            {
              icon: "mdi-bike",
              text: "hobbies.ciclismo",
            },
            {
              icon: "mdi-image-filter-hdr",
              text: "hobbies.natureza",
            },
            {
              icon: "mdi-teach",
              text: "hobbies.ensinar",
            },
            {
              icon: "mdi-karate",
              text: "hobbies.exercicios",
            },
            {
              icon: "mdi-music",
              text: "hobbies.musica",
            },
            {
              icon: "mdi-book-open-page-variant",
              text: "hobbies.leitura",
            },
            {
              icon: "mdi-cookie",
              text: "hobbies.cozinhar",
            },
          ],
        },
        languages: {
          title: "LÍNGUAS",
          items: [
            {
              text: "linguas.ingles",
              value: 80,
            },
            {
              text: "linguas.portugues",
              value: 100,
            },
          ],
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  background: #2e2e2e;
}
.bandeiras-linguagem {
  $tam: 3.5em;
  .iconify {
    width: $tam;
    height: $tam/1.5;
    // :hover {
    //   cursor: pointer;
    // }
  }
}
</style>
