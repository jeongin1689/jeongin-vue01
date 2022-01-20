<template>
  <div class="light">
    <Header />
    <main id="main">
      <section id="youtubeCont">
        <div class="container">
          <WrapTitle name1="port" name2="reference" />
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import WrapTitle from "@/components/WrapTitle.vue";
import { ref } from "vue";

export default {
  components: {
    Header,
    Footer,
    WrapTitle,
  },
  setup() {
    const ports = ref([]);

    const Portfolios = () => {
      fetch(
        "https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    };

    return {
      ports,
      Portfolios,
    };
  },
};
</script>

<style lang="scss"></style>
