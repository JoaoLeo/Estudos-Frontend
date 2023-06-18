import Cabecalho from '@/components/Cabecalho'
import alunoValidator from '@/validators/alunoValidator'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsArrowBarLeft, BsSendCheck } from 'react-icons/bs'
import { mask } from 'remask'

const formAlunos = () => {
  const { push } = useRouter()
  const { register, handleSubmit, formState : { errors }, setValue } = useForm();

  function salvar(dados) {
    const alunos = JSON.parse(window.localStorage.getItem('alunos')) || []
    alunos.unshift(dados)
    window.localStorage.setItem('alunos', JSON.stringify(alunos))
    push("/alunos")
  }
  function handleChange(event){
    setValue(event.target.name, (mask(event.target.value, event.target.getAttribute("mask"))))
  }

  return (
    <> 
    <Cabecalho/>
    <Container> 
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" isInvalid={errors.nome} placeholder="Digite o nome" {...register('nome', alunoValidator.nome)}/>
          { errors.nome && <p className='mt-1 text-danger'> {errors.nome.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF</Form.Label>
          <Form.Control 
            type="text" 
            isInvalid={errors.cpf} 
            placeholder="Digite o cpf" 
            {...register('cpf', alunoValidator.cpf )} 
            mask="999.999.999-99"
            onChange={handleChange} />
          { errors.cpf && <p className='mt-1 text-danger'> {errors.cpf.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matrícula</Form.Label>
          <Form.Control type="text" isInvalid={errors.matricula} placeholder="Digite a matricula" {...register('matricula', alunoValidator.matricula)} />
          { errors.matricula && <p className='mt-1 text-danger'> {errors.matricula.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" isInvalid={errors.email} placeholder="Digite o email" {...register('email', alunoValidator.email)} />
          { errors.email && <p className='mt-1 text-danger'> {errors.email.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="tel" 
          isInvalid={errors.telefone} 
          placeholder="Digite o telefone" 
          {...register('telefone', alunoValidator.telefone)}
          mask="(99)99999-9999"
          onChange={handleChange}
           />
          { errors.telefone && <p className='mt-1 text-danger'> {errors.telefone.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP</Form.Label>
          <Form.Control type="number"
           isInvalid={errors.cep} 
           placeholder="Digite o cep" 
           {...register('cep', alunoValidator.cep)}
           mask="99999-999"
           onChange={handleChange}
            />
          { errors.cep && <p className='mt-1 text-danger'> {errors.cep.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro</Form.Label>
          <Form.Control type="text" isInvalid={errors.logradouro} placeholder="Digite o logradouro" {...register('logradouro', alunoValidator.logradouro)} />
          { errors.logradouro && <p className='mt-1 text-danger'> {errors.logradouro.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento</Form.Label>
          <Form.Control type="text" isInvalid={errors.complemento} placeholder="Digite o complemento" {...register('complemento', alunoValidator.complemento)} />
          { errors.complemento && <p className='mt-1 text-danger'> {errors.complemento.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Numero</Form.Label>
          <Form.Control type="text" isInvalid={errors.numero} placeholder="Digite o numero" {...register('numero', alunoValidator.numero)} />
          { errors.numero && <p className='mt-1 text-danger'> {errors.numero.message} </p> } 
        </Form.Group>

        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro</Form.Label>
          <Form.Control type="text" isInvalid={errors.bairro} placeholder="Digite a matricula" {...register('bairro', alunoValidator.bairro)} />
          { errors.bairro && <p className='mt-1 text-danger'> {errors.bairro.message} </p> } 
        </Form.Group>

        <div className='text-center'>
        <Button variant="success" className='me-2' onClick={handleSubmit(salvar)}>
          <BsSendCheck className='me-2'/>
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

export default formAlunos