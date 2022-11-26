import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

function Nosotros() {
  return (
    <Layout
    title={'Nosotros'}
    description={'Sobre nosotros, guitarLA, tienda de musica'}>
        <main className='contenedor'>
          <h1 className='heading'>Nosotros</h1>

          <div className={styles.contenido}>
            <Image  src='/img/nosotros.jpg' width={1000} height={800}  alt='imagen sobre nosotros'/>

            <div >
              <p>Duis eu suscipit eros. Ut sagittis n
                eque urna, vitae tincidunt lacus feugiat ac. Aliqu
                am fermentum tincidunt vestibulum. Quisque pretium ipsum tortor, qu
                is cursus leo viverra et. Phasellus lobortis arcu et magna tincidunt, condimentum
                 rutrum est cursus. Donec aliquam viverra nibh, id feugiat tellus pharetra id. Suspendisse 
                 aliquet tellus pharetra, porta nisi quis, fermentum massa. Nullam sed sagittis turpis. Done
                 c auctor nisl eu elit hendrerit, vulputate interdum purus bibendum. Etiam id accumsan odio.
                  Cras non iaculis urna.</p>
              <p>Duis eu suscipit eros. Ut sagittis neque urna, vitae tincidunt lacus feugiat ac. 
                Aliquam fermentum tinsed metus tempus imperdiet ac in felis. 
                Suspendisse maximus vulputate convallis.</p>
            </div>
          </div>
        </main>

    </Layout>
  )
}

export default Nosotros