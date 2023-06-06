const cursoValidator = {
    nome: {
        required : "Campo obrigatório" ,
        minLength: {
          value: 1,
          message: "O mínimo é 1"
         },
         maxLength: {
          value: 4,
          message: "O máximo é 4"
         }
      },
    duracao: {
        required: "Campo obrigatório" ,
        minLength: {
        value: 3,
        message: "O mínimo é 3"
        },
        maxLength: {
        value: 10,
        message: "O máximo é 10"
        } 
  },
  modalidade: { 
        required: "Campo obrigatório" ,
        minLength: {
        value: 3,
        message: "O mínimo é 3"
        },
        maxLength: {
        value: 10,
        message: "O máximo é 10"
        } 
  }
}


export default cursoValidator
