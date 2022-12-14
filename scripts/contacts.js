const contacts = [
    {
        avatar:'img/assets/avatar_1.jpg',
        name:'Michele',
        id:1,
        ultimo_messaggio:'Ultimo messaggio inviato',
        last_access_hour:'12:00',
        last_access_day: 'oggi',
        messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
            }
        ]
    },
    {
        avatar:'img/assets/avatar_2.jpg',
        name:'Fabio',
        id:2,
        ultimo_messaggio:'Ultimo messaggio inviato',
        last_access_hour:'12:00',
        last_access_day: 'ieri',
        messages: [
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
        ],
    },
    {
        avatar:'img/assets/avatar_3.jpg',
        name:'Samuele',
        id:3,
        ultimo_messaggio:'Ultimo messaggio inviato',
        last_access_hour:'12:00',
        last_access_day: 'oggi',
        messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
            }
        ],

    },
    {
        avatar:'img/assets/avatar_4.jpg',
        name:'Alessandro B.',
        id:4,
        ultimo_messaggio:'Ultimo messaggio inviato',
        last_access_hour:'12:00',
        last_access_day: 'oggi',
        messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
        ],
    },
    {
        avatar:'img/assets/avatar_5.jpg',
        name:'Alessandro L.',
        id:5,
        ultimo_messaggio:'Ultimo messaggio inviato',
        last_access_hour:'12:00',
        last_access_day: 'oggi',
        messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
            }
        ],
    },
    {
        avatar:'img/assets/avatar_6.jpg',
        name:'Claudia',
        id:6,
        ultimo_messaggio:'Ultimo messaggio inviato',
        last_access_hour:'12:00',
        last_access_day: 'oggi',
        messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novit???',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent'
            }
        ]
    },
    {
        avatar:'img/assets/avatar_7.jpg',
        name:'Federico',
        id:7,
        ultimo_messaggio:'Ultimo messaggio inviato',
        last_access_hour:'12:00',
        last_access_day: 'oggi',
        messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received'
            }
        ],
    },
    {
        avatar:'img/assets/avatar_8.jpg',
        name:'Davide',
        id:8,
        ultimo_messaggio:'Ultimo messaggio inviato',
        last_access_hour:'12:00',
        last_access_day: 'oggi',
        messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'received'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received'
            }
        ],
    },
]


const app = new Vue({
    el:'#app',
    data:{
        userName:"Sofia",
        userImage:"img/assets/avatar_io.jpg",
        contacts: contacts,
        //classiContacts: 'contact',
        isHovering:false,
        hoveredContact:null,
        activeContact: 0,
        newMessage:"",
        date:"",
        userResearch:"",
    },

    /*computed:{
        filteredContacts: function(){
            return this.contacts.filter((contact)=>{
                return contact.name.toLowerCase().trim().match(this.userResearch.toLowerCase().trim())
            })
            
        }
    },*/
    
    methods:{
        selectContact(index){
            console.log("click")
            this.activeContact = index
            console.log(this.activeContact) 
        },
        addMessage(){
            //this.getDate()
            if(this.newMessage.trim() != ""){
                this.messages = contacts[this.activeContact].messages,
                this.messages.push({
                date: this.getDate(),
                message: this.newMessage,
                status:"sent",
            })
            this.getResponse();
            }
            
        },
        getDate(){
            //this.date = new Date();
            return Date();
        },
        getResponse(){
            setTimeout(()=> {
                const message={
                    date:'',
                    message:'ok',
                    status:'received',
                }
                this.messages.push(message)
            }, 2000)
        },
    },

})

