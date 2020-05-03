<template>
  <v-card
    color="grey darken-3"
    dark
  >
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          Marcelo <span class="light-blue--text text--lighten-3">Maia</span>
        </h1>
        <span>
          Fullstack Developer
        </span>
      </div>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" />
      <sidebar-section :options="sections.hobbies">
        <template v-slot:item="{item}">
          <v-chip>
            <v-avatar>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </template>
      </sidebar-section>
      <sidebar-section :options="sections.languages">
        <template v-slot:items="{items}">
          <v-container pa-0>
            <v-layout
              wrap
              class="text-xs-center"
            >
              <template
                v-for="(item, i) in items"
              >
                <v-flex
                  :key="i"
                  md3
                  sm4
                  xs6
                >
                  <v-progress-circular
                    rotate="360"
                    size="65"
                    width="2"
                    :value="item.value"
                    color="white"
                    class="ma-2"
                  >
                    {{ item.text }}
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
import Avatar from '@/views/dark-template/sidebar/Avatar'
import SidebarSection from '@/views/dark-template/sidebar/Section'
export default {
  name      : 'Sidebar',
  components: { SidebarSection, Avatar },
  data () {
    return {
      sections: {
        info: {
          title: 'INFO',
          items: [
            {
              name: 'Email',
              icon: 'mdi-email',
              text: 'contato@marcelomaia.tech',
            },
            {
              name: 'Website',
              icon: 'mdi-web',
              text: 'marcelomaia.tech',
            },
            {
              name: 'Whatsapp',
              icon: 'mdi-whatsapp',
              text: '+55 11 9 3431-5432',
            },
            {
              name: 'Habitação',
              icon: 'mdi-map-marker',
              text: 'São Paulo, Brasil',
            },
          ],
        },
        socials: {
          title: 'SOCIAL',
          items: [
            {
              icon: 'mdi-github-circle',
              text: 'github.com/marcelomaia',
              link: 'https://github.com/marcelomaia',
            },
            {
              icon: 'mdi-linkedin-box',
              text: 'linkedin.com/in/marcelomaia2',
              link: 'https://linkedin.com/in/marcelomaia2',
            },
            {
              icon: 'mdi-instagram',
              text: 'instagram.com/marcelomaiaa2',
              link: 'https://instagram.com/marcelomaiaa2',
            },
            {
              icon: 'mdi-telegram',
              text: 't.me/marcelomaiaa',
              link: 'https://t.me/marcelomaiaa',
            },
          ],
        },
        hobbies: {
          title: 'HOBBIES',
          items: [

            {
              icon: 'mdi-bullseye',
              text: 'Aprender constantemente',
            },
            {
              icon: 'mdi-bike',
              text: 'Ciclismo',
            },
            {
              icon: 'mdi-image-filter-hdr',
              text: 'Natureza',
            },
            {
              icon: 'mdi-teach',
              text: 'Ensinar',
            },
            {
              icon: 'mdi-karate',
              text: 'Exercícios',
            },
            {
              icon: 'mdi-music',
              text: 'Música',
            },
            {
              icon: 'mdi-account-group',
              text: 'Liderança',
            },
            {
              icon: 'mdi-book-open-page-variant',
              text: 'Leitura',
            },
            {
              icon: 'mdi-cookie',
              text: 'Cozinhar',
            },
          ],
        },
        languages: {
          title: 'LÍNGUAS',
          items: [
            {
              text : 'Inglês',
              value: 80,
            },
            {
              text : 'Português',
              value: 100,
            },
          ],
        },
      },
    }
  },
}
</script>

<style scoped>
.sidebar{
    background: #2e2e2e;
}
</style>
