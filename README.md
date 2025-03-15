<h1 align="left">Imprimir Vaca Colorida</h1>

###

<p align="left">Este módulo simples exibe uma vaca ASCII colorida no terminal. Ele utiliza as bibliotecas `cows` para gerar a arte da vaca e `chalk` para colorir o texto.</p>

###

<h2 align="left">Tecnologias</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="40" alt="npm logo"  />
</div>

###

## Grupo

### Pietro Brandalise De Andrade - RM560142

###Ícaro Henrique de Souza Calixto - RM560278

###Caio Costa Beraldo - RM560775

###Victor Kenzo Mikado- RM560057

## Instalação

Para usar o módulo `imprimirVaca` em seu projeto, basta instalar o pacote:

```bash
npm install @pietroaandrade/module_npm_web
```

## Uso

Depois de instalar o pacote, você pode importá-lo e chamar a função `imprimirVaca` passando a cor desejada como argumento. A função exibirá a vaca ASCII colorida no terminal.

Exemplo de uso:

```javascript
import imprimirVaca from 'imprimirvaca';

imprimirVaca('green');
```

Se não for passada nenhuma cor, a vaca será exibida na cor padrão (azul).

### Exemplo de saída

- Se a cor for `green`:
  ```text
  (｡♥‿♥｡)  Aqui está sua vaca verde!
  __     __
  (o )____( o)
   ||      ||
  //\\     //\\
  ```

- Se a cor for `red`:
  ```text
  (｡♥‿♥｡)  Aqui está sua vaca vermelha!
  __     __
  (o )____( o)
   ||      ||
  //\\     //\\
  ```
## Importante

### Alterar o `type` no `package.json` para `module`

Para que o código funcione corretamente, você deve garantir que o seu projeto esteja configurado para usar módulos ES. Isso pode ser feito alterando o `type` para `module` no arquivo `package.json`:

```json
{
  "type": "module"
}
```

Isso permitirá o uso da sintaxe `import`/`export` no seu código.

## Dependências

Este módulo depende de duas bibliotecas externas:

- `cows`: Para gerar a arte ASCII da vaca.
- `chalk`: Para colorir a saída no terminal.

Você pode instalar essas dependências automaticamente ao instalar o pacote `imprimirvaca`, ou instalá-las separadamente:

```bash
npm install cows chalk
```
