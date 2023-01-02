import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description="Sobre nosotros, GuitarLA tienda de música"
    >

        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>

          <div className={styles.contenido}>
              <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna ac urna sodales rhoncus quis ac risus. Donec sed dui tincidunt, tempor orci vitae, ultrices tellus. Integer viverra mattis neque, id tempus ex convallis nec. Integer velit magna, pellentesque id maximus eget, molestie sed nibh. Proin eu aliquet velit, eget lacinia nisi. Sed quis massa auctor, maximus mi vel, congue lacus. Maecenas nec hendrerit sapien, vel porta odio. Nulla luctus, risus sit amet fringilla facilisis, felis dolor commodo quam, ut tincidunt ante quam nec metus.</p>

                <p>Nam finibus, ex sit amet feugiat maximus, magna lorem finibus mi, convallis dignissim felis est nec libero. Cras aliquam turpis magna, sit amet accumsan augue fermentum eu. Nullam iaculis semper tortor eget fringilla. Phasellus a lorem auctor, vestibulum lectus vel, tempor nisl. Proin gravida urna dapibus, scelerisque dui id, consectetur ante. Etiam et volutpat enim, quis finibus urna. Cras auctor tellus a justo ornare vestibulum. Nam sed ligula mattis, feugiat elit sit amet, dapibus tellus.</p>
              </div>
          </div>
        </main>
    </Layout>
  )
}
