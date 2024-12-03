
# Laboratório - Padrão Factory Method em TypeScript

## Objetivo

Este projeto tem como objetivo implementar o padrão de projeto **Factory Method** para o gerenciamento de diferentes tipos de arquivos (PDF, DOCX, XLSX e TXT). A ideia é demonstrar como a criação de objetos pode ser delegada a subclasses, garantindo que cada tipo de arquivo seja tratado de forma adequada.

## Descrição

Este repositório contém a implementação de um sistema de gerenciamento de arquivos em **TypeScript**. A aplicação permite criar e manipular arquivos de diferentes tipos usando o padrão de projeto **Factory Method**. O sistema foi estruturado da seguinte forma:

1. **Produto Abstrato**: A interface `File` define métodos para abrir e salvar arquivos.
2. **Produtos Concretos**: As classes `FilePDF`, `FileDOCX`, `FileXLSX` e `FileTXT` implementam a interface `File`, cada uma com uma implementação específica para os métodos `open()` e `save()`.
3. **Criador Abstrato**: A classe abstrata `FileFactory` possui o método `createFile()` que deve ser implementado pelas fábricas concretas. Também possui o método `manageFile()`, que utiliza o `createFile()` para abrir e salvar os arquivos.
4. **Criadores Concretos**: As classes `FilePDFFactory`, `FileDOCXFactory`, `FileXLSXFactory` e `FileTXTFactory` implementam o método `createFile()` para retornar instâncias específicas de cada tipo de arquivo.

## Estrutura do Projeto

```plaintext
src/
├── controllers/
│   └── File.controller.ts
├── factories/
│   ├── FileFactory.ts
│   ├── FilePDFFactory.ts
│   ├── FileDOCXFactory.ts
│   ├── FileXLSXFactory.ts
│   └── FileTXTFactory.ts
├── models/
│   ├── File.model.ts
│   ├── FilePDF.model.ts
│   ├── FileDOCX.model.ts
│   ├── FileXLSX.model.ts
│   └── FileTXT.model.ts
├── routes/
|   └── File.routes.ts
└── server.ts
```

## Requisitos

1. **Produto Abstrato**: Crie uma interface `File` com os seguintes métodos:
   - `open(): void`
   - `save(): void`
   
2. **Produtos Concretos**: Implemente as classes `FilePDF`, `FileDOCX`, `FileXLSX` e `FileTXT` que implementam a interface `File`, com implementações específicas dos métodos `open()` e `save()`.

3. **Criador Abstrato**: Crie uma classe abstrata `FileFactory` com o método abstrato `createFile()`, além do método público `manageFile()` que utiliza `createFile()` para abrir e salvar arquivos.

4. **Criadores Concretos**: Crie as subclasses `FilePDFFactory`, `FileDOCXFactory`, `FileXLSXFactory` e `FileTXTFactory` que implementam o método `createFile()` para retornar instâncias específicas de `File`.

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/eurodriguesg/file_management_factory_method.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Para rodar o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

4. O servidor estará disponível em `http://localhost:31063` ou na próxima porta disponível que o servidor encontrar.

## Documentação da API

### Endpoints

- **POST /file/:type** - Cria e gerencia um arquivo de um tipo específico.
  
  **Parâmetros:**
  - `type`: Tipo do arquivo a ser criado (pdf, docx, xlsx, txt).

  **Resposta de Sucesso:**
  - Status: `200 OK`
  - Corpo:
    ```json
    {
      "message": "File created and managed successfully",
      "type": "pdf"
    }
    ```

  **Resposta de Erro (tipo de arquivo inválido):**
  - Status: `500 Internal Server Error`
  - Corpo:
    ```json
    {
      "message": "Invalid file type"
    }
    ```

### Exemplo de Requisição

**Requisição:**
```bash
POST http://localhost:3000/file/pdf
```

**Resposta (sucesso):**
```json
{
  "message": "File created and managed successfully",
  "type": "pdf"
}
```

## Arquivos e Funções

- **FileFactory.ts**: Implementa o padrão Factory Method e as fábricas para cada tipo de arquivo.
- **File.controller.ts**: Controlador que gerencia as requisições e interage com a fábrica para criar e gerenciar arquivos.
- **File.model.ts**: Define a interface `File` e as implementações concretas para cada tipo de arquivo (PDF, DOCX, XLSX, TXT).

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).