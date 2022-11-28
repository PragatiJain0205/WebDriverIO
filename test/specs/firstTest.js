describe("Ecom Website",async()=>
{
    xit('Login fail page',async()=>{

        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining('Rahul')
        await $('#username').addValue('rahulshettyacademy') 
        await $('#password').addValue('learninjg') 
        await $("#signInBtn").click()
        await browser.waitUntil(async()=> await $('#signInBtn').getAttribute('value') == 'Sign In',
       
        { 

          timeout:5000,
          timeoutMsg: 'Error msg is not showing up'
      })
      //await browser.pause(2000)
      await console.log(await $("div[class='alert alert-danger col-md-12'] strong").getText())
      await expect($("//p[@class='text-center text-white']")).toHaveTextContaining('username is rahulshettyacademy and Password is learning')







})


xit('Login pass page',async()=>{

  await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
  console.log(await browser.getTitle())
  await expect(browser).toHaveTitleContaining('Rahul')
  await $('#username').addValue('rahulshettyacademy') 
  await $('#password').addValue('learning') 
  await $("#signInBtn").click()
  await browser.pause(30000)
  await $("//a[@class='nav-link btn btn-primary']").waitForExist()
  await expect(browser).toHaveUrlContaining("shop")
  console.log(await browser.getTitle())
  await expect(browser).toHaveTitle("ProtoCommerce")
 
 
//await browser.pause(2000)









})



})