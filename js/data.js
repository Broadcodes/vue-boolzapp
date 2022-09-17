const contacts = [
    {
        name: 'Michele',
        avatar: '_1',
        visible: true,
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
        ],
    },
    {
        name: 'Fabio',
        avatar: '_2',
        visible: false,
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
        name: 'Samuele',
        avatar: '_3',
        visible: false,
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
        name: 'Alessandro B.',
        avatar: '_4',
        visible: false,
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
        name: 'Alessandro L.',
        avatar: '_5',
        visible: false,
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
        name: 'Claudia',
        avatar: '_6',
        visible: false,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
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
        ],
    },
    {
        name: 'Federico',
        avatar: '_7',
        visible: false,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
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
        name: 'Davide',
        avatar: '_8',
        visible: false,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
    }
]

const answerUser = [
    { answer: 'Penso di aver già visto questo film e il finale non mi è piaciuto' },
    { answer: 'Ho delle riunioni dalle otto del mattino e finisco alle nove di sera. Non ho nemmeno il tempo di andare a fare la spesa.' },
    { answer: 'È un tale lusso poter essere felice di andare al lavoro la mattina.' },
    { answer: 'Questa volta sono stato molto attento.' },
    { answer: 'Ma la vera domanda è... perché?' },
    { answer: 'Una volta qualcuno ha detto "Non bisogna vergognarsi di nessun lavoro finché si fa del proprio meglio"' },
    { answer: 'Beh, novità?' },
    { answer: 'Forse è giunto il momento di minimizzare la nostra esposizione.' },
    { answer: 'In realtà se la guardi dalla mia prospettiva...' },
    { answer: 'Con quale dei tuoi insegnanti del passato ti piacerebbe sederti e parlare oggi?' },
    { answer: 'Era appena passato il tramonto quando Clara venne da me' },
    { answer: 'Mi sono schiantato contro la porta della camera da letto' },
    { answer: 'Dove sei andato oggi?' },
    { answer: 'Ci sono degli amici con cui mi capisco così bene che non solo non ho bisogno di concludere una frase, ma non ho neanche bisogno di cominciarla.' },
    { answer: 'Possiamo incontrarci?' },
    { answer: 'Quasi quasi mollo tutto e vengo da te' },
    { answer: 'Secondo me tu hai paura di essere quello che sei' },
    { answer: 'Pensi mai al futuro?' },
    { answer: 'Se ti è possibile cerca le chiavi della macchina' },
    { answer: 'Qual è la cosa che ti farebbe più felice al mondo?' },
    { answer: 'L’unica regola del viaggio è: non tornare come sei partito' },
    { answer: 'Ogni viaggio lo vivi tre volte: quando lo sogni, quando lo vivi e quando lo ricordi' },
    { answer: 'Abbiamo quaranta milioni di ragioni per fallire, ma non una sola scusa' },
    { answer: 'Abbiamo quaranta milioni di ragioni per fallire, ma non una sola scusa' },
    { answer: 'Cosa ti metti per sembrare così giovane?' },
    { answer: 'Cerco sempre di fare ciò che non sono capace di fare, per imparare come farlo' },
    { answer: 'Soltanto una cosa rende impossibile un sogno: la paura di fallire.' },
    { answer: 'Mira alla luna, anche se la manchi atterrerai tra le stelle.' },
    { answer: 'Sono grato a tutte quelle persone che mi hanno detto NO. E’ grazie a loro se sono quel che sono' },
    { answer: 'Io non risolvo i miei problemi' }
]

const emojis = [
    { emoji: '😀' },
    { emoji: '😃' },
    { emoji: '😄' },
    { emoji: '😁' },
    { emoji: '😆' },
    { emoji: '😅' },
    { emoji: '😂' },
    { emoji: '🤣' },
    { emoji: '🥲' },
    { emoji: '😊' },
    { emoji: '😇' },
    { emoji: '🙂' },
    { emoji: '🙃' },
    { emoji: '😉' },
    { emoji: '😌' },
    { emoji: '😍' },
    { emoji: '🥰' },
    { emoji: '😘' },
    { emoji: '😗' },
    { emoji: '😙' },
    { emoji: '😚' },
    { emoji: '😋' },
    { emoji: '😛' },
    { emoji: '😝' },
    { emoji: '😜' },
    { emoji: '🤪' },
    { emoji: '🤨' },
    { emoji: '🧐' },
    { emoji: '🤓' },
    { emoji: '😎' },
    { emoji: '🥸' },
    { emoji: '🤩' },
    { emoji: '🥳' },
    { emoji: '😏' },
    { emoji: '😒' },
    { emoji: '😞' },
    { emoji: '😔' },
    { emoji: '😟' },
    { emoji: '😕' },
    { emoji: '🙁' },
    { emoji: '😣' },
    { emoji: '😖' },
    { emoji: '😫' },
    { emoji: '😩' },
    { emoji: '🥺' },
    { emoji: '😢' },
    { emoji: '😭' },
    { emoji: '😤' },
    { emoji: '😡' },
    { emoji: '🤬' },
    { emoji: '🤯' },
    { emoji: '😳' }
]