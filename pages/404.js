import Layout from "../components/layout"
import Link from "next/link"


function Pagina404() {
  return (
    <Layout
    title='Pagina no Encontrada'>
        <p className="error">Pagina No Encontrada</p>
            <Link legacyBehavior href='/'>
                <a  className='error-enlace'>
                    Ir a Inicio
                </a>
            </Link>
    </Layout>
  )
}

export default Pagina404