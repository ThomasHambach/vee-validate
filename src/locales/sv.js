const messages = {
    after: (field, [target]) => `Fältet ${field} måste vara efter ${target}.`,
    alpha_dash: (field) => `Fältet ${field} kan innehålla alfa-numeriska tecken såväl som snedstreck och understreck.`,
    alpha_num: (field) => `Fältet ${field} får bara innehålla alfa-numeriska tecken.`,
    alpha_spaces: (field) => `Fältet ${field} får bara innehålla alfabetiska tecken och mellanslag.`,
    alpha: (field) => `Fältet ${field} får bara innehålla alfabetiska tecken.`,
    before: (field, [target]) => `Fältet ${field} måste vara tidigare än ${target}.`,
    between: (field, [min, max]) => `Fältet ${field} måste vara mellan ${min} och ${max}.`,
    confirmed: (field, [confirmedField]) => `Fältet ${field} matchar inte ${confirmedField}.`,
    date_between: (field, [min, max]) => `Fältet ${field} måste vara mellan ${min} och ${max}.`,
    date_format: (field, [format]) => `Fältet ${field} måste ha formatatet ${format}.`,
    decimal: (field, [decimals] = ['*']) => `Fältet ${field} måste vara numeriskt och får innehålla ${decimals === '*' ? '' : decimals} decimaltecken.`,
    digits: (field, [length]) => `Fältet ${field} måste vara numeriskt och innehålla exakt${length} siffor.`,
    dimensions: (field, [width, height]) => `Fältet ${field} måtste vara ${width} pixlar bred och ${height} pixlar hög.`,
    email: (field) => `The ${field} must be a valid email.`,
    ext: (field) => `Fältet ${field} måste vara en godkäd fil.`,
    image: (field) => `Fältet ${field} måste vara en bildfil.`,
    in: (field) => `Fältet ${field} måste vara ett godkänt alternativ`,
    ip: (field) => `Fältet ${field} måste vara en godkänd ip-adress.`,
    max: (field, [length]) => `Fältet ${field} får inte vara längre än ${length} tecken.`,
    mimes: (field) => `Fältet ${field} måste ha en filändelse.`,
    min: (field, [length]) => `Fältet ${field} måste minst vara ${length} tecken.`,
    not_in: (field) => `Fältet ${field} måste vara ett godkänt alternativ `,
    numeric: (field) => `Fältet ${field} får bara innehålla numeriska tecken.`,
    regex: (field) => `Fältet ${field} har en felaktig formatering.`,
    required: (field) => `The ${field} is required.`,
    size: (field, [size]) => `Fältet ${field} måste vara mindre än${size} KB.`,
    url: (field) => `Fältet ${field} är inte en godkänd URL.`
};

const locale = {
    name: 'sv',
    messages,
    attributes: {}
};

if (typeof VeeValidate !== 'undefined' && VeeValidate && typeof VeeValidate.Validator) {
    VeeValidate.Validator.addLocale(locale);
}

export default locale;
