<template>
    <div>
        <ToggleList/>
        <ul>

            <li v-for="item in items" v-text="item.title" :key="item.id"> </li>

        </ul>
    </div>
</template>

<script>
import ToggleList from './ToggleList'
export default {
    name: 'SimpleList',
    components:{
        ToggleList
    },
    data: function(){
        return {
            items: [
                {id: 1, title: 'First Title', description: 'First Description'},
                {id: 1, title: 'Second Title', description: 'Second Description'},
                {id: 1, title: 'Third Title', description: 'Third Description'}
            ], 
        }
    }
}
</script>

<style scoped>
    
</style>