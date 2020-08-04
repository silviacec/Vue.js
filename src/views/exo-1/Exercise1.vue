<template>
  <div class="exercise-1">
    <p>Rentre ici ton prénom et nom :</p>
    <input type="text" v-model="firstname" placeholder="prénom"/><input type="text" v-model="lastname" placeholder="nom"/>

    <h1 v-if="firstname || lastname">Bienvenue, {{ firstname }}  {{ lastname }} !</h1>
    <!-- PEUT S'ECRIRE AUSSI: <h1 v-if="firstname && lastname">Bienvenue, {{ firstname + " " + lastname }} !</h1> -->
    <p>...ainsi que ton âge ici :</p>
    <input type="number" v-model="age" placeholder="âge"/>

    <!-- parseInt(variable) string > int ou variable.toString() int > string -->

    <h1 v-if="parseInt(age) && parseInt(age) >= 0">👵🏼👨👧🏼Tu as {{age}} an(s) et tu es né.e en {{2020 - age}} 👶🏼👩🏼👨🏼‍🦳</h1>
    <h1 v-if="parseInt(age) < 18 || parseInt(age) > 85">Tu n'as pas le droit de conduire une voiture 😢 !</h1>
    <h1 v-else-if="parseInt(age) > 0">Tu peux conduire une voiture 🚗! </h1>
  </div>
</template>

<script>
export default {
  name: 'Exercise1',
  data() {
    return {
      firstname: "",
      lastname: "",
      age: "",
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import '../../theme.styl';

  .exercise-1 h1 {
    color: $grey;
  }
</style>
