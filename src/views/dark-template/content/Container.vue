<template>
  <v-card color="grey lighten-4" light>
    <v-card-text>
      <content-section :title="$t('principal.titulo')">
        {{ $t("principal.descricao") }}
      </content-section>
      <content-section v-if="prouds" title="What am I proud of?">
        <v-layout v-for="(proud, i) in prouds" :key="i">
          <v-flex md1 xs3>
            <v-icon right>
              {{ proud.icon }}
            </v-icon>
          </v-flex>
          <v-flex md11 xs9>
            <p>
              <strong>{{ proud.text }}</strong
              ><br />
              <small>{{ proud.source }}</small>
            </p>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section v-if="educations" :title="$t('educacao.titulo')">
        <v-layout v-for="(education, i) in educations" :key="i">
          <v-flex md4> {{ education.from }} - {{ education.to }} </v-flex>
          <v-flex md8>
            <strong v-if="education.title">{{ education.title }}</strong>
            <div v-if="education.location">
              <i>{{ education.location }}</i>
            </div>
            <div v-if="education.description">
              {{ education.description }}
            </div>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="skills"
        id="to-timeline"
        :title="$t('habilidades.titulo')"
      >
        <v-layout wrap>
          <template v-for="(skill, i) in skills">
            <v-flex v-if="skill.divider" :key="i" md12 xs12 mb-4 />
            <v-flex v-else :key="i" md6 xs12>
              <div class="mr-2 ml-2">
                <div class="align-center">
                  <v-icon small>
                    {{ skill.icon }}
                  </v-icon>
                  {{ skill.title }}
                </div>
                <v-progress-linear
                  class="progress"
                  color="secondary"
                  height="3"
                  :value="skill.value"
                />
              </div>
            </v-flex>
          </template>
        </v-layout>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from "@/views/dark-template/content/Section";
export default {
  name: "MainContent",
  components: { ContentSection },
  data: () => ({
    prouds: [
      {
        icon: "mdi-help-rhombus-outline",
        text: "Answered 10M+ questions!",
        source: "(Bytegate.ir post views)",
      },
      {
        icon: "mdi-library-music",
        text:
          "Made people enjoy and learn a new language for equivalent of 29+ years (older than myself!)",
        source: "(Bobet.ir and its channel downloads)",
      },
      {
        icon: "mdi-timer-sand",
        text: "Saved +110 days of time of students, writers and etc!",
        source: "(Delix.ir service usages)",
      },
      {
        icon: "mdi-account-multiple",
        text: "Tried to cover small part of 7 people expenses.",
        source: "(My awesome colleagues)",
      },
    ],
    educations: [
      {
        from: "2009",
        to: "2014",
        title: "Bachelor's degree, Information Technology",
        location: "Seraj University",
        description:
          "Became a member of University Academic Association of Computer Science",
      },
    ],
    skills: [
      {
        title: "Python",
        icon: "mdi-language-python",
        value: 95,
      },
      {
        title: "JavaScript",
        icon: "mdi-language-javascript",
        value: 90,
      },
       {
        title: "HTML",
        icon: "mdi-language-html5",
        value: 100,
      },
       {
        title: "Postgres",
        icon: "mdi-postgres",
        value: 100,
      },
      {
        title: "CSS",
        icon: "mdi-language-css3",
        value: 100,
      },
      {
        title: "DART",
        icon: "mdi-language-dart",
        value: 60,
      },
      //TODO: colocar icone django
      {
        title: "Django",
        icon: "mdi-language-django",
        value: 90,
      },
      {
        title: "DRF",
        icon: "mdi-language-django",
        value: 90,
      },
      {
        title: "Pytest",
        icon: "mdi-language-django",
        value: 90,
      },
      {
        title: "Jest",
        icon: "mdi-language-django",
        value: 90,
      },
      {
        title: "Flask",
        icon: "mdi-flask",
        value: 90,
      },
      {
        title: "Vue.js Framework",
        icon: "mdi-vuejs",
        value: 80,
      },
            {
        title: "React.js Framework",
        icon: "mdi-react",
        value: 80,
      },
      {
        title: "Flutter",
        icon: "mdi-language-flutter",
        value: 80,
      },
      { divider: true },
      {
        title: "Linux",
        icon: "mdi-linux",
        value: 70,
      },
      {
        title: "Docker",
        icon: "mdi-docker",
        value: 70,
      },
      {
        title: "ExtremeProgramming",
        icon: "mdi-xp",
        value: 70,
      },
      {
        title: "Web Application Security",
        icon: "mdi-shield-lock",
        value: 80,
      },
      {
        title: "Test Driven Development",
        icon: "mdi-test-tube",
        value: 95,
      },
      {
        title: "Continuous Integration / Continuous Delivery",
        icon: "mdi-truck-fast",
        value: 35,
      },
      {
        title: "Git",
        icon: "mdi-git",
        value: 90,
      },
      { divider: true },
      {
        title: "Hardware Development",
        icon: "mdi-chip",
        value: 29,
      },
      { divider: true },
      {
        title: "Leadership",
        icon: "mdi-account-group",
        value: 68,
      },
    ],
  }),
};
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.progress {
  margin-top: 0.1rem;
}
</style>
