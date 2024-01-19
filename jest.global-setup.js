// module.exports = async function globalSetup() {
//     const originalConsoleError = console.error;
//     const jsDomCssError = 'Error: Could not parse CSS stylesheet';
//     console.error = (...params) => {
//         if (!params.find((param) => param.toString().includes(jsDomCssError))) {
//             originalConsoleError(...params);
//         }
//     };
// };

module.exports = async function globalSetup() {
    globalThis.__consoleError__ = console.error;
    const jsDomCssError = 'Error: Could not parse CSS stylesheet';
    globalThis.__consoleError__ = (...params) => {
        if (!params.find((param) => param.toString().includes(jsDomCssError))) {
            __consoleError__(...params);
        }
    };
};
