//npx playwright test tests/15intro.spec.js --headed
// @ts-check
const { test, expect } = require('@playwright/test');
//imported modules  
//{} because imported part of modules 


test('test1', async ({ page }) => { 
    //opening the link
    await page.goto('https://the-internet.herokuapp.com/tables');
    await page.waitForTimeout(3000);

    await page.locator("table[id='table1'] th:nth-child(4)").click();//weird locator but it worked!
    //get the array of values of fields with dollars
    let owedSums = await page.$$("(//tr/td)[4] | (//tr/td)[10] | (//tr/td)[16] | (//tr/td)[22]"); ///i got 4 elements but what if if have more?
    ///const elements = await page.$$('//tr/td[position() mod 6 = 0]'); // this can help select every 6th



    //get the string values from objects
    let sortedOwedSums = []; // make empty list for adding string values here
    for(let sum of owedSums) {
        let valueOfsum = await sum.textContent();
        sortedOwedSums.push(valueOfsum);
    }
    console.log(`Sorted owed sums with $ ${sortedOwedSums}`); //checking if we get the values  with $: output [ '$50.00', '$50.00', '$51.00', '$100.00' ]
    
    //clean the array from $character
    let newSorted = [];
    // @ts-ignore
    for (let sortedSum of sortedOwedSums){
        // @ts-ignore
        let newSortedValue = sortedSum.replace('$','');
        newSorted.push(newSortedValue);

    }
    console.log(`Sorted owed sums without $ ${newSorted}`)
    /// - outout [ '50.00', '50.00', '51.00', '100.00' ]


    //create flag, set it to true
    let sorted = true;
    for (let i=1; i < newSorted.length; i++){
        if (Number(newSorted[i-1]) > Number(newSorted[i]))
    {
        sorted = false;
    }
    expect(sorted).toBeTruthy(); ///should pass
    ///expect(sorted).toBeFalsy(); should fail
    }

    await page.waitForTimeout(3000);
});