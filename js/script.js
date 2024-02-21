
const { createApp } = Vue;
createApp({

  data() {
    // Inizializzo la lista degli indirizzi email come un array vuoto
    return {
      emailList: [],
    }
  },

  mounted() {
    // Itero 10 volte per ottenere 10 indirizzi email casuali
    for (let i = 0; i < 10; i++) {
      // Effettuo una chiamata GET all'API per ottenere l' indirizzo email 
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        // Quando la chiamata ha successo  ottengo l'output dei dati 
        .then((result) => {
          // Ottenuta l'email, l'aggiungo  all' emailList
          this.emailList.push(result.data.response);
        })
    }
  },
}).mount('#app');
