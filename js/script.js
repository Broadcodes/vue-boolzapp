const app = new Vue({
    el: '#root',
    data: {
        textInput: '',
        userSearch: '',
        contacts,
        indexShowDetailsMessage: '',
        indexVerificContact: '0',
        showDetailsMessage: false
    },
    methods: {
        getUrlAvatar(index) {
            return `img/avatar${this.contacts[index].avatar}.jpg`;
        },
        getAltAvatar(index) {
            return `Avatar${this.contacts[index].avatar}`;
        },
        changeVisible(index) {
            this.contacts.forEach((contact, indexElement) => {
                this.contacts[indexElement].visible = true;
                if (indexElement !== index) {
                    this.contacts[indexElement].visible = !this.contacts[indexElement].visible;
                }
            });
        },
        getDateUser(contact) {

            const secondArr = [];

            contact.messages.forEach(elementArr => {
                if (elementArr.status === 'received') {
                    secondArr.push(elementArr.date);
                }
            });

            return `${secondArr[secondArr.length - 1].slice(11, 16)}`;
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
                this.contacts.forEach(contact => {
                    if (contact.visible === true) {
                        newMessage.date = `${new Date().getDate()}/0${new Date().getMonth() + 1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
                        newMessage.message = this.textInput;
                        newMessage.status = 'sent';

                        contact.messages.push(newMessage);

                        const replyMessage = setTimeout(() => {
                            newMessageUser.date = `${new Date().getDate()}/0${new Date().getMonth() + 1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
                            newMessageUser.message = "OK";
                            newMessageUser.status = 'received';

                            contact.messages.push(newMessageUser);
                        }, 1000);
                    }
                });
            }

            this.textInput = '';
        },
        showSearchedAccount() {

            let element = [];

            this.contacts.forEach(contact => {
                for (let index = 0; index < contact.name.length; index++) {
                    if (contact.name.toLowerCase().includes(this.userSearch.toLowerCase())) {
                        element.push(contact.name);
                    }
                }
            });
            return element;
        },
        showDetails(indexText, indexContact) {
            this.indexShowDetailsMessage = indexText;
            this.indexVerificContact = indexContact;
            console.log(indexContact);
        },
        showHide() {
            
            if (this.showDetailsMessage === true) {
                this.showDetailsMessage = false;
            } else {
                this.showDetailsMessage = true;
            }
        },

        prova(name){
            console.log(name);
        },



        deleteMessage(message, index) {

            let newArray = [];
            // console.log(message);

            this.contacts.forEach(contact => {
        
            });
        }

    }
});