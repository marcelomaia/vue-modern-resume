<template>
  <v-layout>
    <v-flex
      v-if="hasIcon"
      xs2
    >
      <v-icon>
        {{ item.icon }}
      </v-icon>
    </v-flex>
    <v-flex
      :xs10="hasIcon"
      :xs12="!hasIcon"
    >
      <div>
        {{ $t(item.name) }}
      </div>
      <p>
        <a
          v-if="item.link"
          class="grey--text"
          :href="item.link"
          target="_blank"
        >
          {{ $t(item.text) }}
        </a>
        <span
          v-else
          class="grey--text"
        >
          {{ $t(item.text) }}
        </span>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name    : 'SidebarSectionItem',
  props   : { item: { type: Object, default: () => {} } },
  computed: {
    hasIcon () {
      return !!this.item.icon
    },
  },
}
</script>

<style scoped>
</style>
