const professorValidator = {
    nome : { 
        required: "O campo de nome é obrigatorio",
        minLength: {
            value: 3,
            message: "O mínimo é 3"
           },
           maxLength: {
            value: 200,
            message: "O máximo é 200"
           }
    },
    cpf: {
        required: "O campo de cpf é obrigatorio",
        maxLength: {
            value: 11,
            message: "O máximo é 11 digitos"
           },
           minLength: {
            value: 11,
            message: "O minimo é 11 digitos"
           },
           max: {
            value: 99999999999,
            message: "O valor maximo para um cpf é 99999999999"
           },
    },
    matricula: {
        required: "O campo de matricula é obrigatorio",
        maxLength: {
            value: 4,
            message: "O máximo é 4 digitos"
           },
           minLength: {
            value: 14,
            message: "O minimo é 4 digitos"
           },
           max: {
            value: 9999,
            message: "O valor maximo para uma matricula é 9999"
           },
    },
    salario : {
        required: "O campo salario é obrigatorio"
    },
    email: {
        required: "O campo de email é obrigatorio"
    },
    telefone: {
        required: "O campo de telefone é obrigatorio",
        minLength: {
            value: 10,
            message: "Digite um telefone válido com DD"
           },
    },
    cep : {
        required: "O campo de cep é obrigatorio",
        minLength: {
            value: 10,
            message: "Digite um telefone válido com DD"
           },
           maxLength: {
            value: 10,
            message: "Digite um telefone válido com DD"
           },
    },
    logradouro: {
        required: "O campo de logradouro é obrigatorio",
        minLength : { 
            value: 5,
            message: "Digite um logradouro"
        }
    }, 
    complemento: {

    },
    numero: {
        max: {
            value: 9999,
            message: "O valor maximo do numero é 9999"
        },
        min: {
            value: 1,
            messager: "O valor minimo do numero é 1"
        } 
    },
    bairro : {
        required: "O campo de bairro é obrigatorio"
    }
}
export default professorValidator;