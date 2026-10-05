'use strict';

/*
DOM 04 — CALCULADORA

A interface já está pronta.
Você deve implementar SOMENTE este arquivo.

O QUE A CALCULADORA PRECISA FAZER

1. NÚMEROS
- Existem botões com a classe .numero.
- Ao clicar em um número, leia o número escrito no próprio botão.
- O visor começa mostrando 0.
- Se o usuário clicar em 1, depois 2 e depois 3, o visor deve mostrar 123.
- Quando começar a digitar o segundo número, ele deve substituir o valor anterior no visor.

2. OPERAÇÕES
- Existem botões com a classe .operador.
- O símbolo da operação está escrito no próprio botão:
  +  −  ×  ÷
- Ao clicar em uma operação:
  a) guarde o número que está no visor;
  b) guarde qual operação foi escolhida;
  c) atualize #operacao-anterior;
  d) prepare o visor para receber o segundo número.
- Use a classe .is-selected para destacar o operador escolhido.
- Apenas um operador deve ficar destacado.

3. IGUAL
- O botão #btn-igual deve:
  a) ler o segundo número;
  b) realizar a operação que foi guardada;
  c) mostrar o resultado no #visor.
- Depois do resultado, o usuário deve conseguir começar outro cálculo.

4. LIMPAR
- O botão #btn-limpar deve:
  a) colocar 0 no visor;
  b) limpar #operacao-anterior;
  c) apagar os valores que estavam guardados;
  d) remover .is-selected dos operadores;
  e) deixar o status como "Pronta".

5. ERROS
- Não permita divisão por zero.
- Nesse caso:
  a) mostre "Erro" no visor;
  b) escreva "Divisão por zero" em #operacao-anterior;
  c) adicione .is-error em #status.
- O botão C deve recuperar a calculadora do erro.

SIMPLIFICAÇÕES DESTA ATIVIDADE
- Trabalhe somente com números inteiros.
- Não precisa aceitar números negativos.
- Não precisa fazer várias operações encadeadas.
- Cada cálculo pode seguir este fluxo:
  primeiro número → operação → segundo número → =
- Não precisa controlar a calculadora pelo teclado.

COMO SELECIONAR OS BOTÕES
Você pode usar:
- document.querySelectorAll('.numero')
- document.querySelectorAll('.operador')
- document.querySelector('#btn-igual')
- document.querySelector('#btn-limpar')

Para descobrir qual número ou operação foi clicado,
leia o textContent do botão.

EXEMPLOS DE COMPORTAMENTO ESPERADO
- clicar 1, 2, +, 3, =  → visor mostra 15
- clicar 9, −, 4, =     → visor mostra 5
- clicar 6, ×, 7, =     → visor mostra 42
- clicar 8, ÷, 2, =     → visor mostra 4
- clicar C               → visor volta para 0

Não altere index.html nem styles.css.
*/

// Escreva sua solução abaixo.
