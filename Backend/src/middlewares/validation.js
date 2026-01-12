import { body, validationResult } from 'express-validator';

const registerValidationRules = () => {
  return [
    body('nom').notEmpty().withMessage('Le nom est requis'),
    body('prenom').notEmpty().withMessage('Le prénom est requis'),
    body('identifiant')
      .notEmpty().withMessage('L\'identifiant est requis')
      .isLength({ min: 3 }).withMessage('L\'identifiant doit contenir au moins 3 caractères'),
    body('email')
      .isEmail().withMessage('Email invalide')
      .normalizeEmail(),
    body('telephone')
      .notEmpty().withMessage('Le téléphone est requis')
      .isMobilePhone().withMessage('Numéro de téléphone invalide'),
    body('password')
      .isLength({ min: 8 }).withMessage('Le mot de passe doit contenir au moins 8 caractères')
      .matches(/[A-Z]/).withMessage('Doit contenir au moins une majuscule')
      .matches(/[a-z]/).withMessage('Doit contenir au moins une minuscule')
      .matches(/[0-9]/).withMessage('Doit contenir au moins un chiffre')
      .matches(/[\W_]/).withMessage('Doit contenir au moins un caractère spécial')
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.path]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

export default {
  registerValidationRules,
  validate
};