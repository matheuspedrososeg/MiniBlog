const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no mínimo 3 caracteres"),
    body("email")
      .isString()
      .withMessage("O e-mail é obrigatório.")
      .isEmail()
      .withMessage("Insira um e-mail válido"),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória.")
      .isLength({ min: 8 })
      .withMessage("A senha precisa ter no mínimo 8 caracteres.")
      .matches(/[A-Z]/)
      .withMessage("A senha precisa ter pelo menos uma letra maiúscula.")
      .matches(/[a-z]/)
      .withMessage("A senha precisa ter pelo menos uma letra minúscula.")
      .matches(/[0-9]/)
      .withMessage("A senha precisa ter pelo menos um número.")
      .matches(/[\W_]/)
      .withMessage("A senha precisa ter pelo menos um caractere especial."),
    body("confirmpassword")
      .isString()
      .withMessage("A confirmação de senha é obrigatória.")
      .custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error("As senhas não são iguais.");
        }
        return true;
      }),
  ];
};

const loginValidation = () => {
  return [
    body("email")
      .isString()
      .withMessage("O e-mail é obrigatório.")
      .isEmail()
      .withMessage("Insira um e-mail válido."),
    body("password").isString().withMessage("A senha é obrigatória"),
  ];
};

const userUpdateValidation = () => {
  return [
    body("name")
      .optional()
      .isLength({ min: 3 })
      .withMessage("O nome precisa de pelo menos 3 caracteres."),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória.")
      .isLength({ min: 8 })
      .withMessage("A senha precisa ter no mínimo 8 caracteres.")
      .matches(/[A-Z]/)
      .withMessage("A senha precisa ter pelo menos uma letra maiúscula.")
      .matches(/[a-z]/)
      .withMessage("A senha precisa ter pelo menos uma letra minúscula.")
      .matches(/[0-9]/)
      .withMessage("A senha precisa ter pelo menos um número.")
      .matches(/[\W_]/)
      .withMessage("A senha precisa ter pelo menos um caractere especial."),
  ];
};

module.exports = {
  userCreateValidation,
  loginValidation,
  userUpdateValidation,
};
