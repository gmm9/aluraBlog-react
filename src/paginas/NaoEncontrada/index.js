import styles from './NaoEncontrada.module.css'
import error404 from 'assets/erro_404.png'
import React, { Fragment } from 'react'
import BotaoPrincipal from 'components/BotaoPrincipal'
import { useNavigate } from 'react-router-dom'

export default function NaoEncontrada() {

    const navegar = useNavigate();

  return (
    <Fragment>
    <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>
            404
        </span>

        <h1 className={styles.titulo}>
            Ops! Página nao encontrada.
        </h1>
        <p className={styles.paragrafo}>
            Tem certeza de que era isso que você estava procurando? 
        </p>
        <p className={styles.paragrafo}>
        Aguarde uns instante e recarregue a página, ou volte para a página inicial.
        </p>

        <div
         onClick={() => navegar(-1)}
        className={styles.botaoContainer}>
        <BotaoPrincipal 
        tamanho="lg"

        >Voltar</BotaoPrincipal>
        </div>

        <img 
        className={styles.imagemCachorro}
        src={error404} 
        alt="cachorro de óculos e vestido como humano"
        />
    </div>
    <div className={styles.espacoEmBranco}>

    </div>
    </Fragment>
  )
}
