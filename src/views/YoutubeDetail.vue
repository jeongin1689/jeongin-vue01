<template>
  <div class="light">
    <Header />
    <main id="main">
      <section id="youtubeCont">
        <div class="youtube__detail">
          <div v-for="youtube in youtubes" :key="youtube.id.videoid">
            <iframe
              :src="'https://www.youtube.com/embed/' + youtube.id.videoid"
              title="youtube video"
            />
            <h3>{{ youtube.snippet.title }}</h3>
            <div class="channel">
              <div class="circle"></div>
              <p>{{ youtube.snippet.channelTitle }}</p>
            </div>
            <div class="desc">
              <h4>description</h4>
              <p>{{ youtube.snippet.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const youtube = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&id=${route.params.id}&key=${env.apikey}`
      )
        .then((response) => response.json())
        .then((data) => {
          youtube.value = data;
          console.log(data);
        });
    });

    return {
      youtube,
    };
  },
};
</script>

<style lang="scss"></style>
