import styles from '../css/pagescss/HomePage.module.css'
export default function HomePage() {

    return (
      <div className={styles.main}>
      <h1>Reporting & Meetings</h1>
      <div className='card'>
        <h1>Create Report</h1>
      </div>
      <div className='card'>
        <h1>Review Report</h1>
      </div>
      <div className='card'>
        <h1>Meetings</h1>
      </div>
      </div>
    )

}

