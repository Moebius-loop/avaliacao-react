import React from 'react';
import '../styles/home.css';
import IMG1 from '../assets/condominios-terceiro.jpg';
import IMG2 from '../assets/condominios-segundo.jpg';
import IMG3 from '../assets/foz-do-iguaçu.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

function Home() {

    return (
        <div className="tela">
            <header className>
                <label className="logo"> Jaguar </label>
                <ol className="caixa_menu">  
                    <button className="botao_menu"> Inicio </button>
                    <button className="botao_menu"> Beneficios </button>
                    <button className="botao_menu"> Sobre </button>
                </ol>
            </header>
            <div className="painel_secoes">
                <div className="secao_inicio">
                    <img className="foto_inicio" src={IMG1} alt="foto de um condominio" />
                    <div className="texto_inicio">
                        <label className="titulo_inicio"> Projeto Jaguar </label>
                        <p className="texto_1"> Uma rede social para condominios </p>
                    </div>
                </div>
                <div className="secao_beneficios">
                    <div className="texto_beneficios">
                        <label className="titulo_beneficios"> Beneficios</label>
                        <div className="conteudo_beneficios">
                            <div className="beneficio_caixa">
                                <label className="titulo_caixa_beneficio"> Organização </label>
                                <p className="texto_caixa_beneficio"> Com o  projeto Jaguar em mãos, o sindico terá todas as informações sobre os condominos listadas e organizadas</p>
                            </div>
                            <div className="beneficio_caixa">
                                <label className="titulo_caixa_beneficio"> Praticidade </label>
                                <p className="texto_caixa_beneficio"> Acesso Rápido e simples a plataforma e suas funcionalidades </p>
                            </div>
                            <div className="beneficio_caixa">
                                <label className="titulo_caixa_beneficio"> Controle </label>
                                <p className="texto_caixa_beneficio"> Controle sobre as reuniões Sindicais e eventos dentro do condominio </p>
                            </div>
                        </div>
                    </div>

                    <img className="foto_beneficios" src={IMG2} alt="Condominio cliente do projeto Jaguar" />
                </div>
                <div className="secao_sobre">
                    <img className="foto_sobre" src={IMG3} alt="foto da cidade de Foz do Iguacu" />
                    <div className="texto_sobre">
                        <label className="titulo_sobre"> Sobre nós </label>
                        <p className="texto_5"> Olá, nós somos um grupo de acadêmicos do segundo periodo do curso de engenharia de Software da faculdade Uniamérica em Foz do Iguaçu, nosso intuito é desenvolver uma aplicação web capaz de organizar e facilitar a vida dentro de um condominio</p>
                    </div>
                </div>
            </div>
            <footer>
                <ol className="caixa_contatos">
                    <label className="contato"> E-mail: projetojaguarRH@Uniamérica.com.br </label>
                    <label className="contato"> Telefone empresarial: (45) 9 9900-9900 </label>
                    <label className="contato"> Telefone Comercial: (45) 9 9901-4567 </label>
                </ol>
                <ol className="caixa_rede_social">
                    <FontAwesomeIcon className="icone" icon={faFacebookSquare} />
                    <FontAwesomeIcon className="icone" icon={faInstagramSquare} />
                    <FontAwesomeIcon className="icone" icon={faTwitterSquare} />
                </ol>
            </footer>
        </div>  
    );
}

export default Home;