import React from 'react'
import ReactDOM from 'react-dom'

import './slider_style.css';
import click1 from './click1.wav'
import click2 from './click2.wav'

class ButtonSlider extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            playing: false,
            count: 0,
            bpm: 100,
            beatsPM: 4
        };

        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);
    }

    handleBpmChange = event => {
        const bpmValueAfteDrag = event.target.value;

        if (this.state.playing) {
            clearInterval(this.timer);
            this.timer = setInterval(this.playClick, (60 / bpmValueAfteDrag) * 1000);

            this.setState({
                count: 0,
                bpm: bpmValueAfteDrag
            });
        }
        else {
            this.setState({ bpm: bpmValueAfteDrag });
        }
    }

    startStop = () => {
        console.log("vasa")
        //this.click1.play();
        if (this.state.playing) {
            clearInterval(this.timer)
            this.setState({ playing: false })
        }
        else {
            this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000)
            this.setState({ count: 0, playing: true }, this.playClick)
        }
    }

    playClick = () => {
        const count = this.state.count;
        const beatsPM = this.state.beatsPM;

        if (count % beatsPM) {
            this.click2.play();
        }
        else {
            this.click1.play();
        }

        this.setState(state => ({
            count: (state.count + 1) % state.beatsPM
        }));
    }

    render() {

        const isPlaying = this.state.playing;
        const bpmValue = this.state.bpm;

        console.log(isPlaying)
        console.log(bpmValue)

        return (
            <div className="main-layout">
                <div className="bpm-slider">
                    <div>{bpmValue} BPM</div>
                    <input
                        type="range"
                        min="60"
                        max="240"
                        value={bpmValue}
                        onChange={this.handleBpmChange}
                    />
                </div>
                <button onClick={this.startStop}>
                    {isPlaying ? 'Stop' : 'Start'}
                </button>
                </div>
            );
        }
    }
     
export default ButtonSlider;