import React from 'react';
import styles from '../styles/Home.module.css';
import stylesHome from './home.module.scss';

import { TextInput } from '../components/TextInput';
import { FaUser, FaKeyboard, FaHeadset } from 'react-icons/fa';
import { Button } from '../components/Button';

export default function Home() {
  return (
    <div className={stylesHome.container}>

      <div className={stylesHome.divSpaceLogin}>

        <FaHeadset
          color={'#002db3'}
          size={60}
        />

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

          <Button
            type='button'
            nome='Entrar'
          />

        </div>

      </div>

    </div>
  )
}
