<template>
  <div class="hello">
    <v-facebook-login         @login="getUserData"
     app-id="370182923706101" v-model="model" @sdk-init="handleSdkInit"></v-facebook-login>
  </div>
</template>

<script>
import VFacebookLogin from 'vue-facebook-login-component'
import Encryption from '@common/Encryption';
// import axios from 'axios';
import config from '@common/config';

export default {
  name: 'HelloWorld',
  data: () => ({
    FB: {},
    model: {},
    scope: {}
  }),
  components: {
    VFacebookLogin
  },
  methods: {
    async getUserData() {
      const accessToken = this.FB.getAccessToken();
      const encryption = new Encryption();
      const encrypted = encryption.encrypt(accessToken, config.encryptKey);
      console.log(encrypted)
      this.FB.api(
        '/me',
        { fields: 'id, name, picture, email, birthday, address, gender' },
        user => {
          console.log(user);
        }
      )
    },
    async handleSdkInit(data) {
      console.log('handleSdkInit');
      const { FB, scope } = data
      this.FB = FB;
      this.getUserData();
      this.scope = scope
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
