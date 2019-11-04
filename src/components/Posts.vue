<template>
    <div>
        <ToggleList/>
        <h1>Posts</h1>
        <ul>
            <li :key="post.id" v-for="post in posts">{{ post.title }}</li>
        </ul>
    </div>
</template>

<script>
import ToggleList from './ToggleList'
const axios = require('axios');
export default {  
    name: 'posts',

    components: {
        ToggleList
    },

    data: function(){
        return {
            posts: null
        }
    },

    mounted: function() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => this.posts = response.data)
          .catch(() => this.posts = [{id: 1, title: 'No Posts Available'}])
          .finally(() => console.log('API CALL FINISH'))
    },

}
</script>

<style scoped>

</style>