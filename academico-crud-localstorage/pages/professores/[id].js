import Cabecalho from '@/components/Cabecalho'
import professorValidator from '@/validators/professorValidator'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsArrowBarLeft, BsSendCheck } from 'react-icons/bs'

const id = () => {
  const { push, query } = useRouter()
  const { register, handleSubmit, setValue, formState : { errors } } = useForm();

  useEffect(()=>{
    if(query.id) { 
    const professores = JSON.parse(window.localStorage.getItem('professores'))
    const disciplina = professores[query.id]
    for(let campo in disciplina) {
        setValue(campo, disciplina[campo])
    }
}
  },[query.id])

  function salvar(dados) {
    const professores = JSON.parse(window.localStorage.getItem('professores')) || []
    professores.splice(query.id, 1, dados)
    window.localStorage.setItem('professores', JSON.stringify(professores))
    push("/professores")
  }

  return (
    <>
    <Cabecalho/>
    <Container> 
      <Form>
      <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome" {...register('nome', professorValidator.nome)}/>
          { errors.nome && <p className='mt-1 text-danger'> {errors.nome.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="text" isInvalid={errors.cpf} placeholder="Digite o cpf" {...register('cpf', professorValidator.cpf )} />
          { errors.cpf && <p className='mt-1 text-danger'> {errors.cpf.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matrícula</Form.Label>
          <Form.Control type="text" isInvalid={errors.matricula} placeholder="Digite a matricula" {...register('matricula', professorValidator.matricula)} />
          { errors.matricula && <p className='mt-1 text-danger'> {errors.matricula.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="salario">
          <Form.Label>Salario</Form.Label>
          <Form.Control type="text" isInvalid={errors.salario} placeholder="Digite o salario" {...register('matricula', professorValidator.salario)} />
          { errors.salario && <p className='mt-1 text-danger'> {errors.salario.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" isInvalid={errors.email} placeholder="Digite o email" {...register('email', professorValidator.email)} />
          { errors.email && <p className='mt-1 text-danger'> {errors.email.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="tel" isInvalid={errors.telefone} placeholder="Digite o telefone" {...register('telefone', professorValidator.telefone)} />
          { errors.telefone && <p className='mt-1 text-danger'> {errors.telefone.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP</Form.Label>
          <Form.Control type="number" isInvalid={errors.cep} placeholder="Digite o cep" {...register('cep', professorValidator.cep)} />
          { errors.cep && <p className='mt-1 text-danger'> {errors.cep.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro</Form.Label>
          <Form.Control type="text" isInvalid={errors.logradouro} placeholder="Digite o logradouro" {...register('logradouro', professorValidator.logradouro)} />
          { errors.logradouro && <p className='mt-1 text-danger'> {errors.logradouro.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento</Form.Label>
          <Form.Control type="text" isInvalid={errors.complemento} placeholder="Digite o complemento" {...register('complemento', professorValidator.complemento)} />
          { errors.complemento && <p className='mt-1 text-danger'> {errors.complemento.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Numero</Form.Label>
          <Form.Control type="text" isInvalid={errors.numero} placeholder="Digite o numero" {...register('numero', professorValidator.numero)} />
          { errors.numero && <p className='mt-1 text-danger'> {errors.numero.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro</Form.Label>
          <Form.Control type="text" isInvalid={errors.bairro} placeholder="Digite a matricula" {...register('bairro', professorValidator.bairro)} />
          { errors.bairro && <p className='mt-1 text-danger'> {errors.bairro.message} </p> } 
        </Form.Group>


        <div className='text-center'>
        <Button variant="success" className='me-2'>
          <BsSendCheck className='me-2' onClick={handleSubmit(salvar)}/>
          Salvar
        </Button>
        <Link href={'/professores'}>
        <Button variant="danger">
          <BsArrowBarLeft className='me-2'/> 
          Voltar
        </Button>
        </Link>
        </div>
      </Form>
      </Container>
    </>
  )
}

export default id