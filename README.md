# Homenagem de aniversário

Site estático feito com HTML, CSS e JavaScript, pronto para GitHub Pages.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub (pode ser público).
2. Envie **todos** os arquivos e a pasta `assets` para a raiz do repositório.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/(root)`, depois salve.
6. Aguarde alguns minutos e abra o endereço informado pelo GitHub.

O arquivo `index.html` precisa ficar na raiz do repositório. Não renomeie nem separe a pasta `assets`.

## Personalizar
- As fotos estão em `assets/`.
- As legendas de cada foto ficam no array `photos` em `script.js`.
- Os textos principais ficam em `index.html`.
- A data no topo pode ser alterada no `index.html`.


## Contagem regressiva e mensagem automática no Discord

O site já inclui uma contagem até **25/11/2026 às 00:00 no horário de Brasília**. Ela funciona no navegador, mas não dispara o Discord sozinha.

Para o envio automático:
1. Publique o site no GitHub Pages primeiro.
2. No repositório, abra **Settings → Secrets and variables → Actions**.
3. Clique em **New repository secret**.
4. Nome: `DISCORD_WEBHOOK_URL`.
5. Valor: cole a URL do webhook do canal do Discord e salve.
6. Envie também a pasta `.github/workflows` para a raiz do repositório (ela está incluída neste ZIP).
7. Em **Actions**, confira se os workflows estão habilitados.

O workflow calcula o endereço padrão do GitHub Pages a partir do nome do repositório e envia esse link ao Discord. Se você usa domínio personalizado, será necessário ajustar `SITE_URL` no arquivo `.github/workflows/discord-birthday.yml`.

**Importante:** o agendamento está configurado para 03:00 UTC, equivalente a 00:00 em Brasília em 25/11/2026. O GitHub Actions não garante execução no segundo exato; tarefas agendadas podem atrasar alguns minutos. O workflow tem uma proteção para não enviar em outros anos. Não clique em “Run workflow” manualmente antes da data, pois a proteção da data impede o envio fora de 25/11/2026.
