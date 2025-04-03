const { test, expect, chromium, firefox, webkit } = require('@playwright/test');

// Definindo a variável para o tempo de espera
const TIMEOUT = 2000;

// Reutilizando a navegação antes de cada teste
test.beforeEach(async ({ page }) => {
  // Garantir que o navegador seja fechado após cada teste
  await page.close();
});

test('1 - Campo Vazio', async () => {
    const browser = await webkit.launch(); // Lançar WebKit
    const page = await browser.newPage();  // Criar uma nova página
    await page.goto('https://horadoqa.github.io/login/');  // Navegar para a URL
    await expect(page).toHaveTitle(/Hora do QA/);  // Verificar o título

    // Preenche os campos do formulário (deixando vazios)
    await page.fill('#username', '');
    await page.fill('#password', '');
    
    // Clica no botão "Entrar"
    await page.click('button:has-text("Entrar")');
    
    // Espera e verifica a mensagem de erro
    const errorMessage = await page.locator('#error-message');
    await expect(errorMessage).toHaveText('E-mail e senha são obrigatórios!');

    await browser.close();  // Fecha o navegador após o teste
});

test('2 - E-mail Válido e Senha Inválida', async () => {
    const browser = await webkit.launch();  // Lançar WebKit
    const page = await browser.newPage();   // Criar uma nova página
    await page.goto('https://horadoqa.github.io/login/');
    await expect(page).toHaveTitle(/Hora do QA/);

    // Preenche os campos do formulário
    await page.fill('#username', 'usuario@example.com');
    await page.fill('#password', 'abcd1234');
    
    // Clica no botão "Entrar"
    await page.click('button:has-text("Entrar")');
    
    // Espera e verifica a mensagem de erro
    const errorMessage = await page.locator('#error-message');
    await expect(errorMessage).toHaveText('E-mail ou senha inválidos!');

    await browser.close();  // Fecha o navegador após o teste
});

test('3 - E-mail Inválido e Senha Válida', async () => {
    const browser = await webkit.launch();  // Lançar WebKit
    const page = await browser.newPage();   // Criar uma nova página
    await page.goto('https://horadoqa.github.io/login/');
    await expect(page).toHaveTitle(/Hora do QA/);

    // Preenche os campos do formulário
    await page.fill('#username', 'usuarioexample.com');
    await page.fill('#password', '1q2w3e4r');
    
    // Clica no botão "Entrar"
    await page.click('button:has-text("Entrar")');
    
    // Espera e verifica a mensagem de erro
    const errorMessage = await page.locator('#error-message');
    await expect(errorMessage).toHaveText('E-mail ou senha inválidos!');

    await browser.close();  // Fecha o navegador após o teste
});

test('4 - Ambos Inválidos', async () => {
    const browser = await webkit.launch();  // Lançar WebKit
    const page = await browser.newPage();   // Criar uma nova página
    await page.goto('https://horadoqa.github.io/login/');
    await expect(page).toHaveTitle(/Hora do QA/);

    // Preenche os campos do formulário
    await page.fill('#username', 'usuarioexample.com');
    await page.fill('#password', 'abcd1234');
    
    // Clica no botão "Entrar"
    await page.click('button:has-text("Entrar")');
    
    // Espera e verifica a mensagem de erro
    const errorMessage = await page.locator('#error-message');
    await expect(errorMessage).toHaveText('E-mail ou senha inválidos!');

    await browser.close();  // Fecha o navegador após o teste
});

test('5 - Ambos Válidos', async () => {
    const browser = await webkit.launch();  // Lançar WebKit
    const page = await browser.newPage();   // Criar uma nova página
    await page.goto('https://horadoqa.github.io/login/');
    await expect(page).toHaveTitle(/Hora do QA/);

    // Preenche os campos do formulário
    await page.fill('#username', 'usuario@example.com');
    await page.fill('#password', '1q2w3e4r');
    
    // Clica no botão "Entrar"
    await page.click('button:has-text("Entrar")');
    
    // Clica no link do YouTube
    await page.click('a.youtube-button');
    
    // Verifica a URL do YouTube
    await expect(page).toHaveURL('https://www.youtube.com/@horadoqa');

    await browser.close();  // Fecha o navegador após o teste
});