import { Divider, Typography } from '@mui/material'
import InputLogin from '../../components/InputLogin'
import './style.css'
import HeaderInitialPage from '../../components/HeaderInitialPage'

export default function Login() {
  return (
    <div className="container">
      <HeaderInitialPage />

      <Divider />

      <main className="initial-page__main">
        <section className="initial-page__main__side left">
          <Typography
            sx={{ marginBottom: '3.2rem' }}
            variant="initialPagePrimary"
          >
            Organizando suas tarefas do melhor jeito com o TASK.
          </Typography>
          <Typography variant="initialPageSecondary">
            O que é o TASK?
          </Typography>

          <Typography variant="initialPagePrimary">
            É uma forma de organizar as atividades que não podem ser esquecidas,
            e que não estão inseridas na nossa rotina.
          </Typography>
        </section>

        <section className="initial-page__main__side right">
          <InputLogin />
        </section>
      </main>
    </div>
  )
}
