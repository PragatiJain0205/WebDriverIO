const loginpage = require('../PageObject/LoginPage.js')
const fs =require('fs')
let credentials = JSON.parse(fs.readFileSync('test/testData/LoginTestData.json'))

describe("Ecom Website",async()=>
{
    credentials.forEach( ({username, password})=> {

    it('Login fail page',async()=>{

        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining('Rahul')
        await loginpage.Login(username,password)
        await browser.waitUntil(async()=> await loginpage.signIn.getAttribute('value') == 'Sign In',
       {
          timeout:5000,
          timeoutMsg: 'Error msg is not showing up'
      })

      await console.log(await loginpage.alert.getText())
      await expect(loginpage.textInfo).toHaveTextContaining('username is rahulshettyacademy and Password is learning')
      await browser.pause(3000);
    

})

})

// xit('Login pass page',async()=>{

//  await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
//  console.log(await browser.getTitle())
//  await expect(browser).toHaveTitleContaining('Rahul')
//  await loginpage.Login('rahulshettyacademy','learning')
//  await browser.pause(3000)
//  await $("//a[@class='nav-link btn btn-primary']").waitForExist()
//  await expect(browser).toHaveUrlContaining("shop")
//  console.log(await browser.getTitle())
//  await expect(browser).toHaveTitle("ProtoCommerce")
// })



})
