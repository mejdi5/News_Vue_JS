<template>
<div id="app">
  <h1>News</h1>
  <div class="search">
    <label>Search</label>
    <input type="text" placeholder="Enter articles source.." :value="filteringWord" @change="setFilteringWord"/>
  </div>
  <div v-if="news.articles" class="cards">
    <b-card-group deck v-for="article in news.articles.filter(article => article.source.name.toLowerCase().trim().startsWith(this.filteringWord.toLowerCase().trim()))" :key='article.source.id' class="card">
      <b-card :title='article.title' :img-src="article.urlToImage" img-alt="image" img-top>
        <b-card-text v-if="article.description">
          {{article.description}}
        </b-card-text>
        <b-card-text v-if="article.author">
          Published By: {{article.author}}
        </b-card-text>
        <b-card-text v-if="article.source">
          Source: {{article.source.name}}
        </b-card-text>
        <template #footer>
          <small class="text-muted">Published In {{article.publishedAt.substr(0,10).split('-').reverse().join('-')}} At {{article.publishedAt.substr(11,15)}}</small>
        </template>
      </b-card>
    </b-card-group>
  </div>
  <div v-else>
    <b-spinner type="grow" label="Spinning"></b-spinner>
  </div>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState(['news', 'filteringWord']),
  },
  mounted () {
    this.$store.dispatch('setNews')
  },
  methods: {
    ...mapActions(['setFilteringWord'])
  }
}
</script>

<style>
#app {
  background-color: rgb(196, 190, 231);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.cards {
  width: 50%;
  margin-left: 25%;
}
.card {
  margin: 50px;
}
.search {
  margin-top: 30px;
  display:flex;
  justify-content: center;
  display: inline;
  padding: 5px;
  padding-right: 0;
  background-color: black;
  border-style: solid;
}
label {
  margin-right: 10px;
  color: white;
  font-weight: bold;
}
</style>
