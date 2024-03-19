import { BsSend } from 'react-icons/bs'
import { SectionText } from './section-text'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailJs from '@emailjs/browser'
import { useState } from 'react'
import SpinnerLoading from './spinner-loading'
import { Button } from './button'
import { Toaster } from 'react-hot-toast'
import MyToaster from './toater'

const contactSchema = z.object({
  name: z.string().min(1, 'Nome obrigatório'),
  email: z.string().min(1, 'Email obrigatório').email('Digite um email valido'),
  message: z.string().min(1, 'Mensagem obrigatório'),
})

export function Contact() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contactSchemaType>({ resolver: zodResolver(contactSchema) })

  type contactSchemaType = z.infer<typeof contactSchema>

  async function sendEmail(data: contactSchemaType) {
    setIsLoading(true)

    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
    }

    emailJs
      .send(
        'service_n8jocgl',
        'template_z14w91k',
        templateParams,
        'T5Jfo1MOuJ9yGkVki',
      )
      .then(
        function (response) {
          setIsLoading(false)
          MyToaster({ type: 'success', message: 'Email enviado com sucesso!' })
        },
        function (error) {
          setIsLoading(false)
          MyToaster({ type: 'error', message: 'Falha ao enviar o email!' })
        },
      )
  }

  return (
    <div id="contact" className="w-full py-20">
      <Toaster />
      <SectionText>Contato</SectionText>
      <div className="flex gap-16 max-md:flex-col">
        <div className="w-full max-w-[31.25rem] max-md:m-auto">
          <form
            onSubmit={handleSubmit(sendEmail)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              <input
                className="w-full rounded-md border border-gray-500 bg-base px-4 py-4 font-poppins text-gray-100 outline-none hover:border-gray-400 focus:border-gray-200"
                placeholder="Seu nome"
                {...register('name')}
              />
              {errors.name ? (
                <span className="font-poppins text-sm text-red-400">
                  {errors.name.message}
                </span>
              ) : null}
            </div>
            <div className="flex flex-col gap-3">
              <input
                placeholder="Seu email"
                className="w-full rounded-md border border-gray-500 bg-base px-4 py-4 font-poppins text-gray-100 outline-none hover:border-gray-400 focus:border-gray-200"
                {...register('email')}
              />
              {errors.email ? (
                <span className="font-poppins text-sm text-red-400">
                  {errors.email.message}
                </span>
              ) : null}
            </div>
            <div className="flex flex-col gap-3">
              <textarea
                placeholder="Mensagem"
                className="h-[11.25rem] rounded-md border border-gray-500 bg-base px-4 py-4 font-poppins text-gray-100 outline-none hover:border-gray-400 focus:border-gray-200"
                {...register('message')}
              />
              {errors.message ? (
                <span className="font-poppins text-sm text-red-400">
                  {errors.message.message}
                </span>
              ) : null}
            </div>
            <Button
              type="submit"
              className="gap-4 rounded-md border border-gray-500 bg-zinc-900 py-7 font-poppins font-semibold text-white hover:bg-zinc-950"
            >
              {isLoading ? (
                <SpinnerLoading />
              ) : (
                <>
                  ENVIAR MENSAGEM
                  <BsSend size={20} />
                </>
              )}
            </Button>
          </form>
        </div>
        <div className="flex flex-col gap-6 max-md:m-auto">
          <div className="flex flex-col gap-2 max-md:items-center">
            <span className="font-poppins text-lg font-semibold text-white">
              Email para contato
            </span>
            <span className="font-poppins text-gray-300">
              mateusgustavodev@gmail.com
            </span>
          </div>
          <div className="flex flex-col gap-2 max-md:items-center">
            <span className="font-poppins text-lg font-semibold text-white">
              Telefone
            </span>
            <span className="font-poppins text-gray-300">79 996557445</span>
          </div>
        </div>
      </div>
    </div>
  )
}
