import styles from '@/app/spinner.module.css'

export default function SpinnerLoading() {
  return (
    <div className="spinner-container">
      <div className={styles.loading_spinner} />
    </div>
  )
}
