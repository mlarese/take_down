<template>
  <v-layout
    align-center
    justify-center>
    <script src="https://www.google.com/recaptcha/api.js"/>
    <form>
      <div
        class="g-recaptcha"
        data-sitekey="6Lfj4hATAAAAAPnTx8JPMeTG8ihF13cBF7vIfess"/>
    </form>
  </v-layout>
</template>



<script>
    import Vue from 'vue'
    import VueRecaptcha from 'vue-recaptcha';
    export default {
        name: "ReCAPTCHA",
        components: {VueRecaptcha},
        data: function() {
return {
        };
},
    }
</script>

<style scoped>

</style>
