const {Client, LocalAuth} = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

module.exports = class WhatsappWebService {
    static #instance = null

    static instance() {
        if (this.#instance) return this.#instance

        const client = this.#instance = new Client({
            authStrategy: new LocalAuth({
                clientId: "client-one"
            }),
            puppeteer: {
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            }
        });

        this.#listener()

        return this.#instance
    }

    static #listener() {
        this.#instance.on('qr', qr => {
            qrcode.generate(qr, {small: true});
        });

        this.#instance.on('ready', () => {
            console.log('Client is ready!');
        });

        this.#instance.on('message', message => {
            console.log('message', message)
        })

        this.#instance.initialize();
    }

    static client() {
        return this.#instance
    }

    static async sendMessage(phone, message) {
        const contact = await this.client().getNumberId(phone)

        return this.client().sendMessage(contact._serialized, message)
    }

    static async getContact(phone) {
        const contact = await this.client().getNumberId(phone)

        return this.client().getContactById(contact._serialized)
    }

}
