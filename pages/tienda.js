import Guitarra from '../components/guitarra'
import Layout from '../components/layout'

function Tienda({guitarras}) {
  console.log(guitarras)
  return (
    <Layout
    title={'Tienda Virtual'}
    description='Tienda virtual, venta de guitarras, instrumentos, guitarLA'>
        
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Coleccion</h1>


       {guitarras?.map(guitarra => (
        <Guitarra
        key={guitarra.id}
        guitarra={guitarra.attributes}
        />
       ))}

        </main>

    </Layout>
  )
}

export default Tienda;

/* export async function getStaticProps() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const {data: guitarras} = await respuesta.json() 
    return{
      props: {
        guitarras
      }
    }
} */

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data: guitarras} = await respuesta.json() 
  return{
    props: {
      guitarras
    }
  }
}