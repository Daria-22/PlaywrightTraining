// const {expect, test} = require('@playwright/test');


// test("Count tasks", async ({page, context})=> {
//     // set the tasks number to be added
//     let taskCount = 6;
    
//     // make an array of tasks, 6 items
//     let arrayOfTasks = ["Do lesson for revision", "Mark payments", "Walk", "Arrange meeting with GP", "Order contact lenses", "Consult a lawer"]
    
//     // clear cookies - not sure they are cleared - ask Vitaliy
    
//     await page.goto("https://sky-todo-list.herokuapp.com/", { waitUntil: 'load'});
//     //await context.clearCookies();
//     //await context.clearPermissions();
//     await page.reload();
    
//     let numberOfRows = await page.locator("//*[@data-icon='trash']").count();
//     console.log(numberOfRows);

//     if (numberOfRows > 0){
//      for(let row = 0; row < numberOfRows; row++) {
//      await page.locator("//*[@data-icon='trash']").click()
//      } 
//     else {

//     // input the tasks
//     for (let i=0; i<taskCount;i++) {
//         await page.locator(".input[type$='text']").fill(arrayOfTasks[i]);
//         await page.locator(".button.is-primary").click();
//         await page.waitForTimeout(3000);
//          }
//     }
    
//     let count = await page.locator('tbody > tr').count();
//     console.log(count);

//     expect(count).toBe(6);
//     await expect(page.locator('tbody > tr')).toHaveText(["Do lesson for revision", "Mark payments", "Walk", "Arrange meeting with GP", "Order contact lenses", "Consult a lawer"]);

//  }
// });


const { expect, test } = require('@playwright/test');

test("Count tasks", async ({ page }) => {
    const taskCount = 6;

    const arrayOfTasks = [
        "Do lesson for revision",
        "Mark payments",
        "Walk",
        "Arrange meeting with GP",
        "Order contact lenses",
        "Consult a lawyer"
    ];

    // Visit the page
    await page.goto("https://sky-todo-list.herokuapp.com/", { waitUntil: 'load' });
    
    await page.waitForSelector("//tr"); // giving time for selector to appear, did not work without it!

    // Delete existing tasks
    let itemsForDeleteing = await (page.locator("//tr")).count();  // checking how many lines are in 'To-do list'
    
    //let numberOfRows = await deleteButtons.count();
    console.log(`${itemsForDeleteing} lines for deleteing`);

    let deleteButtonsNumber = await (page.locator('//*[@data-icon="trash"]')).count();
    console.log(`${deleteButtonsNumber} buttons 'Delete'`);

    if (deleteButtonsNumber > 0) {
        for (let rowindex = 0; rowindex < deleteButtonsNumber; rowindex++) {
            await page.locator(`(//*[@data-icon="trash"])[${rowindex+1}]`).click(); // Always click the first one because the list updates after each delete
            console.log("Now buttons for deleting", deleteButtonsNumber)
        }
    }

    // Add tasks
    for (let i = 0; i < taskCount; i++) {
        await page.locator("input[type='text']").fill(arrayOfTasks[i]);
        await page.locator(".button.is-primary").click();
        await page.waitForTimeout(500); // 3000ms was too long, 500ms is usually enough
    }

    //Validate task count
    const rows = page.locator('tbody > tr');
    await expect(rows).toHaveCount(taskCount);

    // Validate task texts
    for (let i = 0; i < taskCount; i++) {
        await expect(rows.nth(i)).toContainText(arrayOfTasks[i]);
    }
});