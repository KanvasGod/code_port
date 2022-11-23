const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(`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`);

async function sendMessage(formAddIns) {
    const htmlToText = formAddIns.html.replace(/<(.|\n)*?>/g, '');
    const msg = {
        to: formAddIns.to,
        from: 'support@techcommute.com',
        subject: formAddIns.subject,
        text: htmlToText,
        html: formAddIns.html
    }
    let result = false 
    const mailer = await sgMail.send(msg).then(() => {
        result = true
    })
    .catch(error => {
        console.error(error);
    })
    return result
}

module.exports = {
    sendMessage
}