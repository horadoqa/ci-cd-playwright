# [![Testando Página de Login com Playwright via CI/CD](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=470&lines=Testando+P%C3%A1gina+de+Login+com+Playwright+via+CI%2FCD)](https://git.io/typing-svg)

<div align="center">
   <img src="./images/cicd.png">
</div>

Esses são os **8 passos do ciclo de vida do CI/CD** de acordo com a metodologia **DevOps**, que inclui as etapas principais de planejamento até a medição de resultados. Cada uma dessas fases desempenha um papel importante na criação, implantação e monitoramento de software de forma contínua. Vou explicar cada uma delas:

1. **Plan (Planejar)**:
   - **Objetivo**: Definir o que será desenvolvido, quais funcionalidades ou correções são necessárias e como o desenvolvimento será abordado.
   - **Atividades**: Durante essa fase, as equipes de desenvolvimento e de operações planejam o que precisa ser feito, definem prioridades, e estabelecem o escopo do trabalho. É aqui que o planejamento do projeto, as histórias de usuário e as tarefas são discutidos.

   <div align="center">
      <img src="./images/login.png">
   </div>

2. **Code (Codificar)**:
   - **Objetivo**: Escrever o código da aplicação ou realizar modificações necessárias para implementar as funcionalidades planejadas.
   - **Atividades**: Desenvolvedores escrevem o código para novas funcionalidades, correções de bugs ou melhorias. O código é versionado usando sistemas de controle, como Git, para manter o histórico e permitir colaboração eficiente.

   [Código](./site/)

3. **Build (Construir)**:
   - **Objetivo**: Compilar o código e preparar o ambiente para testes.
   - **Atividades**: O código é compilado e as dependências são resolvidas, criando um artefato executável ou pacote. O processo de *build* também inclui a execução de testes automáticos, como testes unitários, para garantir que o código não quebre o sistema.

   Utilizando o Live Server

4. **Test (Testar)**:
   - **Objetivo**: Garantir que o código funcione conforme o esperado e que não introduza bugs no sistema.
   - **Atividades**: Durante essa fase, são realizados testes automatizados, como testes de integração, testes de regressão e testes de aceitação. O código é validado em várias condições para garantir que ele funcione corretamente.

   > Executando o teste local

   Validando os borwsers `chromium`, `webkit` e `firefox`

      ```bash
      npx playwright test
      ```

   Definindo um Browser

      ```bash
      npx playwright test --project=chromium
      ```

5. **Release (Liberar)**:
   - **Objetivo**: Preparar o código para ser implantado em ambientes de produção.
   - **Atividades**: A liberação é o processo de empacotar o código final, criando versões estáveis que estarão prontas para implantação. Durante essa fase, a equipe pode preparar o código para ser promovido para o ambiente de produção ou testes finais, como testes de aceitação do usuário (UAT).

6. **Deploy (Implantar)**:
   - **Objetivo**: Colocar o código em produção para que os usuários possam acessá-lo.
   - **Atividades**: A aplicação é implantada no ambiente de produção, onde será usada pelos clientes ou usuários finais. Essa implantação pode ser feita de forma manual ou automatizada, com a utilização de pipelines CI/CD, dependendo da estratégia de deploy adotada pela equipe.

   > Utilizando o Github Pages: [https://horadoqa.github.io/ci-cd-playwright/](https://horadoqa.github.io/ci-cd-playwright/)

7. **Operate (Operar)**:
   - **Objetivo**: Garantir que o sistema esteja funcionando de forma eficiente e monitorada após a implantação.
   - **Atividades**: Nessa fase, a aplicação é monitorada para detectar falhas, erros ou problemas de desempenho. Ferramentas de monitoramento e logs são usadas para garantir que o sistema opere corretamente em produção. A equipe de operações mantém o sistema em funcionamento e realiza ajustes conforme necessário.

   Utilizando o Github Actions

8. **Measure (Medir)**:
   - **Objetivo**: Avaliar o desempenho da aplicação e do processo de desenvolvimento para melhorar continuamente.
   - **Atividades**: Coletar métricas de desempenho, como tempo de resposta, taxa de erros e satisfação do usuário. Além disso, a equipe coleta dados sobre a eficiência do processo CI/CD, como tempo de implantação, taxa de falhas de testes e tempo para corrigir bugs. Com essas informações, as equipes podem fazer melhorias no ciclo de vida do software.

Esses oito passos refletem um ciclo contínuo de desenvolvimento, onde a medição e os feedbacks ajudam a aprimorar as etapas anteriores, resultando em um processo de entrega mais rápido, seguro e eficiente.

