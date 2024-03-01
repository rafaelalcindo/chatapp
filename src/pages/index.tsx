import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import stylesHome from './home.module.scss';

import { TextInput } from '../components/TextInput';
import { FaUser, FaKeyboard, FaHeadset } from 'react-icons/fa';
import { Button } from '../components/Button';

import icone_login from '../assets/image/icone_login.png'

export default function Home() {

  const router = useRouter();

  return (
    <div className={stylesHome.container}>

      <div className={stylesHome.backgroundTranparent} >

      </div>

      <div className={stylesHome.divSpaceLogin}>

        <Image
          src={icone_login}
          alt="logo"
          className={stylesHome.iconLogo}
        />

        {/* <FaHeadset
          color={'#002db3'}
          size={80}
        /> */}

        <div className={stylesHome.camposLogin}>
          <TextInput
            id='login'
            label='Login'
            name='login'
            type='text'
          />

          <TextInput
            id='senha'
            label='senha'
            name='Senha'
            type='password'
          />
          <br />
          <br />
          <br />

          <Button
            type='button'
            nome='Entrar'
            onClick={() => router.push('/painel')}
          />

        </div>

      </div>

    </div>
  )
}
