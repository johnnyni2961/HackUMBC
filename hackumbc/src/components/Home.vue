<template>
  <div>
    <h1>Connecteach</h1>
    <h3></h3>
    <p></p>

    <nav>
      <ul>
        <li><router-link :to="{ name: 'login' }">Login</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>