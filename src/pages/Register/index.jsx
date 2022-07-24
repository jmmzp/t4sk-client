import { Divider, Typography } from '@mui/material'
import HeaderInitialPage from '../../components/HeaderInitialPage'
import InputRegister from '../../components/InputRegister'
import './style.css'

export default function Register() {
  return (
    <div className="container">
      <HeaderInitialPage valueButton="ENTRAR" navigateTo="login" />

      <Divider />

      <main className="initial-page__main">
        <section className="initial-page__main__side left register">
          <Typography
            sx={{ marginBottom: '4rem', fontWeight: 400, textAlign: 'center' }}
            variant="initialPagePrimary"
          >
            Registre-se agora mesmo!
          </Typography>

          <InputRegister />
        </section>

        <section className="initial-page__main__side right register">
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
      </main>
    </div>
  )
}
