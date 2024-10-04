# Ideia central → resumo

O dono de um restaurante local deseja refinar o sistema do mesmo, criando sugestões de pratos de acordo com o perfil do cliente.

2 parâmetros são considerados: se o cliente come apenas vegetais, e se ele está seguindo uma dieta.

Deve ser considerada a forma de pagamento no final do programa.

# Algoritmo

<aside>

1. Variáveis
    1. nome.
    2. vegetariano.
    3. dieta.
2. Entrada de dados → nome.
3. Entrada de dados (1 para sim, 2 para não) → vegetariano.
4. Entrada de dados (1 para sim, 2 para não) → dieta.
5. Espaçamento.
6. If (vegetariano de dieta) {Saída de dados (nome) sugestão: salada}.
7. Else if (não vegetariano de dieta) {Saída de dados (nome) sugestão: Frango grelhado}.
8. Else if (vegetariano sem dieta) {Saída de dados (nome) sugestão: Macarrão}.
9. Else if (não vegetariano sem dieta) {Saída de dados (nome) sugestão: Feijoada}.
10. Variável → forma de pagamento = entrada de dados (1 para dinheiro, 2 para cartão).
11. Switch (forma de pagamento)
12. caso 1: Saída de dados (”Você tem direito a 15% de desconto”);
13. quebra / break.
14. default:
15. Saída de dados (”Entrada inválida”);
16. quebra / break.

</aside>

# Código


![image](https://github.com/user-attachments/assets/4106dbee-dd74-4acb-8de1-2521739bae5c)


# Fluxo


![image](https://github.com/user-attachments/assets/4673b255-be27-4067-8a5a-e5d0ace6d59c)

