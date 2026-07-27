# 🎓 Passei+

Aplicação web desenvolvida em **Angular** para calcular a média semestral de estudantes de forma rápida, simples e intuitiva.

O sistema utiliza as notas da **AV1**, **AV2**, **AV3** e **EDAG**, considerando o peso de cada avaliação, e apresenta a média final e a situação do estudante.

## 📌 Sobre o projeto

O **Passei+** foi criado para facilitar o cálculo da média do semestre e ajudar o estudante a acompanhar seu desempenho acadêmico.

A aplicação possui uma interface responsiva, valida os valores informados e exibe o resultado com uma nota aproximada, uma nota detalhada e uma mensagem de status.

## ✨ Funcionalidades

- Inserção das notas de cada avaliação;
- Validação de notas entre **0 e 10**;
- Cálculo automático da média ponderada;
- Exibição da média aproximada;
- Exibição da média com casas decimais;
- Identificação da situação do estudante;
- Cálculo de notas necessárias para aprovação direta em cada avaliação
- Cálculo de nota necessária na avaliação final
- Interface responsiva para computadores e dispositivos móveis;
- Atualização dinâmica das informações exibidas.

## 🧮 Cálculo da média

A média semestral é calculada utilizando os seguintes pesos:

| Avaliação | Peso |
|---|---:|
| AV1 | 25% |
| AV2 | 25% |
| AV3 | 30% |
| EDAG | 20% |

A fórmula utilizada é:

```text
Média = (AV1 × 0,25) + (AV2 × 0,25) + (AV3 × 0,30) + (EDAG × 0,20)
```

## 🛠️ Tecnologias utilizadas

- Angular
- TypeScript
- HTML
- CSS
- Reactive Forms

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, tenha instalado:

- Node.js
- npm
- Angular CLI

### Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd PasseiSenai
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
ng serve
```

Acesse no navegador:

```text
http://localhost:4200
```

## 📦 Gerar versão de produção

Para gerar os arquivos de produção:

```bash
ng build
```

Os arquivos compilados serão criados na pasta `docs/`.

### Publicação no GitHub Pages

```bash
ng build --base-href /PasseiSenai/ --deploy-url /PasseiSenai/
```


## 📁 Estrutura principal

```text
src/
├── app/
│   ├── components/
│   │   ├── formulario/
│   │   ├── item-formulario/
│   │   ├── media-semestre/
│   │   ├── header/
│   │   └── footer/
│   ├── pages/
│   │   └── calculadora.page/
│   ├── helper/
│   └── model/
├── public/
└── index.html
```

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e aprendizado.

---

Desenvolvido com dedicação para tornar o cálculo de notas mais simples. 🎓
