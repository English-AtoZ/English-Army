import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.title}>Page Not Found</h2>
      <p style={styles.text}>
        Oops! Aap jis page ko dhoondh rahe ho, wo exist nahi karta.
      </p>

      <Link to="/" style={styles.button}>
        Go Back Home
      </Link>
    </div>
  )
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#0f172a',
    color: '#fff',
    textAlign: 'center',
    padding: '20px'
  },
  code: {
    fontSize: '120px',
    fontWeight: 'bold',
    margin: '0',
    color: '#38bdf8'
  },
  title: {
    fontSize: '32px',
    margin: '10px 0'
  },
  text: {
    fontSize: '16px',
    maxWidth: '400px',
    marginBottom: '30px',
    color: '#cbd5f5'
  },
  button: {
    padding: '12px 24px',
    background: '#38bdf8',
    color: '#0f172a',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold'
  }
}

export default ErrorPage
