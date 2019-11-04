<template>
    <div>
        <ul class="menu">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/simple-list">Simple List</a>
            </li>
            <li>
                <a href="/currency">Currency</a>
            </li>
            <li>
                <a href="/posts">Posts</a>
            </li>
            <li>
                <a href="#" v-text="icon" @click="changeIcon">How to > </a>
                <a v-if="dropdown" :class="{'dropdown': dropdown}"  href="/parent">Emmit an event to parent component</a>
            </li>
        </ul>        
    </div>
</template>

<script>
export default {
    name: 'ToggleList',
    data: function(){
        return {
            dropdown:false,
            icon: '📁'
        }
    },
    methods: {
        changeIcon: function(){
            if (!this.dropdown) {
                this.icon = '❌';
            }
            if (this.dropdown) {
                this.icon = '📁';
            }
            this.dropdown = !this.dropdown
        }
    }
}
</script>

<style scoped>
    ul.menu{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    ul.menu li {
        display:inline;
    }
    ul.menu li{
        background-color:dodgerblue;
        border-radius: 5px;
        margin: 0 10px 0 10px;
        padding: 10px;
    }
    ul.menu li:hover{
        background-color:deepskyblue;
    }
    ul.menu li a{
        color: white;
        text-decoration: none;
    }
    .dropdown{
        color: blue!important;
    }

</style>