const salaValidator = {
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
    capacidade : {
        required: "A capcidade da sala é obrigatorio",
        minLength: {
            value: 2,
            message: "Digite um nome de pelo menos dois caracteres"
           },
           maxLength: {
            value: 5,
            message: "Digite um nome de no maximo cinco caracteres"
           },
    },
    tipo : {
        required: "O tipo da sala é obrigatorio",
        minLength: {
            value: 1,
            message: "Digite pelo menos um caracteres"
           },
           maxLength: {
            value: 15,
            message: "Digite no maximo quinze caracteres"
           },
    }
}


export default salaValidator;