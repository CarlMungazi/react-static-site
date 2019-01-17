import React from 'react'
import { Head } from 'react-static'
import styled from 'styled-components'

const BackgroundWrapper = styled.div.attrs({
  className: 'cover bg-left bg-center-l'
})`
  background-image: url(http://mrmrs.github.io/photos/u/011.jpg)
`

const Background = styled.div.attrs({
  className: 'bg-black-80 pb5 pb5-m pb5-l'
})``

const HeroWrapper = styled.div.attrs({
  className: 'tc-l pt4 pt5-m pt5-l ph3'
})``

const H1Element = styled.div.attrs({
  className: 'f2 f1-l fw2 white-90 mb0 lh-title'
})``

const H2Element = styled.div.attrs({
  className: 'fw1 f3 white-80 mt3 mb4'
})``

export default () => {  
  return (
    <BackgroundWrapper>
      <Background>
        <Head>
          <title>PA Reference | Quick Reference Guide For Matrix Of Conditions</title>
        </Head>

        <HeroWrapper>
          <H1Element>
            <a href="/">PA Reference</a>
          </H1Element>
          <H2Element> Your quick stop guide to the matrix of conditions </H2Element>
        </HeroWrapper>
      </Background>
    </BackgroundWrapper>
  )
}