<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="25%" />
    <h1>Welcome!</h1>
    <br />
    <vs-button size="large" color="primary" type="filled" v-on:click="connect"
      >Connect Wallet</vs-button
    >
    <br /><br />
    <vs-button
      size="large"
      color="primary"
      type="filled"
      v-on:click="disconnect"
      >Disconnect</vs-button
    >
    <br />
    {{ accounts }}
  </div>
</template>




<script>
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

const provider = new WalletConnectProvider({
  rpc: {
    97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    56: "https://bsc-dataseed1.binance.org/",
  },
  bridge: "https://bridge.walletconnect.org",
  qrcodeModalOptions: {
    mobileLinks: ["metamask", "trust"],
  },
});

const web3 = new Web3(provider);

provider.on("connect", async () => {
  //const  accounts = await web3.eth.getAccounts();
  //alert(accounts);
});

export default {
  name: "App",
  data() {
    return {
      accounts: "",
    };
  },
  components: {},
  methods: {
    connect: async function () {
      await provider.enable();
      alert("connected");
      const accounts = await web3.eth.getAccounts();
    },
    disconnect: async function () {
      await provider.disconnect();
      alert("disconnected");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
