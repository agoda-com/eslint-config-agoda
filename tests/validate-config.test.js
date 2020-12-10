const fs = require('fs');
const eslint = require('eslint');

function getErrors() {
    const CLIEngine = eslint.CLIEngine;

    const cli = new CLIEngine({
        configFile: 'index.js',
    });

    return cli.executeOnText(fs.readFileSync('./tests/mock-file.js', 'utf8'));
}

describe('Validate configs by eslint', () => {
    it(`validate all rule syntax is correct`, () => {
        const errorMessages = getErrors().results[0].messages;
        expect(errorMessages).toHaveLength(3);
        expect(errorMessages[0].ruleId).toBe('no-multi-spaces');
        expect(errorMessages[1].ruleId).toBe('no-console');
        expect(errorMessages[2].ruleId).toBe('no-multiple-empty-lines');
    });
});
