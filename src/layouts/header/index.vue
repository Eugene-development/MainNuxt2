<template>
  <div>
    Header
    <MobileMenu/>
  </div>
</template>

<script>
import Actions from "~/mixins/mapping/actions"
import Getters from "~/mixins/mapping/getters"
import MobileMenu from './mobileMenu'

export default {
  name: "index",
  mixins: [Actions, Getters],
  components: {
    MobileMenu
  },
  //
}
</script>
