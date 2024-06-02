document.documentElement.setAttribute('nimbus', '');

class Nimbus {
    constructor() {
        this.Nimbusmap = Nimbusmap;
    }

    applyStyles() {
        const elements = document.querySelectorAll('[nimbus]');

        elements.forEach(element => {
            const nimbusValue = element.getAttribute('nimbus');

            if (nimbusValue) {
                const styles = nimbusValue.split(',').map(style => style.trim());

                styles.forEach(style => {
                    const mapping = this.Nimbusmap[style];
                    if (mapping) {
                        if (Array.isArray(mapping)) {
                            mapping.forEach(m => {
                                element.style[m.property] = m.value;
                            });
                        } else {
                            element.style[mapping.property] = mapping.value;
                        }
                    }
                });
            }
        });
    }
}


const cores = {
    red: "#ff0000",
    blue: "#0000ff",
    green: "#00ff00",
    yellow: "#ffff00",
    purple: "#800080",
    orange: "#ffa500",
    pink: "#ffc0cb",
    cyan: "#00ffff",
    brown: "#a52a2a",
    gray: "#808080",
    black: "#000000",
    white: "#ffffff",
    turquoise: "#40e0d0",
    coral: "#ff7f50",
    gold: "#ffd700",
    silver: "#c0c0c0",
    indigo: "#4b0082",
    violet: "#8a2be2",
    magenta: "#ff00ff",
    bronze: "#cd7f32",
    sapphire: "#0f52ba",
    emerald: "#50c878",
    ruby: "#e0115f",
    lilac: "#c8a2c8"
};

const Nimbusmap = {};

for (let cor in cores) {
    Nimbusmap[`background-${cor}`] = { property: 'backgroundColor', value: cores[cor] };
    Nimbusmap[`color-${cor}`] = { property: 'color', value: cores[cor] };
}

for (let i = 1; i <= 9999; i++) {
    Nimbusmap[`padd-px-${i}`] = { property: 'padding', value: `${i * 10}px` };
    Nimbusmap[`padd-percent-${i}`] = { property: 'padding', value: `${i * 10}%` };
    Nimbusmap[`marg-px-${i}`] = { property: 'margin', value: `${i * 10}px` };
    Nimbusmap[`marg-percent-${i}`] = { property: 'margin', value: `${i * 10}%` };
    Nimbusmap[`marg-top-px-${i}`] = { property: 'marginTop', value: `${i * 10}px` };
    Nimbusmap[`marg-top-percent-${i}`] = { property: 'marginTop', value: `${i * 10}%` };
    Nimbusmap[`marg-bottom-px-${i}`] = { property: 'marginBottom', value: `${i * 10}px` };
    Nimbusmap[`marg-bottom-percent-${i}`] = { property: 'marginBottom', value: `${i * 10}%` };
    Nimbusmap[`marg-left-px-${i}`] = { property: 'marginLeft', value: `${i * 10}px` };
    Nimbusmap[`marg-left-percent-${i}`] = { property: 'marginLeft', value: `${i * 10}%` };
    Nimbusmap[`marg-right-px-${i}`] = { property: 'marginRight', value: `${i * 10}px` };
    Nimbusmap[`marg-right-percent-${i}`] = { property: 'marginRight', value: `${i * 10}%` };
    Nimbusmap[`t-width-px-${i}`] = { property: 'width', value: `${i * 10}px` };
    Nimbusmap[`t-height-px-${i}`] = { property: 'height', value: `${i * 10}px` };
    Nimbusmap[`t-width-cent-${i}`] = { property: 'width', value: `${i * 10}%` };
    Nimbusmap[`t-height-cent-${i}`] = { property: 'height', value: `${i * 10}%` };
    Nimbusmap[`borderad-px-${i}`] = { property: 'borderRadius', value: `${i * 10}px` };
    Nimbusmap[`borderad-cent-${i}`] = { property: 'borderRadius', value: `${i * 10}%` };
    Nimbusmap[`ts-px-${i}`] = { property: 'fontSize', value: `${i * 10}px` };
    Nimbusmap[`ts-cent-${i}`] = { property: 'fontSize', value: `${i * 10}%` };
}

Nimbusmap['aling_item'] = { property: 'display', value: 'flex' };
Nimbusmap['aling_item_center'] = [
    { property: 'justifyContent', value: 'center' },
    { property: 'alignItems', value: 'center' }
];
Nimbusmap['center'] = [
    { property: 'margin', value: 'auto' },
    { property: 'position', value: 'absolute' },
    { property: 'top', value: '0' },
    { property: 'bottom', value: '0' },
    { property: 'left', value: '0' },
    { property: 'right', value: '0' }
];

Nimbusmap['aling-div'] = [
    { property: 'display', value: 'flex' },
    { property: 'align-items', value: 'center' },
    { property: 'justify-content', value: 'center' },
];

document.addEventListener('DOMContentLoaded', () => {
    const nimbus = new Nimbus();
    nimbus.applyStyles();
});
