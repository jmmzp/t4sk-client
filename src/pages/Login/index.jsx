import { Divider, Typography } from '@mui/material'
import HeaderInitialPage from '../../components/HeaderInitialPage'
import FormLoginRegister from '../../components/FormLoginRegister'
import './style.css'

export default function Login() {
  return (
    <div className="container">
      <HeaderInitialPage valueButton="REGISTRE-SE" navigateTo="register" />

      <Divider />

      <main className="initial-page__main">
        <section className="initial-page__main__side left login">
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

        <section className="initial-page__main__side right login">
          <Typography
            sx={{ marginBottom: '4rem', fontWeight: 400, textAlign: 'center' }}
            variant="initialPagePrimary"
          >
            Faça seu Login aqui!
          </Typography>

          <FormLoginRegister
            state={{ Email: '', Senha: '' }}
            variables={['Email', 'Senha']}
          />
        </section>
      </main>
    </div>
  )
}
