import { BsSend } from 'react-icons/bs'
import { SectionText } from './section-text'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailJs from '@emailjs/browser'
import { useContext, useState } from 'react'
import SpinnerLoading from './spinner-loading'
import { Button } from './ui/button'
import { Toaster } from 'react-hot-toast'
import MyToaster from './toaster'
import { motion } from 'framer-motion'
import { formAnimation, titleAnimation } from '@/utils/animations'
import { Mail, Phone } from 'lucide-react'
import { ScreenWidthContext } from '@/context/screen-width'

const contactSchema = z.object({
  name: z.string().min(1, 'Nome obrigatório'),
  email: z.string().min(1, 'Email obrigatório').email('Digite um email valido'),
  message: z.string().min(1, 'Mensagem obrigatório'),
})

export function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const width = useContext(ScreenWidthContext)

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
      MyToaster({ type: 'success', message: 'Email enviado com sucesso!' })
    } catch {
      setIsLoading(false)
      MyToaster({ type: 'error', message: 'Falha ao enviar o email!' })
    }
  }

  const textAnimation = {
    initial: {
      opacity: 0,
      x: 300,
    },
    animate: (delay: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        duration: 0.6,
      },
    }),
  }

  const textAnimationMobile = {
    initial: {
      opacity: 0,
      x: -150,
    },
    animate: (delay: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        duration: 0.6,
      },
    }),
  }

  return (
    <div id="contact" className="w-full">
      <div className="m-auto w-full  max-w-[75rem] px-6 py-20">
        <Toaster />
        <motion.div
          variants={titleAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <div className="w-max max-x1:m-auto">
            <SectionText>Contato</SectionText>
          </div>
        </motion.div>
        <div className="flex gap-16  max-x1:flex-col">
          <div className="w-full max-w-[31.25rem] max-x1:m-auto">
            <form
              onSubmit={handleSubmit(sendEmail)}
              className="flex flex-col gap-4"
            >
              <motion.div
                variants={formAnimation}
                initial="initial"
                whileInView="animate"
                custom={0.05}
                viewport={{
                  once: true,
                }}
              >
                <div className="flex flex-col gap-3">
                  <input
                    className="w-full rounded-md border  border-zinc-500 bg-base px-4 py-4 text-gray-100 outline-none transition  duration-300 ease-in-out hover:border-white focus:border-blue-500"
                    placeholder="Seu nome"
                    {...register('name')}
                  />
                  {errors.name ? (
                    <span className=" text-sm text-red-400">
                      {errors.name.message}
                    </span>
                  ) : null}
                </div>
              </motion.div>
              <motion.div
                variants={formAnimation}
                initial="initial"
                whileInView="animate"
                custom={0.07}
                viewport={{
                  once: true,
                }}
              >
                <div className="flex flex-col gap-3">
                  <input
                    placeholder="Seu email"
                    className="w-full rounded-md border  border-zinc-500 bg-base px-4 py-4 text-gray-100 outline-none transition  duration-300 ease-in-out hover:border-white focus:border-blue-500"
                    {...register('email')}
                  />
                  {errors.email ? (
                    <span className=" text-sm text-red-400">
                      {errors.email.message}
                    </span>
                  ) : null}
                </div>
              </motion.div>
              <motion.div
                variants={formAnimation}
                initial="initial"
                whileInView="animate"
                custom={0.09}
                viewport={{
                  once: true,
                }}
              >
                <div className="flex flex-col gap-3">
                  <textarea
                    placeholder="Mensagem"
                    className="h-[11.25rem] rounded-md border  border-zinc-500 bg-base px-4 py-4 text-gray-100 outline-none transition  duration-300 ease-in-out hover:border-white focus:border-blue-500"
                    {...register('message')}
                  />
                  {errors.message ? (
                    <span className=" text-sm text-red-400">
                      {errors.message.message}
                    </span>
                  ) : null}
                </div>
              </motion.div>
              <motion.div
                variants={formAnimation}
                initial="initial"
                whileInView="animate"
                custom={0.11}
                viewport={{
                  once: true,
                }}
                className="w-full"
              >
                <Button
                  type="submit"
                  className="w-full gap-4 rounded-md border  border-zinc-700 bg-zinc-900 py-7 font-semibold text-white transition  duration-300 ease-in-out hover:border-zinc-500"
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
              </motion.div>
            </form>
          </div>

          <div className="flex flex-col gap-6 max-x1:m-auto max-x1:items-center max-md:gap-4 max-sm:m-0 max-sm:items-start">
            <motion.div
              variants={width < 990 ? textAnimationMobile : textAnimation}
              initial="initial"
              whileInView="animate"
              custom={0.02}
              viewport={{
                once: true,
              }}
              className="flex flex-col gap-2 max-md:items-center"
            >
              <span className="flex items-center gap-3 text-xl  font-semibold text-white max-md:text-[1rem]">
                <Mail size={24} />
                {process.env.NEXT_PUBLIC_EMAIL}
              </span>
            </motion.div>

            <motion.div
              variants={width < 990 ? textAnimationMobile : textAnimation}
              initial="initial"
              whileInView="animate"
              custom={0.04}
              viewport={{
                once: true,
              }}
              className="flex flex-col gap-2 max-md:items-center"
            >
              <span className="flex items-center gap-3 text-xl  font-semibold text-white max-md:text-[1rem]">
                <Phone size={24} />
                {process.env.NEXT_PUBLIC_PHONE}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

//79 996557445
