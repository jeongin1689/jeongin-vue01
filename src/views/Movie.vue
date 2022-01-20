<template>
  <div class="light">
    <Header />
    <main id="main">
      <section id="movieCont">
        <div class="container">
          <WrapTitle name1="movie" name2="reference" />
          <div class="movie__cont">
            <div class="movie">
              <div v-for="movie in movies" :key="movie.id">
                <a>
                  <img
                    :src="
                      `https://image.tmdb.org/t/p/original` + movie.poster_path
                    "
                    :alt="movie.title"
                  />
                  <p class="title">{{ movie.title }}</p>
                  <p class="release">{{ movie.release_date }}</p>
                </a>
              </div>
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
import WrapTitle from "@/components/WrapTitle.vue";
import { ref } from "vue";
import env from "@/env.js";

export default {
  components: {
    Header,
    Footer,
    WrapTitle,
  },
  setup() {
    const movies = ref([]);

    const searchMovie = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${env.apikey2}&language=en-US&page=1`
      )
        .then((responsive) => responsive.json())
        .then((data) => {
          movies.value = data.results;
          console.log(movies.value);
        });
    };

    searchMovie();

    return {
      movies,
      searchMovie,
    };
  },
};
</script>

<style lang="scss">
#movieCont {
  color: #fff;
  padding-bottom: 400px;
  font-family: "SCoreDream";
}
.movie__cont {
  color: #000;

  h2 {
    border-bottom: 1px solid #000;
    margin-bottom: 40px;
  }
  .movie {
    display: flex;
    align-content: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    > div {
      flex: 0 0 24%;
      margin-bottom: 2%;

      .title {
        margin: 10px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .search {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    input {
      flex: 0 0 79%;
      background: transparent;
      border: 0;
      color: #fff;
      border: 1px solid #fff;
      font-family: "SCoreDream";
      padding: 5px 10px;
      outline: #fff;

      &::placeholder {
        color: #fff;
      }
    }
    button {
      flex: 0 0 20%;
      border: 0;
      font-family: "SCoreDream";
      background: #fff;
      padding: 10px;
    }
  }
}
.movie__detail {
  font-family: "SCoreDream";
  font-weight: 300;
  margin-bottom: 300px;
  width: 1200px;
  margin: 0 auto;
  padding-top: 300px;

  img {
    width: 800px;
    height: 1200px;
    margin-bottom: 50px;
    margin-left: 200px;
  }

  h3 {
    font-size: 30px;
    margin-bottom: 30px;
  }

  .channel {
    width: 400px;
    overflow: hidden;
    margin-top: 10px;

    p {
      margin-bottom: 10px;
      color: #fff;
    }
  }
  .desc {
    h4 {
      font-size: 20px;
      margin-bottom: 10px;
      margin-top: 50px;
      color: #fff;
      display: inline-block;
    }

    p {
      margin-bottom: 10px;
      color: #fff;
    }
  }

  .list-btn {
    margin-top: 50px;
    border: 1px solid #dad8d1;
    text-align: center;
    display: block;
    font-family: "S-CoreDream-3Light";
    padding: 20px;
    transition: all 0.3s;
    margin-bottom: 60px;

    &:hover {
      background: #fff;
      color: #000;
    }
  }
}
</style>
