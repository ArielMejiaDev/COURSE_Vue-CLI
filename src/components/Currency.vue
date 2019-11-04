<template>
    <div>
        <ToggleList/>
        <input type="text" v-model="amount">
        <p>Tax: <span v-text="tax"></span></p>
        <p>Total: <span >{{ formatPrice(total) }}</span></p>
    </div>
</template>

<script>
import ToggleList from './ToggleList'
export default {
    name: 'Currency',
    components:{
        ToggleList
    },
    data: function(){
        return {
            amount: 0,
        }
    },
    computed: {
        tax: function(){
            return this.amount * 0.10
        },
        total: function(){
            return parseInt(this.amount) + parseInt(this.tax)  || 0 
        }
    },
    methods: {
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' €'
        }
    }
}
</script>

<style scoped>

</style>