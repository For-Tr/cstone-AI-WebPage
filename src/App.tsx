import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  const { t, i18n } = useTranslation()
  const [currentPage, setCurrentPage] = useState('home')
  const [currentLang, setCurrentLang] = useState(i18n.language)

  const changeLanguage = async (lng: string) => {
    try {
      await i18n.changeLanguage(lng)
      setCurrentLang(lng)
    } catch (error) {
      console.error('Failed to change language:', error)
    }
  }

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLang(lng)
    }

    i18n.on('languageChanged', handleLanguageChange)
    return () => {
      i18n.off('languageChanged', handleLanguageChange)
    }
  }, [i18n])

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />
      case 'products':
        return <ProductsPage />
      case 'news':
        return <NewsPage />
      case 'contact':
        return <ContactPage />
      case 'home':
      default:
        return <HomePage />
    }
  }

  React.useEffect(() => {
    const handleNavigation = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const closestAnchor = target.closest('a')
      
      if (closestAnchor && closestAnchor.getAttribute('href')) {
        const href = closestAnchor.getAttribute('href')
        
        if (href === '/') {
          e.preventDefault()
          setCurrentPage('home')
        } else if (href === '/about') {
          e.preventDefault()
          setCurrentPage('about')
        } else if (href === '/products') {
          e.preventDefault()
          setCurrentPage('products')
        } else if (href === '/news') {
          e.preventDefault()
          setCurrentPage('news')
        } else if (href === '/contact') {
          e.preventDefault()
          setCurrentPage('contact')
        }
      }
    }

    document.addEventListener('click', handleNavigation)
    
    return () => {
      document.removeEventListener('click', handleNavigation)
    }
  }, [])

  return (
    <div className="app">
      {renderPage()}
      
      <div className="debug-panel">
        <div className="debug-language-switcher">
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('zh')}>简体中文</button>
          <button onClick={() => changeLanguage('zh-TW')}>繁體中文</button>
        </div>
      </div>
    </div>
  )
}

export default App
