const { test, expect, chromium } = require('@playwright/test');

const TIMEOUT = 2000;

test.beforeEach(async ({ page }) => {
  await page.close();
});

test('1 - Campo Vazio', async () => {
    
    // const browser = await webkit.launch();  // Lançar WebKit
    // const browser = await firefox.launch();  // Lançar Firefox
    const browser = await chromium.launch(); // Lançar Chromium
    const page = await browser.newPage();   // Criar uma nova página

    await page.goto('https://horadoqa.github.io/ci-cd-playwright/');
    await expect(page).toHaveTitle(/Hora do QA/);

    await page.fill('#username', '');
    await page.fill('#password2', '');
    
    await page.click('#button');
    
    const errorMessage = await page.locator('#error-message');
    await expect(errorMessage).toHaveText('E-mail e senha são obrigatórios!');

    await browser.close();
});

test('2 - E-mail Válido e Senha Inválida', async () => {

    // const browser = await webkit.launch();  // Lançar WebKit
    // const browser = await firefox.launch();  // Lançar Firefox
    const browser = await chromium.launch(); // Lançar Chromium
    const page = await browser.newPage();   // Criar uma nova página

    await page.goto('https://horadoqa.github.io/ci-cd-playwright/');
    await expect(page).toHaveTitle(/Hora do QA/);

    await page.fill('#username', 'usuario@example.com');
    await page.fill('#password2', 'abcd1234');
    
    await page.click('#button');
    
    const errorMessage = await page.locator('#error-message');
    await expect(errorMessage).toHaveText('E-mail ou senha inválidos!');

    await browser.close();
});

test('3 - E-mail Inválido e Senha Válida', async () => {
    
    // const browser = await webkit.launch();  // Lançar WebKit
    // const browser = await firefox.launch();  // Lançar Firefox
    const browser = await chromium.launch(); // Lançar Chromium
    const page = await browser.newPage();   // Criar uma nova página

    await page.goto('https://horadoqa.github.io/ci-cd-playwright/');
    await expect(page).toHaveTitle(/Hora do QA/);

    await page.fill('#username', 'usuarioexample.com');
    await page.fill('#password2', '1q2w3e4r');
    
    await page.click('#button');
    
    const errorMessage = await page.locator('#error-message');
    await expect(errorMessage).toHaveText('E-mail inválido!');

    await browser.close();
});

test('4 - Ambos Inválidos', async () => {

    // const browser = await webkit.launch();  // Lançar WebKit
    // const browser = await firefox.launch();  // Lançar Firefox
    const browser = await chromium.launch(); // Lançar Chromium
    const page = await browser.newPage();   // Criar uma nova página

    await page.goto('https://horadoqa.github.io/ci-cd-playwright/');
    await expect(page).toHaveTitle(/Hora do QA/);

    await page.fill('#username', 'usuarioexample.com');
    await page.fill('#password2', 'abcd1234');
    
    await page.click('#button');
    
    const errorMessage = await page.locator('#error-message');
    await expect(errorMessage).toHaveText('E-mail inválido!');

    await browser.close();
});

test('5 - Ambos Válidos', async () => {

    // const browser = await webkit.launch();  // Lançar WebKit
    // const browser = await firefox.launch();  // Lançar Firefox
    const browser = await chromium.launch(); // Lançar Chromium
    const page = await browser.newPage();   // Criar uma nova página

    await page.goto('https://horadoqa.github.io/ci-cd-playwright/');
    await expect(page).toHaveTitle(/Hora do QA/);

    await page.fill('#username', 'usuario@example.com');
    await page.fill('#password2', '1q2w3e4r');
    
    await page.click('#button');
    
    await page.click('//*[@id="contato"]/div/a[2]/i');
    
    await expect(page).toHaveURL('https://www.youtube.com/@horadoqa');

    await browser.close();
});