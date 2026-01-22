// model/email.model.js

export const EmailModel = {
    emailContent: {
        type: "String",
        required: true
    },
    tone: {
        type: "String",
        required: false,
        default: "formal"
    }
};
