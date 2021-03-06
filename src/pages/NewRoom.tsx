import illustrationImg from '../assets/images/illustration.svg'
import { Link } from 'react-router-dom'
import logoImg from '../assets/images/logo.svg'
import '../styles/auth.scss'
import '../styles/button.scss'
import { Button } from '../components/Button'
//import { AuthContext } from '../contexts/AuthContext'


export function NewRoom(){

    //const { user }  = useContext(AuthContext)
    
    return(
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Toda pergunta tem uma resposta.</strong>
                <p>Crie salas de Q&amp;A ao-vivo e tire suas dúvidas em tempo real</p>
                
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>                   
                    <form>
                        <input 
                        type="text"
                        placeholder="Nome da sala"
                        />
                        <Button type='submit'>
                            Criar sala
                        </Button>
                    </form>
                    <p>
                    Quer entrar em uma sala existente? <Link to="/">Clique aqui</ Link>
                    </p>
                </div>
            </main>
        </div>
    )
}