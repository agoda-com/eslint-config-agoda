const { ESLint } = require('eslint');

async function getErrors() {
    const eslint = new ESLint({
        overrideConfigFile: 'index.js',
    });

    return await eslint.lintFiles(['./tests/mock-file.js']);
}

describe('Validate configs by eslint', () => {
    it(`validate all rule syntax is correct`, async () => {
        const results = await getErrors();
        const errorMessages = results[0].messages;
        expect(errorMessages).toHaveLength(3);
        expect(errorMessages[0].ruleId).toBe('comma-dangle');
        expect(errorMessages[1].ruleId).toBe('no-multi-spaces');
        expect(errorMessages[2].ruleId).toBe('no-console');
    });
});
