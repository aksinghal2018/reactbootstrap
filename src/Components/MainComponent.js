import React, { Component } from 'react'
import Crousel from './Crousel'
import { Container } from 'react-bootstrap'
import Features from './Features'
import Deals from './Deals'
import Sociamedai from './Sociamedai'
export class MainComponent extends Component {
    render() {
        return (
            <Container>
                <Crousel />
                <Features />
                <Deals />
                <Sociamedai />
            </Container>

        )
    }
}

export default MainComponent
