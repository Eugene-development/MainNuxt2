<template>
  <div>
    <Header/>
      <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Start from "~/mixins/start"

export default {
  name: "index",
  mixins: [Start]
}
</script>
