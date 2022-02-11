import { Selector } from 'testcafe';

const interfaceselect = Selector ('select#id_contact');
const interfaceOption = interfaceselect.find('option')
const emailAddress = Selector ("#email")
const orderReference = Selector ("#id_order")
const message = Selector ("#message")
const btnSend = Selector ("#submitMessage")


fixture("Contact Form")
    .page("http://automationpractice.com/index.php?controller=contact");

test ('contact Test', async t =>{
     await t 
     .click(interfaceselect)
     .click(interfaceOption.withText('Customer service'))
     .typeText(emailAddress, "test@test.com")
     .typeText(orderReference, "1234")
     .typeText(message, "this is my first automation test")
     .click(btnSend);
     



});