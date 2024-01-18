module.exports = async function globalSetup() {
    const originalConsoleError = console.error;
    const jsDomCssError = 'Error: Could not parse CSS stylesheet';
    window['console'].error = (...params) => {
        if (!params.find((param) => param.toString().includes(jsDomCssError))) {
            originalConsoleError(...params);
        }
    };
};
