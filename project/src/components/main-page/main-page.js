import React from 'react';
import MainPageScreen from '../main-page/main-page';

export default function App() {
  return (
    <>
      <header>
        <h1 className="page-main__title">Маленький блокнот</h1>
      </header>
      <main className="page-main container">
        <div className="page-main__container">

          <div className="page-main__editor" contentEditable="true"/>
        </div>
      </main>
    </>
  );
}
