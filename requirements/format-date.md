# Formatar Data

> ## Caso de sucesso

1. ⛔️ Recebe uma requisição do tipo **POST** na rota **/api/date/format**
2. ⛔️ Valida se dados obrigatórios **date** e **format** foram fornecidos no corpo da requisição.
3. ⛔️ Valida se a data e formato fornecidos são válidos
4. ⛔️ **Realiza** a formatação da data de acordo com padrão solicitado.
5. ⛔️ Retorna **200**, com a data formatada

> ## Exceções

1. ⛔️ Retorna erro **404** se a API não existir
3. ⛔️ Retorna erro **400** se **date** e **format** não forem fornecidos pelo client
3. ⛔️ Retorna erro **400** se **date** e **format** não possuírem formatos válidos
4. ⛔️ Retorna erro **500** se ocorrer um erro ao formatar a data

> ## Legenda:

* ✅: concluído
* ⛔️: pendente