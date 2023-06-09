const disciplinaValidator = {
    nome: {
        required : "Campo de nome é obrigatório" ,
        minLength: {
            value: 3,
            message: "O mínimo é 3"
           },
           maxLength: {
            value: 200,
            message: "O máximo é 200"
           }
    },
    curso : {
        required : "Campo de curso é obrigatório" ,
        minLength: {
            value: 3,
            message: "O mínimo é 3"
           },
           maxLength: {
            value: 200,
            message: "O máximo é 200"
           }
    }
}





export default disciplinaValidator;