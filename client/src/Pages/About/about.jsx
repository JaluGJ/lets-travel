import React from 'react'
import BasePage from '../BasePage/basePage'
import AboutMe from '../../Components/About/About'

export default function About() {
  return (
    <>
      <BasePage title={"About"} body={<AboutMe/>}/>
    </>
  )
}
