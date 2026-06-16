const app = document.getElementById('app');

const effects = {
    snow: {
        button: 'snowToggle',
        className: 'effect-snow',
        label: 'Snow'
    },
    crt: {
        button: 'crtToggle',
        className: 'effect-crt',
        label: 'CRT'
    },
    neon: {
        button: 'neonToggle',
        className: 'effect-neon',
        label: 'Neon'
    }
};

function setupEffect(name, config) {
    const btn = document.getElementById(config.button);
    const storageKey = `effect_${name}`;

    let enabled = localStorage.getItem(storageKey);
    enabled = enabled === null ? true : enabled === 'true';

    apply(enabled);

    btn.addEventListener('click', () => {
        enabled = !enabled;
        apply(enabled);
        localStorage.setItem(storageKey, enabled);
    });

    function apply(state) {
        app.classList.toggle(config.className, state);

        btn.textContent = state
            ? `Disable ${config.label}`
            : `Enable ${config.label}`;
    }
}

Object.entries(effects).forEach(([name, config]) => {
    setupEffect(name, config);
});