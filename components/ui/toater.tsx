import toast from 'react-hot-toast'

interface ToasterProps {
  type: 'success' | 'error'
  message: string
}

export default function MyToaster({ type, message }: ToasterProps) {
  switch (type) {
    case 'success':
      return toast.success(message, {
        style: {
          padding: '16px',
          background: '#1AA97E',
          color: '#E2F2FF',
        },
        position: 'bottom-right',
      })
    case 'error':
      return toast.error(message, {
        style: {
          padding: '16px',
          background: '#C04E4C',
          color: '#E2F2FF',
        },
        position: 'bottom-right',
      })
  }
}
