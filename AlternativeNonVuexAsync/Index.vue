<template>
  <v-layout class="top" justify-center align-center>
      <v-flex xs6 mt-12>
        <div class="mb-12">
          <v-btn id="hide" @click="showJoke" block x-large dark color="indigo">Cheer Yourself Up! <v-icon right dark>mdi-cloud-upload</v-icon></v-btn>
        </div>
        <v-card v-if="joke">
           <v-card-text>
            <div class="info--text" style="font-size: 20px;">{{ joke }}</div>
           </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="moreJoke" block class="primary">Get Another One!</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
</v-layout>
</template>
<script>
export default {
  data () {
    return {
      joke: ''
    }
  },
  methods: {
     async showJoke() {
        let config = {
          headers: {
            'Accept': 'application/json'
          }
        }
        const joke = await this.$http.get('https://icanhazdadjoke.com', config);
        this.joke = joke.data.joke;
     },
     async moreJoke() {
        let config = {
          headers: {
            'Accept': 'application/json'
          }
        }
        const hide = document.getElementById('hide');
        const joke = await this.$http.get('https://icanhazdadjoke.com', config);
        this.joke = joke.data.joke;
        hide.style.display = "none";
        
     }
  },
  components: {}
}
</script>
<style>
* {
text-align: center;
}
.top {
background-color:honeydew;
padding-top: 70px;
}
</style>


<style>
* {
text-align: center;
}


h1 {
padding: 20px;
}
</style>

