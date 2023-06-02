import Cabecalho from '@/components/Cabecalho'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsArrowBarLeft, BsSendCheck } from 'react-icons/bs'

const id = () => {
  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm();

  useEffect(()=>{
    if(query.id) { 
    const alunos = JSON.parse(window.localStorage.getItem('alunos'))
    const aluno = alunos[query.id]
    for(let campo in aluno) {
        setValue(campo, aluno[campo])
    }
}
  },[query.id])

  function salvar(dados) {
    const alunos = JSON.parse(window.localStorage.getItem('alunos')) || []
    alunos.splice(query.id, 1, dados)
    window.localStorage.setItem('alunos', JSON.stringify(alunos))
    push("/alunos")
  }

  return (
    <>
    <Cabecalho/>
    <Container> 
      <Form>
      <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Digite o nome" {...register('nome', { required: true })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="text" placeholder="Digite o cpf" {...register('cpf', { required: true })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matrícula</Form.Label>
          <Form.Control type="text" placeholder="Digite a matricula" {...register('matricula', { required: true })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Digite o email" {...register('email')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="tel" placeholder="Digite o telefone" {...register('telefone')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP</Form.Label>
          <Form.Control type="number" placeholder="Digite o cep" {...register('cep')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro</Form.Label>
          <Form.Control type="text" placeholder="Digite o logradouro" {...register('logradouro')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento</Form.Label>
          <Form.Control type="text" placeholder="Digite o complemento" {...register('complemento')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Numero</Form.Label>
          <Form.Control type="text" placeholder="Digite o numero" {...register('numero')} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro</Form.Label>
          <Form.Control type="text" placeholder="Digite a matricula" {...register('bairro')} />
        </Form.Group>


        <div className='text-center'>
        <Button variant="success" className='me-2'>
          <BsSendCheck className='me-2' onClick={handleSubmit(salvar)}/>
          Salvar
        </Button>
        <Link href={'/alunos'}>
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