import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
    render() {
        const { palettes } = this.props;

        return (
            <div>
                <h1>React Colors</h1>
                {palettes.map(palette => (
                    <p>
                        <Link to={`/palette/${palette.id}`}><h1>{palette.paletteName}</h1></Link>
                    </p>
                ))}
            </div>
        );
    }
}

export default PaletteList;