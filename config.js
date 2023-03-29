function hideLegend() {d3.select('#legend').style('opacity', 0)};

function updateLegend1() {
    const title = 'Total Restorative Justice Laws';
    const layers = ['1', '2-7', '7-14', '14-21', '21-28', '28-37'];
    const colors = ['#31463f', '#3b6a52', '#538f5d', '#78b45f', '#acd85b', '#ebf952'];

    d3.select('#legend').transition().duration(1000).style('opacity', 1);

    const legend = document.querySelector('#legend');

    // update legend title
    const legendTitle = legend.querySelector('.legend-title');
    legendTitle.textContent = title;

    // delete existing legend items
    const legendItems = legend.querySelectorAll('.legend-item');
    legendItems.forEach(item => item.remove());

    // create new legend items
    layers.forEach((layer, i) => {
    const newItem = document.createElement('div');
    newItem.classList.add('legend-item');
    const newKey = document.createElement('div');
    newKey.classList.add('legend-key');
    newKey.style.backgroundColor = colors[i];
    newItem.appendChild(newKey);
    const newValue = document.createElement('div');
    newValue.classList.add('legend-value');
    newValue.textContent = layer;
    newItem.appendChild(newValue);
    legend.appendChild(newItem);
    });

    // wrap all legend items in one div
    const legendItemsDiv = document.createElement('div');
    legendItemsDiv.classList.add('legend-items');
    const newLegendItems = legend.querySelectorAll('.legend-item');
    newLegendItems.forEach(item => legendItemsDiv.appendChild(item));
    legend.appendChild(legendItemsDiv);
    };


function updateLegend2() {
    const title = 'Concentration of Laws Passed';
    const layers = ['0-3', '8-37'];
    const colors = ['#badefc', '#cd395b'];

    const legend = document.querySelector('#legend');

    // update legend title
    const legendTitle = legend.querySelector('.legend-title');
    legendTitle.textContent = title;

    // delete existing legend items
    const legendItems = legend.querySelectorAll('.legend-item');
    legendItems.forEach(item => item.remove());

    // create new legend items
    layers.forEach((layer, i) => {
    const newItem = document.createElement('div');
    newItem.classList.add('legend-item');
    const newKey = document.createElement('div');
    newKey.classList.add('legend-key');
    newKey.style.backgroundColor = colors[i];
    newItem.appendChild(newKey);
    const newValue = document.createElement('div');
    newValue.classList.add('legend-value');
    newValue.textContent = layer;
    newItem.appendChild(newValue);
    legend.appendChild(newItem);
    });

    // wrap all legend items in one div
    const legendItemsDiv = document.createElement('div');
    legendItemsDiv.classList.add('legend-items');
    const newLegendItems = legend.querySelectorAll('.legend-item');
    newLegendItems.forEach(item => legendItemsDiv.appendChild(item));
    legend.appendChild(legendItemsDiv);
    };

function updateLegend3() {
    const title = 'Adult Restorative Justice Laws';
    const layers = ['1', '2-7', '7-14', '14-21', '21-28', '28-37'];
    const colors = ['#31463f', '#3b6a52', '#538f5d', '#78b45f', '#acd85b', '#ebf952'];
    
    const legend = document.querySelector('#legend');
    
    // update legend title
    const legendTitle = legend.querySelector('.legend-title');
    legendTitle.textContent = title;
    
    // delete existing legend items
    const legendItems = legend.querySelectorAll('.legend-item');
    legendItems.forEach(item => item.remove());
    
    // create new legend items
    layers.forEach((layer, i) => {
    const newItem = document.createElement('div');
    newItem.classList.add('legend-item');
    const newKey = document.createElement('div');
    newKey.classList.add('legend-key');
    newKey.style.backgroundColor = colors[i];
    newItem.appendChild(newKey);
    const newValue = document.createElement('div');
    newValue.classList.add('legend-value');
    newValue.textContent = layer;
    newItem.appendChild(newValue);
    legend.appendChild(newItem);
    });
    
    // wrap all legend items in one div
    const legendItemsDiv = document.createElement('div');
    legendItemsDiv.classList.add('legend-items');
    const newLegendItems = legend.querySelectorAll('.legend-item');
    newLegendItems.forEach(item => legendItemsDiv.appendChild(item));
    legend.appendChild(legendItemsDiv);
    };

    function updateLegend4() {
        const title = 'Total Restorative Justice Laws';
        const layers = ['1', '2-7', '7-14', '14-21', '21-28', '28-37'];
        const colors = ['#31463f', '#3b6a52', '#538f5d', '#78b45f', '#acd85b', '#ebf952'];
        
        const legend = document.querySelector('#legend');
        
        // update legend title
        const legendTitle = legend.querySelector('.legend-title');
        legendTitle.textContent = title;
        
        // delete existing legend items
        const legendItems = legend.querySelectorAll('.legend-item');
        legendItems.forEach(item => item.remove());
        
        // create new legend items
        layers.forEach((layer, i) => {
        const newItem = document.createElement('div');
        newItem.classList.add('legend-item');
        const newKey = document.createElement('div');
        newKey.classList.add('legend-key');
        newKey.style.backgroundColor = colors[i];
        newItem.appendChild(newKey);
        const newValue = document.createElement('div');
        newValue.classList.add('legend-value');
        newValue.textContent = layer;
        newItem.appendChild(newValue);
        legend.appendChild(newItem);
        });
        
        // wrap all legend items in one div
        const legendItemsDiv = document.createElement('div');
        legendItemsDiv.classList.add('legend-items');
        const newLegendItems = legend.querySelectorAll('.legend-item');
        newLegendItems.forEach(item => legendItemsDiv.appendChild(item));
        legend.appendChild(legendItemsDiv);
        };
      

var config = {
    style: 'mapbox://styles/elijah-messmer/clfh50gc3008e01t504qj16d7',
    accessToken: 'pk.eyJ1IjoiZWxpamFoLW1lc3NtZXIiLCJhIjoiY2xmYWNkMnFnMDRiZTNwcGJsM2J0ZjRpeCJ9.srDYVTRF4yqQ9QIz5b3EvA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    chapters: [
        {
            id: 'buffer',
            alignment: 'left',
            hidden: true,
            location: {
                center: [-98.05708, 38.17605],
                zoom: 4.23,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'rj-legislation',
                    opacity: 0,
                    duration: 2000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            title: 'A Patchwork of Laws',
            description: 'The number of Restorative justice laws has increased significantly over the last 10 years, but access is far from equal.',
            location: {
                center: [-98.05708, 38.17605],
                zoom: 4.23,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'updateLegend1',
            onChapterEnter: [
                {
                    layer: 'rj-legislation',
                    opacity: 1,
                    duration: 2000
                },
            ],
            onChapterExit: [
                {
                    layer: 'rj-legislation',
                    opacity: 0.0,
                    duration: 2000
                },
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            description: "Just <b style='color: #cd395b'>eight states</b> have passed over half of the country's restorative justice laws. The <b style='color: #badefc'>bottom half of states</b> have three or less of these laws.",
            location: {
                center: [-98.05708, 38.17605],
                zoom: 4.23,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'updateLegend2',
            onChapterEnter: [
                {
                    layer: 'rj-legislation-8',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'rj-legislation-8',
                    opacity: 0,
                    duration: 2000
                }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            description: 'Across the United States, there are <b>27%</b> fewer restorative justice laws for adult offenders than there are for minors.',
            location: {
                center: [-98.05708, 38.17605],
                zoom: 4.23,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'updateLegend3',
            onChapterEnter: [
                {
                    layer: 'rj-organizations',
                    opacity: 0.0,
                    duration: 2000
                },
                {
                    layer: 'rj-legislation-adult',
                    opacity: 1,
                    duration: 2000
                }
            ],
            onChapterExit: [
                {
                    layer: 'rj-legislation-adult',
                    opacity: 0,
                    duration: 2000
                }
            ]
        },
        {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'An Organization for Every Need',
            description: 'Alongside legislation, dozens of private and public organizations <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="7.5" r="6.5" fill="#cd395b" stroke="#fff" stroke-width="1" opacity="0.9"/></svg> across the country are practicing restorative justice. From official court programs to informal community groups, these organizations can vary significantly in their exact approach to restorative justice.',
            location: {
                center: [-98.05708, 38.17605],
                zoom: 4.23,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'updateLegend4',
            onChapterEnter: [
                {
                    layer: 'rj-organizations',
                    opacity: .8,
                    duration: 2000
                },
                {
                    layer: 'rj-legislation',
                    opacity: 1,
                    duration: 2000
                },
            ],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'right',
            hidden: false,
            // image: './path/to/image/source.png',
            description: 'Vermont has one of the most comprehensive restorative justice systems in the country. The state has passed 19 restorative justice laws and created a robust network of Community Justice Centers throughout the state.',
            location: {
                center: [-72.52382, 43.73300],
                zoom: 8.36,
                pitch: 45.00,
                bearing: -31.64
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            // image: './path/to/image/source.png',
            description: 'Researchers studying the state&#39;s restorative <a href="https://doc.vermont.gov/sites/correct/files/documents/Restorative_Justice/CJC/CoSA%20in%20Vermont.pdf">CoSA program</a>, Circles of Support and Accountability, found that reconviction rates were <b>11%</b> lower among CoSA participants compared to non-CoSA offenders. The impact was greater for more serious crimes, with felony reconviction rates <b>17%</b> lower for CoSA participants.',
            location: {
                center: [-72.52382, 43.73300],
                zoom: 8.36,
                pitch: 45.00,
                bearing: -31.64
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'The Messy Reality',
            description: 'But even in a state like Colorado, which has passed more restorative justice laws than any other state in the country, the reality of implementing a new system is far from perfect.',
            location: {
                center: [-105.54100, 38.64783],
                zoom: 7.03,
                pitch: 45.00,
                bearing: -18.55
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighth-identifier',
            alignment: 'left',
            hidden: false,
            // image: './path/to/image/source.png',
            description: '“Colorado state law allows for police officers to make an ad hoc decision in the field essentially as [whether] to refer youth to restorative justice,” González said. “That&#39;s problematic because you can think about coercion, you can think about bias, right. All of the things that exist. And [restorative justice] becomes a co-optation within a state framework that really perpetuates structural discrimination, but with a nicer label to it.”',
            location: {
                center: [-105.54100, 38.64783],
                zoom: 7.03,
                pitch: 45.00,
                bearing: -18.55
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
