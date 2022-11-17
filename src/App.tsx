import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button } from './components/Button';

export function App() {
  return (
   <>
    <Button variant='primary'/>
    <Button variant='secondary'/>
    <Button variant='success'/>
    <Button variant='danger'/>
   </>
  );
};
