<template>
    <div>
        <ToggleList/>
        <!-- <p v-text="optionSelected">Value Selected: </p> -->
        <p>Value Selected: {{ optionSelected }}</p>
        <Children @update:option="optionUpdate" />
    </div>
</template>

<script>
import ToggleList from './ToggleList'
import Children from './Children'
export default {
    name: 'Parent',
    components: {
        ToggleList,
        Children
    },
    data: function(){
        return {
            optionSelected: null
        }
    },
    methods: {
        optionUpdate: function(value){
            this.optionSelected = value
        }
    }
}
</script>

<style scoped>

</style>