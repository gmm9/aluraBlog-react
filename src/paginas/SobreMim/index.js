import PostModelo from 'components/PostModelo';
import React from 'react'
import styles from './SobreMim.module.css';
import fotoCapa from "assets/sobre_mim_capa.png";

export default function SobreMmim() {
  return (

      <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
      >
      <h3 className={styles.subtitulo}>
        Olá, eu sou Gabriel!
      </h3>

      <img 
        src="https://github.com/gmm9.png"
        alt="foto de perfil de Gabriel"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <p className={styles.paragrafo}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <p className={styles.paragrafo}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

      </PostModelo>
   

  )
}
