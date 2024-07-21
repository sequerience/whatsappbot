const WhatsappWebService = require('../Services/WhatsappWebService')

exports.sendMessage = async (req, res) => {
    const {phone, code} = req.body

    try {
        await WhatsappWebService.sendMessage(phone, code)

        return  res.send({
            message: 'Successfully sent'
        })
    }catch (e){
        return  res.status(422).send({
            message: `User with this phone number ${phone} not found`
        })
    }
}
