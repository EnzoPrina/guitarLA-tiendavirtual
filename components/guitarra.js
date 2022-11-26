import Image from 'next/image'
import Link from 'next/link'

function Guitarra({guitarra}) {

  const {descripcion, imagen, nombre, precio, url} = guitarra

  return (
    <div>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`}/>
    
    <div>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>${precio}</p>
      <Link legacyBehavior href={'/guitarras/${url}'}>
      <a>
        Ver Producto
      </a>
      </Link>
    </div>
    </div>


  )
}

export default Guitarra