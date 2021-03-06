import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import EventListener from 'react-event-listener'
import Help from './Help'
import TitleBlock from './TitleBlock'
import Blips from './Blips'
import Calibration from './Calibration'
import OfferHelp from './OfferHelp'
import styles from './Design.css'

class Design extends Component {

    constructor(props){
        super(props)

        this.state = {
            helpOffered: true
        }
    }

    componentDidMount(){

        setTimeout(
            () => {
                this.setState({
                    helpOffered: false
                })
            },
            1000
        )
    }

    render() {

        const { blips, addBlip, keyPressed, calibration, design } = this.props

        var yy = new Date().getFullYear().toString()
        var MM = new Date().getMonth().toString()
        var dd = new Date().getDate().toString()
        var h = new Date().getHours().toString()
        var m = new Date().getMinutes().toString()
        var s = new Date().getSeconds().toString()
        var mm = new Date().getMilliseconds().toString()
        var renderTime = yy.concat(MM,dd,h,m,s,mm)

        /*
        TODO:
        image will need to be the compiled output image from the blooprint-api
        */
        // var imagePath = null
        var imagePath = design.imagePath
        var backimage = {
            backgroundImage: 'url(' + imagePath + ')',
            backgroundSize: '100% 100%'
        }
        // style={backimage}

        return (

            /*
            trying to re-render on image load
            */

            <div className={styles.design} onDoubleClick={(e) => { addBlip(renderTime,e.clientX,e.clientY) }} >
                <img className={styles.design} src={imagePath} />


                <EventListener target={document} onKeyDown={(e) => this.handleKey(e,renderTime)} />
                { design.blipsVisible ? <Blips blips={blips} /> : null }
                { design.helpVisible ? <Help /> : null }
                { design.titleBlockVisible ? <TitleBlock color_set={design.color_set} action_pending={design.action_pending} /> : null }
                { this.state.helpOffered ? <OfferHelp /> : null }
                { design.isCalibrating ? <Calibration {...this.props} /> : null }
            </div>
        )
    }

    handleKey(e,renderTime) {
        this.props.keyPressed(e.key, renderTime)
    }
}

export default Design
