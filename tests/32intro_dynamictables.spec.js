const { test, expect } = require('@playwright/test');

test('Verification of tables', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/?m=1");
    // try to get one cell
    let cellContent = await page.locator("(//tr//td)[32]").textContent();
    console.log(cellContent);
    
    // try to get conformation the table is visible
    let table = await page.locator("#taskTable");
    expect(table).toBeVisible();
    
    // try to print the content of the table
    let tableContent = await table.textContent();
    console.log('This is table content', tableContent);
    
    // try to count table headers
    const headers = (await table.locator('th').all()).length;
    console.log(headers); 
   
    // try to count table rows with header
    const rows = (await table.locator('tr').all()).length;
    console.log(rows);
    // try to count table rows without header
    const rowsOfTable = (await table.locator('tbody tr').all()).length;
    console.log(rowsOfTable);
    // finding row with target text
    const targetRow =  table.locator('tr', {hasText: 'Chrome'});
    await expect(targetRow).toBeVisible();  // Optional check
    // getting text from the table row which we need
    const rowText = await targetRow.textContent();
    console.log('Chrome row text:', rowText);
    console.log(typeof rowText);
    
    // receiving text under table 
    let textUnderTable = await page.locator("//div[@id='displayValues']/p[1]").textContent();
    console.log("Text under table", textUnderTable);
    console.log(typeof textUnderTable);
    // getting text from the string of the table which matches number with %
    let percentCPU1 = rowText.match(/(\d+(\.\d+)?|\.\d+)%/g);
    console.log('Percent CPU1',percentCPU1);
    // getting text from the string of the table which matches number with %
    let percentCPU2 = textUnderTable.match(/(\d+(\.\d+)?|\.\d+)%/g);
    console.log('Percent CPU2', percentCPU2);
    // assertion to confrim the texts are identical
    expect(percentCPU1).toEqual(percentCPU2);
    
});