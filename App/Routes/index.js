const {sendMessageRequest} = require("../Requests/SendMessageRequest");
const {getContactRequest} = require("../Requests/GetContactRequest");
const MessageController = require('../Controllers/MessageController')
const ContactController = require('../Controllers/ContactController')

module.exports = app => {

    app.post('/send-message', sendMessageRequest, MessageController.sendMessage)

    app.get('/contact/:phone', getContactRequest,  ContactController.getContactByPhone)
}