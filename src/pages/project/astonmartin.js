import React, { Component } from 'react';
import Overlay from '../../components/project/overlay.js';
import Text from '../../components/project/text.js';
import Video from '../../components/project/video.js';
import Image from '../../components/project/image.js';
import ImageGrid from '../../components/project/image-grid.js';
import Data from '../../data/portfolio/astonmartin';

class AstonMartin extends Component {
    constructor() {
        super();
        const data = Data;
        this.state = {
            data: data,
            image: data.image,
            video: data.video,
            socialmedia: data.socialmedia,
        }
    }
    render() {
        const mainContainer = {
            margin: '0',
            padding: '0',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }

        return (
            <div className="container-fluid" style={mainContainer}>
                <Video video={this.state.video.main} image={this.state.data.background}/>
                <Text data={this.state.data}/>
                <Image data={this.state.image.print} />
                <Image data={this.state.image.app} />
                <Image data={this.state.image.rollup} />
                <Overlay data={this.state.data}/>
                <ImageGrid data={this.state.image.instagram} padding="10px" />
            </div>
        );
    }
};

export default AstonMartin;
