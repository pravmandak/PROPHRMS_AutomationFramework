const {test,expect}=require('@playwright/test');

test.only('Handling Framews', async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

const totalFramew = page.frames();  //it will count how many frames are there in the page
console.log('Total number of frames:', totalFramew.length);


const checkBox1 = await page.locator('#checkBoxOption1');  // Let me know by using play.....

await expect(checkBox1).toBeVisible();


const frameName = page.frameLocator('#courses-iframe');

await frameName.getByText('Register').click();

const frame1 = page.frameLocator('#mod1');
const frame2 = page.frameLocator('#mod2');



})



