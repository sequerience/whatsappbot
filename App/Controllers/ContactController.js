const WhatsappWebService = require('../Services/WhatsappWebService')

exports.getContactByPhone = async (req, res) => {
    const {phone} = req.params

    try {
        const contact = await WhatsappWebService.getContact(phone)

        res.send(contact)
    }catch (e){
        console.log('e', e)
        return  res.status(422).send({
            message: `User with this phone number ${phone} not found`
        })
    }
}