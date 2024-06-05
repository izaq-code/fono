# 📂Documentação Fono


## Instalação do Sistema FONO em sua Máquina Local

### Passo 1: Clone o Repositório

1. Abra o terminal ou prompt de comando.
2. Navegue até o diretório onde deseja clonar o repositório.
3. Execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/izaq-code/fono.git
```

### Passo 2: Configurar o Servidor Web

1. Instale e configure um servidor web local, como XAMPP, WAMP ou MAMP, conforme sua preferência.
2. Se estiver utilizando o XAMPP, coloque a pasta clonada dentro da pasta `htdocs`. Para WAMP, coloque-a dentro da pasta `www`.
3. Inicie o servidor web.

### Passo 3: Configurar o Banco de Dados

1. Acesse o phpMyAdmin pelo navegador.
2. Crie um novo banco de dados chamado `fono`.
3. Importe o arquivo SQL fornecido para criar a estrutura do banco de dados e inserir dados iniciais, se necessário.

### Passo 4: Acessar o Sistema

1. Abra o navegador web de sua preferência.
2. Acesse o sistema digitando o seguinte endereço na barra de endereços:

```
localhost/fono/index.html
```

Isso deve levar você à página inicial do sistema FONO. Agora você pode começar a usar o sistema em sua própria máquina local!
```
Este guia fornece instruções claras sobre como baixar, configurar e acessar o sistema FONO em uma máquina local usando um servidor web e banco de dados MySQL.
```


 # *API de Cadastro do Google*  <img align="center" alt="PHP" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" />


A API de cadastro do Google, também conhecida como Google Sign-In API, é uma API oferecida pelo Google que permite que os desenvolvedores integrem facilmente a funcionalidade de autenticação com contas do Google em suas aplicações.

## *Funcionalidades Principais:* 
- Autenticação Simples e Conveniente: A API de cadastro do Google simplifica o processo de autenticação para os usuários, permitindo que eles façam login nos sistemas utilizando suas contas do Google, sem a necessidade de criar e lembrar de novos nomes de usuário e senhas.

- Segurança Reforçada: Ao utilizar a autenticação com contas do Google, os sistemas podem se beneficiar dos mecanismos de segurança robustos fornecidos pelo Google, incluindo verificação em duas etapas, detecção de atividade suspeita e outras camadas de segurança avançadas.

- Integração com Outros Serviços do Google: A API de cadastro do Google pode ser facilmente integrada com outros serviços do Google, como Google Analytics, Google Drive e Google Cloud Platform, permitindo uma experiência de usuário contínua e integrada em todo o ecossistema do Google.

# CRUD

CRUD é um acrônimo que representa as quatro operações básicas para manipulação de dados em sistemas de banco de dados ou aplicações:

- Create (Criar): Permite a criação de novos registros ou entradas de dados no sistema.

- Read (Ler): Permite a recuperação ou leitura de dados existentes no sistema.

- Update (Atualizar): Permite a atualização ou modificação de dados existentes no sistema.

- Delete (Excluir): Permite a exclusão de registros ou entradas de dados do sistema.
Essas operações formam a base para a gestão de dados em muitas aplicações, permitindo que os usuários criem, leiam, atualizem e excluam informações conforme necessário.


## Funcionalidades Principais

1. **Autenticação com Google API**
   - Permite que os usuários cadastrem e façam login no sistema utilizando suas contas do Google, proporcionando um processo de autenticação seguro e conveniente.

2. **Gerenciamento de Pacientes (CRUD)**
   - Oferece um conjunto completo de operações CRUD (Criar, Ler, Atualizar, Excluir) para os dados dos pacientes. Os profissionais podem cadastrar novos pacientes, visualizar seus dados, atualizar informações quando necessário e excluir registros obsoletos.

3. **Gerenciamento de Produtos (CRUD)**
   - Fornece funcionalidades semelhantes de CRUD para o cadastro e gestão de produtos. Isso permite que os profissionais mantenham um registro organizado dos produtos disponíveis em sua clínica ou consultório.

4. **Consulta de Experiência de Produtos**
   - Permite agendar consultas para experimentação de produtos específicos durante um período de 3 dias. Isso oferece aos pacientes a oportunidade de testar os produtos antes de decidir pela compra, aumentando a satisfação e a confiança do cliente.

5. **Relatório de Vendas**
   - Gera relatórios detalhados sobre as vendas realizadas no sistema.

## Tecnologias Utilizadas

O sistema FONO é desenvolvido utilizando as seguintes tecnologias:

- **JavaScript (AJAX e JSON)**: Utilizado para criar funcionalidades dinâmicas no front-end, permitindo uma experiência de usuário interativa e responsiva.
- **PHP Data Objects (PDO) e MySQLi**: Utilizados para estabelecer conexão e interação com o banco de dados MySQL. Essas tecnologias garantem a segurança e a eficiência no armazenamento e recuperação de dados do sistema.

Com uma ampla gama de funcionalidades e tecnologias modernas, o sistema FONO proporciona uma solução abrangente e eficiente para profissionais de fonodiologia em suas práticas clínicas.

