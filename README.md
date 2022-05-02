

![App Screenshot](https://warren.proway.com.br/assets/img/form-inscricao.png)


# Desafio Warren

Este repositório contém os desafios feitos pela proway para a empresa Warren.


## Tecnologias


+ JavaScript
+ NodeJS


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/victorfeldhaus/desafio-warren.git
```

Entre no diretório do projeto

```bash
  cd desafio-warren
```

## Desafio 01

Alguns números inteiros positivos n possuem uma propriedade na qual a soma de n + reverso(n) resultam em números ímpares. Por exemplo, 36 + 63 = 99 e 409 + 904 = 1313. Considere que n ou reverso(n) não podem começar com 0.

Existem 120 números reversíveis abaixo de 1000.

Construa um algoritmo que mostre na tela todos os números n onde a soma de n + reverso(n) resultem em números ímpares que estão abaixo de 1 milhão.


Para rodar o desafio utilize o seguinte código.

```bash
  node desafio01.js
```


## Desafio 02

Um professor de programação, frustrado com a falta de disciplina de seus alunos, decidi cancelar a aula se menos de x alunos estiverem presentes quando a aula for iniciada. O tempo de chegada varia entre:

Normal: tempoChegada <= 0
Atraso: tempoChegada > 0
Construa um algoritmo que dado o tempo de chegada de cada aluno e o limite x de alunos presentes, determina se a classe vai ser cancelada ou não ("Aula cancelada” ou “Aula normal”).

Exemplo:

Entrada de dados:
x = 3
tempoChegada = [-2, -1, 0, 1, 2]

Saída de dados:
Aula normal.

Explicação:
Os três primeiros alunos chegaram no horário. Os dois últimos estavam atrasados. O limite é de três alunos, portanto a aula não será cancelada.

Para rodar o desafio utilize o seguinte código.


```bash
  node desafio02.js
```

## Desafio 03

Dado um vetor de números e um número n. Determine a soma com o menor número de elementos entre os números do vetor mais próxima de n e também mostre os elementos que compõem a soma. Para criar a soma, utilize qualquer elemento do vetor uma ou mais vezes.

Exemplo:

Entrada de dados:

N = 10
V = [2, 3, 4]

Saída de dados:

10
[2, 4, 4]
[3, 3, 4]

Explicação:

Se N = 10 e V = [2, 3, 4] você pode utilizar as seguintes soma: [2, 2, 2, 2, 2], [2, 2, 3, 3], [2, 4, 4] ou [3, 3, 4]. Como a quantidade de elementos em [2, 4, 4] e [3, 3, 4] é igual, os dois conjuntos devem ser mostrados.


Para rodar o desafio utilize o seguinte código.

```bash
  node desafio03.js
```

## Autor
 Feito por Victor Mafra Feldhaus

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/victor-feldhaus-a449201a1/)
[![gmail](https://img.shields.io/badge/gmail-000?style=for-the-badge&logo=ko-fi&logoColor=white)](mailto:victorm.feldhaus@gmail.com)
[![instagram](https://img.shields.io/badge/instagram-1DA1F2?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/feldhausv/)





