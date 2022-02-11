import { Selector } from 'testcafe';

const interfaceselect = Selector ('select#id_contact');
const interfaceOption = interfaceselect.find('option')
const emailAddress = Selector ("#email")
const orderReference = Selector ("#id_order")
const fileUpload = Selector ("#fileUpload")
const message = Selector ("#message")
const btnSend = Selector ("#submitMessage")


// inject global configuration in the fixture context

fixture("Contact Form")
    .page("http://automationpractice.com/index.php?controller=contact");

test ('Fill Contact Form', async t =>{
     await t 
     .click(interfaceselect)
     .click(interfaceOption.withText('Customer service'))
     .typeText(emailAddress, "test@test.com")
     .typeText(orderReference, "1234")
     .setFilesToUpload(fileUpload, '../../upload/QA.jpg')
     .typeText(message, "this is my first automation test")
     .click(btnSend);
     
})