export default {
  "/user": {
    "post": {
      "summary": "Cria um novo usuário",
      "description": "Cria um novo usuário com as informações fornecidas",
      "parameters": [
        {
          "in": "body",
          "name": "body",
          "description": "Objeto com as informações do usuário a ser criado",
          "required": true,
          "schema": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "password": {
                "type": "string"
              }
            }
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Usuário criado com sucesso",
          "schema": {
            "type": "object",
            "properties": {
              "token": {
                "type": "string",
                "description": "Token JWT para autenticação do usuário"
              }
            }
          }
        },
        "400": {
          "description": "Erro na validação dos campos",
          "schema": {
            "type": "object",
            "properties": {
              "errors": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "msg": {
                      "type": "string"
                    },
                    "param": {
                      "type": "string"
                    },
                    "location": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        },
        "500": {
          "description": "Erro na validação dos campos",
          "schema": {
            "type": "object",
            "properties": {
              "errors": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "msg": {
                      "type": "string"
                    },
                    "param": {
                      "type": "string"
                    },
                    "location": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}