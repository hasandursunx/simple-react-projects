import { Trans, useTranslation } from 'react-i18next'
import './App.css'
import LanguageSelector from './components/LanguageSelector'

function App() {
  const { t } = useTranslation()

  const { line1, line2 } = t("description", { lang: "React" })

  return (
    <div className='container'>
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <span>
        <Trans
          i18nKey={line1}
          values={{
            Lang: "React"
          }}
          components={{ 1: <mark><b /></mark> }}
        >

        </Trans>
      </span >
      <span>{line2}</span>
    </div >
  )
}

export default App
