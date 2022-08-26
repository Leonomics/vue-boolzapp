const contacts = [
    {
        avatar:'img/assets/avatar_1.jpg',
        name:'Michele',
        ultimo_messaggio:'Ultimo messaggio inviato',
        date:'',
    },
    {
        avatar:'img/assets/avatar_2.jpg',
        name:'Fabio',
        ultimo_messaggio:'Ultimo messaggio inviato',
        date:'',
    },
    {
        avatar:'img/assets/avatar_3.jpg',
        name:'Samuele',
        ultimo_messaggio:'Ultimo messaggio inviato',
        date:'',
    },
    {
        avatar:'img/assets/avatar_4.jpg',
        name:'Alessandro B.',
        ultimo_messaggio:'Ultimo messaggio inviato',
        date:'',
    },
    {
        avatar:'img/assets/avatar_5.jpg',
        name:'Alessandro L.',
        ultimo_messaggio:'Ultimo messaggio inviato',
        date:'',
    },
    {
        avatar:'img/assets/avatar_6.jpg',
        name:'Claudia',
        ultimo_messaggio:'Ultimo messaggio inviato',
        date:'',
    },
    {
        avatar:'img/assets/avatar_7.jpg',
        name:'Federico',
        ultimo_messaggio:'Ultimo messaggio inviato',
        date:'',
    },
    {
        avatar:'img/assets/avatar_8.jpg',
        name:'Davide',
        ultimo_messaggio:'Ultimo messaggio inviato',
        date:'',
    },
]

const app = new Vue({
    el:'#app',
    data:{
        userName:"Sofia",
        userImage:"img/assets/avatar_io.jpg",
        contacts: contacts,
        classiContacts: 'contact',
    },
    
    methods:{
        
    },

})