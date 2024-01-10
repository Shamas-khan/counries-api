import React from 'react'
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
  return (
    <>
    <h1>{error.status}</h1>
    <h1>{error.statusText}</h1>
    </>
  )
}

export default ErrorPage