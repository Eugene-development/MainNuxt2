import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import {mapActions} from "vuex";

export default {
  components: {
    Header,
    Footer
  },
  methods: {
    ...mapActions({
      'useLocalStorage': 'user/useLocalStorage',
    })
  },
  mounted() {
    this.useLocalStorage();
  },
}
