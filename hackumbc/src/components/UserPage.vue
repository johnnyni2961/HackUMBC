<template>
    <div>
        <h5><router-link :to="{name: '/'}">Home</router-link></h5>
        <h1>{{ `${user.fname} ${user.lname}'s Profile` }}</h1>
        <h4>{{ `${user.type[0].toUpperCase() + user.type.slice(1)} | @${user.username}` }}</h4>
    </div>
</template>

<script>
import * as api from './apiCalls'

export default {
    name: "UserPage",
    methods: {...api},
    data() {
        return {
            user: api.getUserByUsername(this.$route.params.username)
        }
    }
}
</script>