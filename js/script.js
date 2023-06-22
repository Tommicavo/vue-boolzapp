console.log("js ok", Vue);

const app = Vue.createApp({
    data() {
        return{
            gptData: {
                apiUrl: "https://api.openai.com/v1/chat/completions",
                model: "gpt-3.5-turbo",
                apiKey: "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",
                temperature: 0.5
            },
            newMessage: "",
            searchedContact: "",
            user: {
            name: 'Nome Utente',
            avatar: '_io'
            },
            contacts: [
            {
                id: 1,
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                {
                    id: 1,
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    id: 2,
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    id: 3,
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                id: 2,
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                {
                    id: 1,
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    id: 2,
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    id: 3,
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ],
            },
            {
                id: 3,
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                {
                    id: 1,
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    id: 2,
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    id: 3,
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                id: 4,
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                {
                    id: 1,
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    id: 2,
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
            {
                id: 5,
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                {
                    id: 1,
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    id: 2,
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
                ],
            },
            {
                id: 6,
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                {
                    id: 1,
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    id: 2,
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    id: 3,
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
                ],
            },
            {
                id: 7,
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                {
                    id: 1,
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    id: 2,
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
                ],
            },
            {
                id: 8,
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                {
                    id: 1,
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    id: 2,
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    id: 3,
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
                ],
            }]
        }
    },
    computed: {
        openedChat() {
            let opened = null;
            this.contacts.forEach(contact => {
                if (contact.visible) opened = contact.messages;
            });
            return opened;
        },
        nextMsgId() {
            return this.openedChat.length + 1;
        },
        filteredContacts() {
            return this.contacts.filter(contact => {
                if (contact.name.toLowerCase().includes(this.searchedContact.toLowerCase())) return true;
            });
        },
        writingMsg() {
            if (!this.newMessage.length) isWriting = false;
            else isWriting = true;
            return isWriting;
        },
        lastMsgDate() {
            return this.openedChat[this.openedChat.length - 1].date;
        },
        lastSeen() {
            return this.lastMsgDate.substring(11, 16);
        }
    },
    methods: {
        initVisibility() {
            this.contacts.forEach(contact => {
                contact.visible = false;
            })
            this.contacts[0].visible = true;
        },
        changeChat(targetId) {
            this.contacts.forEach(contact => {
                if (contact.id !== targetId) contact.visible = false;
                else contact.visible = true;
            });
        },
        getCurrentDate() {
            const now = new Date();
            console.log("now: ", now);
        },
        getCurrentDate() {
            const now = new Date();

            let day = now.getDate();
            if (day < 10) day = "0" + day;
            
            let month = now.getMonth() + 1;
            if (month < 10) month = "0" + month;
            
            const year = now.getFullYear();
            
            let hour = now.getHours();
            if (hour < 10) hour = "0" + hour;
            
            let minutes = now.getMinutes();
            if (minutes < 10) minutes = "0" + minutes;
            
            let seconds = now.getSeconds();
            if (seconds < 10) seconds = "0" + seconds;
            
            return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
        },
        async getResponse(inputMsg) {
            const response = await fetch(this.gptData.apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${this.gptData.apiKey}`
                },
                body: JSON.stringify({
                    model: this.gptData.model,
                    messages: [{
                        role: "user",
                        content: inputMsg
                    }],
                    temperature: this.gptData.temperature
                })
            })
            const data = await response.json();
            const responseMsg = data.choices[0].message.content;

            this.openedChat.push({
                id: this.nextMsgId,
                date: this.getCurrentDate(),
                message: responseMsg,
                status: "received"
        })
        },
        sendMsg() {
            if (!this.newMessage.trim()) return;
            const messageSent = this.newMessage;
            this.openedChat.push({
                id: this.nextMsgId,
                date: this.getCurrentDate(),
                message: this.newMessage,
                status: "sent"
            });
            this.newMessage = "";
            // this.receiveMsg();
            this.getResponse(messageSent);
        },
        shortDate(longDate) {
            return longDate.substring(11, 16);
        },
        renderPic({avatar}) {
            return `img/avatar${avatar}.jpg`;
        },
        getLastMsg(contact) {
            return contact.messages[contact.messages.length - 1].message;
        },
        getLastMsgDate(contact) {
            return contact.messages[contact.messages.length - 1].date;
        }
    },
    mounted() {
        this.initVisibility();
    }
});

app.mount("#root");

