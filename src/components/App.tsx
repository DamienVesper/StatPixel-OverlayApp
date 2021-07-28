import React from 'react';

import '../../public/assets/scss/index.scss';

import 'bootstrap';

class App extends React.Component {
    render = () => {
        return (
            <div className="text-light text-center d-flex flex-column h-100 container">
                <h1 className="text-center mt-5 mb-3">StatPixel | Overlay</h1>
                <table className="server-table table table-borderless mt-4" id="gmod-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Level</th>
                            <th>Kills</th>
                            <th>KDR</th>
                            <th>WLR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="mc-6">
                            <td><a href="https://plancke.io/hypixel/player/stats/Jaii" target="_blank" rel="noreferrer"><span className="mc-6">[MVP</span><span className="mc-c">++</span><span className="mc-6">] Jaii</span></a></td>
                            <td>2 &#9734;</td>
                            <td>27</td>
                            <td>0.42</td>
                            <td>0.03</td>
                        </tr>
                        <tr className="mc-b">
                            <td><a href="https://plancke.io/hypixel/player/stats/GoogleSites" target="_blank" rel="noreferrer"><span className="mc-b">[MVP</span><span className="mc-c">+</span><span className="mc-b">] GoogleSites</span></a></td>
                            <td>22 &#9734;</td>
                            <td>47,848</td>
                            <td>3.57</td>
                            <td>0.47</td>
                        </tr>
                        <tr className="mc-7">
                            <td><a href="https://plancke.io/hypixel/player/stats/DamienVesper" target="_blank" rel="noreferrer"><span className="mc-7">DamienVesper</span></a></td>
                            <td>1 &#9734;</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
