<template>
  <v-card color="grey lighten-4" light>
    <v-card-text>
      <content-section :title="$t('principal.titulo')">
        {{ $t("principal.descricao") }}
      </content-section>
      <content-section v-if="educations" :title="$t('educacao.titulo')">
        <v-layout v-for="(education, i) in educations" :key="i">
          <v-flex md4>
            {{ $t(education.from) }} - {{ $t(education.to) }}
          </v-flex>
          <v-flex md8>
            <strong v-if="education.title">{{ $t(education.title) }}</strong>
            <div v-if="education.location">
              <i>{{ $t(education.location) }}</i>
            </div>
            <div v-if="education.description">
              {{ $t(education.description) }}
            </div>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="skills"
        id="to-timeline"
        :title="$t('habilidades.titulo')"
      >
        <template slot="actions">
          {{ $t("habilidades.descricao") }}
        </template>
        <v-layout wrap>
          <template v-for="(skill, i) in skills">
            <v-flex v-if="skill.divider" :key="i" md12 xs12 mb-4 />
            <v-flex v-else :key="i" md6 xs12>
              <div class="mr-2 ml-2">
                <div v-if="skill.custom" class="align-center">
                  <span class="iconify" :data-icon="skill.icon" />
                  {{ skill.title }}
                </div>
                <div v-else class="align-center">
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
  mounted() {
    this.$i18n.locale = "ptBr";
  },
  data: () => ({
    educations: [
      {
        from: "educacao.1.inicio",
        to: "educacao.1.fim",
        title: "educacao.1.titulo",
        location: "educacao.1.lugar",
        description: "educacao.1.descricao",
      },
      {
        from: "educacao.2.inicio",
        to: "educacao.2.fim",
        title: "educacao.2.titulo",
        location: "educacao.2.lugar",
        description: "educacao.2.descricao",
      },
    ],
    skills: [
      {
        title: "Python",
        icon: "mdi-language-python",
        value: 100,
      },
      {
        title: "JavaScript",
        icon: "mdi-language-javascript",
        value: 93,
      },
      {
        title: "DART",
        icon: "simple-icons:dart",
        custom: true,
        value: 70,
      },
      {
        title: "Flutter",
        icon: "cib:flutter",
        custom: true,
        value: 60,
      },
      {
        title: "Django",
        icon: "cib:django",
        custom: true,
        value: 99,
      },
      {
        title: "Django Rest Framework",
        icon: "cib:django",
        custom: true,
        value: 99,
      },
      {
        title: "Flask",
        icon: "cib:flask",
        value: 95,
        custom: true,
      },
      {
        title: "Pytest",
        icon: "mdi-test-tube",
        custom: true,
        value: 100,
      },

      {
        title: "Jest",
        icon: "cib:jest",
        custom: true,
        value: 80,
      },
      {
        title: "Vue.js",
        icon: "mdi-vuejs",
        value: 95,
      },
      {
        title: "Cypress",
        icon: "logos-cypress",
        value: 87,
        custom: true
      },
      {
        title: "React.js",
        icon: "mdi-react",
        value: 90,
      },

      {
        title: "Material Design",
        icon: "simple-icons:material-ui",
        value: 90,
        custom: true,
      },
      {
        title: "Bootstrap 4",
        icon: "mdi-bootstrap",
        value: 90,
      },
      {
        title: "HTML",
        icon: "mdi-language-html5",
        value: 100,
      },
      {
        title: "CSS",
        icon: "mdi-language-css3",
        value: 88,
      },

      {
        title: "Postgres",
        icon: "cib:postgresql",
        custom: true,
        value: 90,
      },
      {
        title: "MongoDB",
        icon: "cib:mongodb",
        custom: true,
        value: 80,
      },
      {
        title: "Redis",
        icon: "cib:redis",
        custom: true,
        value: 90,
      },
      {
        title: "Nginx",
        icon: "cib:nginx",
        custom: true,
        value: 60,
      },
      {
        title: "Linux",
        icon: "mdi-linux",
        value: 100,
      },
      {
        title: "Docker",
        icon: "mdi-docker",
        value: 95,
      },
      {
        title: "Extreme Programming",
        icon: "cryptocurrency:xp",
        value: 90,
        custom: true,
      },
      {
        title: "Domain Driven Design",
        icon: "whh:business",
        value: 90,
        custom: true,
      },
      {
        title: "Web Application Security",
        icon: "mdi-shield-lock",
        value: 80,
      },
      {
        title: "Test Driven Development",
        icon: "mdi-test-tube",
        value: 100,
      },
      {
        title: "Behavior Driven Development",
        icon: "mdi-test-tube",
        value: 85,
      },
      {
        title: "Continuous Integration / Continuous Delivery",
        icon: "mdi-truck-fast",
        value: 90,
      },
      {
        title: "Git",
        icon: "mdi-git",
        value: 95,
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
.iconify {
  color: #777777;
}
</style>
