'use client'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { SectionTitle } from '../section-title'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailJs from '@emailjs/browser'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Toaster } from 'react-hot-toast'
import MyToaster from '../toaster'
import { LoaderCircle, Mail, Rocket } from 'lucide-react'
import { Wrapper } from '../wrapper'
import Link from 'next/link'

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

    try {
      await emailJs.send(
        'service_n8jocgl',
        'template_z14w91k',
        templateParams,
        'T5Jfo1MOuJ9yGkVki',
      )
      setIsLoading(false)
      MyToaster({ type: 'success', message: 'Email enviado com sucesso' })
    } catch {
      setIsLoading(false)
      MyToaster({ type: 'error', message: 'Falha ao enviar o email!' })
    }
  }

  return (
    <div id="contact" className="w-full bg-background-01">
      <Wrapper>
        <div className="m-auto w-full px-6 py-20 tablet:px-5">
          <Toaster />
          <SectionTitle className="flex gap-2 desktop:justify-center tablet:mb-8 tablet:justify-start tablet:text-2xl">
            Vamos trabalhar juntos! 🚀
          </SectionTitle>
          <div className="flex w-full max-w-[700px] gap-16 desktop:m-auto desktop:flex-col desktop:gap-8">
            <form
              onSubmit={handleSubmit(sendEmail)}
              className="flex w-full max-w-[700px] shrink-0 flex-col gap-4 tablet:gap-3"
            >
              <div>
                <div className="flex flex-col gap-3">
                  <input
                    className="w-full rounded-lg border border-zinc-700 bg-background-01 px-4 py-4 text-gray-100 outline-none transition duration-300 ease-in-out placeholder:text-neutral-400 focus:border-white tablet:py-3 tablet:placeholder:text-sm"
                    placeholder="Nome"
                    {...register('name')}
                  />
                  {errors.name ? (
                    <span className="text-sm text-red-400">
                      {errors.name.message}
                    </span>
                  ) : null}
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-3">
                  <input
                    placeholder="Email"
                    className="w-full rounded-lg border border-zinc-700 bg-background-01 px-4 py-4 text-gray-100 outline-none transition duration-300 ease-in-out placeholder:text-neutral-400 focus:border-white tablet:py-3 tablet:placeholder:text-sm"
                    {...register('email')}
                  />
                  {errors.email ? (
                    <span className="text-sm text-red-400">
                      {errors.email.message}
                    </span>
                  ) : null}
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-3">
                  <textarea
                    placeholder="Mensagem"
                    className="h-[11.25rem] rounded-lg border border-zinc-700 bg-background-01 px-4 py-4 text-gray-100 outline-none transition duration-300 ease-in-out placeholder:text-neutral-400 focus:border-white tablet:py-3 tablet:placeholder:text-sm"
                    {...register('message')}
                  />
                  {errors.message ? (
                    <span className="text-sm text-red-400">
                      {errors.message.message}
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="w-full">
                <Button
                  type="submit"
                  className="w-full gap-4 rounded-lg border border-zinc-700 bg-white py-7 text-base font-semibold text-black transition duration-300 ease-in-out hover:border-zinc-700 hover:opacity-70 tablet:py-6 tablet:text-sm"
                >
                  {isLoading ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    <>ENVIAR MENSAGEM</>
                  )}
                </Button>
              </div>
            </form>
            <div className="flex flex-col gap-4">
              <span className="flex items-center gap-3 text-lg text-neutral-400 tablet:text-sm">
                <Mail size={18} />
                {process.env.NEXT_PUBLIC_EMAIL}
              </span>
              <Link
                href={process.env.NEXT_PUBLIC_LINKEDIN}
                className="flex items-center gap-3 text-lg text-neutral-400 hover:text-white tablet:text-sm"
              >
                <BsLinkedin size={18} />
                MateusGustavoDev
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_GITHUB}
                className="flex items-center gap-3 text-lg text-neutral-400 hover:text-white tablet:text-sm"
              >
                <BsGithub size={18} />
                MateusGustavoDev
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
