<template>
  <v-card color="grey lighten-4" light>
    <v-card-text>
      <content-section
        id="timeline"
      >
        <v-timeline dense>
          <v-timeline-item
            v-for="(item, i) in orderedItems"
            :key="i"
            :icon="item.icon || ''"
            :class="{ transparent: item.transparent }"
            large
          >
            <template v-if="item.iconImage" v-slot:icon>
              <v-avatar>
                <img :src="publicPath(item.iconImage)" />
              </v-avatar>
            </template>
            <template v-slot:opposite />
            <v-layout>
              <v-flex
                v-if="$vuetify.breakpoint.smAndUp"
                md1
                sm2
                align-self-center
              >
                <span>{{ $t(item.year) }}</span>
              </v-flex>
              <v-flex md11 sm10 xs12>
                <v-card class="elevation-1">
                  <v-card-title class="pb-0">
                    <div>
                      <p v-if="$vuetify.breakpoint.xsOnly">
                        {{ $t(item.year) }}
                      </p>
                      <h3>{{ $t(item.title) }}</h3>
                    </div>
                  </v-card-title>
                  <v-card-text>
                    <v-layout wrap>
                      <v-flex :md7="!!item.image" :md12="!item.image" xs12>
                        <div class="mr-1">
                          <span v-if="item.text" class="pre">{{
                            $t(item.text)
                          }}</span>
                          <!-- eslint-disable vue/no-v-html -->
                          <div v-else-if="item.html" v-html="$t(item.html)" />
                          <!-- eslint-enable vue/no-v-html -->
                        </div>
                      </v-flex>
                      <v-flex v-if="item.image" md5 xs12>
                        <div class="mt-2">
                          <v-carousel
                            v-if="Array.isArray(item.image)"
                            :show-arrows="false"
                            :height="325"
                          >
                            <v-carousel-item
                              v-for="(citem, ci) in item.image"
                              :key="ci"
                              :src="publicPath(citem)"
                            />
                          </v-carousel>
                          <v-img
                            v-else
                            :max-height="
                              item.imageHeight ? item.imageHeight : ''
                            "
                            :src="publicPath(item.image)"
                          />
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from "@/views/dark-template/content/Section";
export default {
  name: "Timeline",
  components: { ContentSection },
  data: () => ({
    detailed: true,
    items: [
      {
        year: "experiencia.1.ano",
        title: "experiencia.1.titulo",
        html: "experiencia.1.html",
        image: "img/timeline/boto-set.jpg",
        icon: "mdi-linux",
      },
      {
        year: "experiencia.2.ano",
        title: "experiencia.2.titulo",
        html: "experiencia.2.html",
        icon: "mdi-emoticon-happy",
      },
      {
        year: "experiencia.3.ano",
        title: "experiencia.3.titulo",
        html: "experiencia.3.html",
        image: "img/timeline/drone2.png",
        icon: "mdi-school",
      },
      {
        year: "experiencia.4.ano",
        title: "experiencia.4.titulo",
        html: "experiencia.4.html",
        image: "img/timeline/ebi.jpg",
        icon: "mdi-office-building",
      },
      {
        year: "experiencia.5.ano",
        title: "experiencia.5.titulo",
        html: "experiencia.5.html",
        icon: "mdi-airport",
      },
      {
        year: "experiencia.6.ano",
        title: "experiencia.6.titulo",
        html: "experiencia.6.html",
        icon: "mdi-factory",
      },
    ],
  }),
  computed: {
    orderedItems() {
      const items = [...this.items].reverse();
      if (this.detailed) return items;
      return items.filter((item) => {
        return !item.detailed;
      });
    },
  },
};
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.pre {
  white-space: pre;
}
.transparent {
  opacity: 0.6;
}
</style>
