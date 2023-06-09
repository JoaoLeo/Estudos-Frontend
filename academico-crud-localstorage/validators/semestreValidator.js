const semestreValidator = {
    nome: {
        required: "O nome da sala é obrigatorio",
        minLength: {
            value: 2,
            message: "Digite um nome de pelo menos dois caracteres"
           },
           maxLength: {
            value: 5,
            message: "Digite um nome de no maximo cinco caracteres"
           },
    },
    dtInicio : {
       required: "A data de inicio é obrigatorio",

    },
    dtFim : {
        required: "A data de fim é obrigatorio",
    }
}

export default semestreValidator;