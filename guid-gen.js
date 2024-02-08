function generateGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

const numberOfGuids = 1000;

let consoleOutput = '';

for (let i = 0; i < numberOfGuids; i++) {
    const guid = generateGuid();
    consoleOutput += `${guid},`;
}

consoleOutput = consoleOutput.slice(0, -1);
