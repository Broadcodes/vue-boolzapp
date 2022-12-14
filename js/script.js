const app = new Vue({
    el: '#root',
    data: {
        textInput: '',
        userSearch: '',
        contacts,
        answerUser,
        indexShowDetailsMessage: '',
        showDetailsMessage: false,
        showLastMessageSent: '',
        showHideEmojisBox: false,
        isDescriptionLastAccess: false,
        showDescriptionLastAccess: 'Sta scrivendo...',
        isAudio: false,
        isStopAudio: false,
        timerRec: '00:00',
        time: '',

        isRecVoice: false
    },
    methods: {
        hideWindow() {
            this.showDetailsMessage = false;
        },
        getUrlAvatar(index) {
            return `img/avatar${this.contacts[index].avatar}.jpg`;
        },
        getAltAvatar(index) {
            return `Avatar${this.contacts[index].avatar}`;
        },
        // Nesessaria a stabilire l'account selezionato
        changeVisible(index) {
            this.contacts.forEach((contact, indexElement) => {
                this.contacts[indexElement].visible = true;
                if (indexElement !== index) {
                    this.contacts[indexElement].visible = !this.contacts[indexElement].visible;
                }
            });
        },
        getDateUser(contact) {

            const sent = [];
            const received = [];

            // Salvo i dati in due array in base allo status
            contact.messages.forEach(elementArr => {
                if (elementArr.status === 'received') {
                    received.push(elementArr.date);
                }
                if (elementArr.status === 'sent') {
                    sent.push(elementArr.date);
                }
            });

            // Creazione della data (orario) attuale
            let hour = new Date().getHours().toFixed();
            let minutes = new Date().getMinutes().toFixed();

            if (hour.length < 2) {
                hour = '0' + hour;
            }

            if (minutes.length < 2) {
                minutes = '0' + minutes;
            }

            // Estrapolo dalla data solo l'orario 
            if (received.length > 0) {
                return `${received[received.length - 1].slice(11, 16)}`;
            } else if (sent.length > 0) {
                return `${sent[sent.length - 1].slice(11, 16)}`;
            } else {
                return `${hour}:${minutes}`;
            }
        },
        addNewMessage() {
            const newMessage = {
                date: '',
                message: '',
                status: ''
            };

            const newMessageUser = {
                date: '',
                message: '',
                status: ''
            };

            if (this.textInput.length > 0) {

                this.isDescriptionLastAccess = true;
                // Creo un nuovo dato inserendo oltre al messaggio anche l'ora di creazione
                this.contacts.forEach(contact => {
                    if (contact.visible === true) {
                        newMessage.date = `${new Date().getDate()}/0${new Date().getMonth() + 1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
                        newMessage.message = this.textInput;
                        newMessage.status = 'sent';

                        contact.messages.push(newMessage);

                        const replyMessage = setTimeout(() => {
                            newMessageUser.date = `${new Date().getDate()}/0${new Date().getMonth() + 1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;

                            const numberRandom = Math.floor(Math.random() * answerUser.length) + 1;

                            newMessageUser.message = answerUser[numberRandom].answer;
                            newMessageUser.status = 'received';

                            contact.messages.push(newMessageUser);
                            this.isDescriptionLastAccess = false;
                        }, 1000);
                    }
                });
            }

            // Nasconde la finestra delle emojis se clicco nell'area principale
            this.textInput = '';
            if (this.showHideEmojisBox) {
                this.showHideEmojis();
            }
        },
        showSearchedAccount() {

            let element = [];

            // Effettuo la ricerca degli account
            this.contacts.forEach(contact => {
                for (let index = 0; index < contact.name.length; index++) {
                    if (contact.name.toLowerCase().includes(this.userSearch.toLowerCase())) {
                        element.push(contact.name);
                    }
                }
            });
            return element;
        },
        showDetails(indexText) {
            this.indexShowDetailsMessage = indexText;
        },
        showHide() {

            if (this.showDetailsMessage === true) {
                this.showDetailsMessage = false;
            } else {
                this.showDetailsMessage = true;
            }
        },

        deleteMessage(indexContact) {
            const arrComplete = [];
            const arrFirstPart = contacts[indexContact].messages.slice(0, this.indexShowDetailsMessage);
            const arrSecondPart = contacts[indexContact].messages.slice(this.indexShowDetailsMessage + 1);
            arrComplete.push(...arrFirstPart, ...arrSecondPart);

            contacts[indexContact].messages = arrComplete;
            this.hideWindow();
            this.showDetailsMessage = false
            this.showLastMessageSent = '';
        },
        infoMessage(date) {
            this.showLastMessageSent = date;
            this.hideWindow();
        },
        showHideEmojis() {
            if (this.showHideEmojisBox === true) {
                this.showHideEmojisBox = false;
            } else {
                this.showHideEmojisBox = true;
            }
        },
        emojiSelected(emoji) {
            this.textInput += emoji;
        },
        showBoxAudio() {

            if (this.isAudio === true) {
                clearInterval(this.time);
                this.isStopAudio = true;
                setTimeout(() => {
                    this.isAudio = false;
                    this.timerRec = '00:00';
                    this.isStopAudio = false;
                }, 1500);
            } else {
                this.isAudio = true;
                this.timer();
            }

            const trash = document.getElementById("trash");
            const microphone = document.getElementById("microphone");

            microphone.classList.remove("rec");
            microphone.classList.add("delete");
            trash.classList.add("view");
        },
        timer() {
            // Area che gestisce la registrazione audio.
            // In particolare mostra nella barra in basso il timer di registrazione
            let min = 0;
            let sec = 0;

            let minToString = '';
            let secToString = '';

            this.time = setInterval(() => {

                if (sec < 59) {
                    sec++;
                } else {
                    sec = 0;
                    min++;
                }

                if (min.toFixed().length < 2) {
                    minToString = '0' + min.toFixed();
                } else {
                    minToString = min.toFixed();
                }

                if (sec.toFixed().length < 2) {
                    secToString = '0' + sec.toFixed();
                } else {
                    secToString = sec.toFixed();
                }

                this.timerRec = `${minToString}:${secToString}`;
            }, 1000);
        },
    }
});