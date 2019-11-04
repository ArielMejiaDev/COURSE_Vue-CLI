<template>
    <div>
        <select name="" id="" v-model="optionValue" v-on:change="getOption">
            <option value="Option One">Option One</option>
            <option value="Option Two">Option Two</option>
            <option value="Option Three">Option Three</option>
        </select>        
    </div>
</template>

<script>
export default {
    name: 'Children',
    data: function(){
        return {
            optionValue: null
        }
    },
    methods: {
        getOption: function(){
            this.$emit('update:option', this.optionValue)
        }
    }
}
</script>

<style scoped>

</style>