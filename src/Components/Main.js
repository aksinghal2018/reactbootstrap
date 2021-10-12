import React, { Component } from 'react'
import Footer from './Footer'
import MainComponent from './MainComponent'
import { Navbarcomponent } from './Navbarcomponent'

export class Main extends Component {
    render() {
        return (
            <div>
                <Navbarcomponent />
                <MainComponent />
                <Footer />
            </div>
        )
    }
}

export default Main
