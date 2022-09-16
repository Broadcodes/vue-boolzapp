const app = new Vue({
    el: '#root',
    data: {
        textInput: '',
        userSearch: '',
        contacts
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
        getDate(messages) {
            return `${messages.slice(11, 16)}`;
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
        }
    }
});