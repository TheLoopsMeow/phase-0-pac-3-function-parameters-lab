function introduction (name) {
    return `Hi, my name is ${name}.`;
};

function logTwoValues (value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
};

function introductionWithLanguage (name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
};

function sayHello(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
};

function introductionWithLanguageOptional (name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
};

const Aki = "Aki";
const akiLanguage = "Ember";

introduction(Aki);

introductionWithLanguage(Aki, akiLanguage);

const Gracie = "Gracie";
const Language = "Python";

introductionWithLanguage(Gracie, Language);
