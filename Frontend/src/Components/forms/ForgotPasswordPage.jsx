import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { 
  Mail, Lock, ChevronLeft, ChevronRight, 
  Key, ArrowRightCircle, CheckCircle 
} from 'lucide-react';

const ForgotPasswordPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: ''
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simuler l'envoi du lien de réinitialisation
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Lien de réinitialisation envoyé à:", data.email);
      setResetSent(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const FloatingInput = ({ 
    id, 
    type, 
    value, 
    onChange, 
    onBlur,
    placeholder,
    icon: IconC, 
    error
  }) => {
    const [focused, setFocused] = useState(false);
    const hasValue = value.length > 0;
    const shouldFloat = focused || hasValue;

    return (
      <div className="relative mb-5">
        <div className="relative">
          <input
            id={id}
            name={id}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={() => {
              onBlur?.();
              setFocused(false);
            }}
            onFocus={() => setFocused(true)}
            className={`w-full px-12 py-4 bg-white border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-900 placeholder-transparent peer
              ${error ? 'border-red-500' : 'border-gray-200 focus:border-blue-500'}`}
            placeholder={placeholder}
            aria-invalid={!!error}
            aria-describedby={`${id}-error`}
          />
          
          <IconC className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
            focused ? 'text-blue-900' : error ? 'text-red-500' : 'text-gray-600'
          }`} />
          
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            {!error && hasValue && (
              <CheckCircle className="w-5 h-5 text-green-500" />
            )}
          </div>
        </div>
        
        <label
          htmlFor={id}
          className={`absolute left-12 transition-all duration-300 pointer-events-none ${
            shouldFloat
              ? 'top-0 -translate-y-1/2 bg-white px-2 text-sm scale-90'
              : 'top-1/2 -translate-y-1/2 text-base'
          } ${
            focused ? 'text-blue-900' : error ? 'text-red-500' : 'text-gray-600'
          }`}
        >
          {placeholder}
        </label>

        {error && (
          <p id={`${id}-error`} className="mt-2 text-sm text-red-600">
            {error.message}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 items-center flex justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-md">
            <Key className="w-8 h-8 text-white"/>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {resetSent ? "Vérifiez votre email" : "Mot de passe oublié"}
            </h1>
            <p className="text-gray-600">
              {resetSent 
                ? "Nous avons envoyé un lien de réinitialisation à votre adresse email" 
                : "Entrez votre email pour réinitialiser votre mot de passe"}
            </p>
          </div>
        </div>
        
        {/* Formulaire ou confirmation */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
          {!resetSent ? (
            <>
              <form 
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 w-full p-4 mx-auto"
                noValidate
              >
                {/* Champ Email */}
                <Controller
                  name="email"
                  control={control}
                  rules={{ 
                    required: "L'email est requis",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Adresse email invalide"
                    }
                  }}
                  render={({ field, fieldState }) => (
                    <FloatingInput
                      id="email"
                      type="email"
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      placeholder="Adresse email"
                      icon={Mail}
                      error={fieldState.error}
                    />
                  )}
                />

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-3 rounded-xl hover:opacity-90 transition shadow-md font-medium disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    <>
                      Réinitialiser le mot de passe
                      <ArrowRightCircle className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
              
              {/* Retour à la connexion */}
              <div className="mt-8 text-center">
                <NavLink 
                  to="/login" 
                  className="text-blue-700 hover:text-blue-900 font-medium transition-colors flex items-center justify-center"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Retour à la page de connexion
                </NavLink>
              </div>
            </>
          ) : (
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Lien envoyé avec succès!
              </h3>
              
              <p className="text-gray-600 mb-8">
                Nous avons envoyé un lien de réinitialisation à votre adresse email. 
                Veuillez vérifier votre boîte de réception et suivre les instructions.
              </p>
              
              <div className="text-sm text-gray-500 mb-6">
                <p>Vous n'avez pas reçu l'email?</p>
                <button 
                  onClick={() => setResetSent(false)}
                  className="text-blue-700 hover:text-blue-900 font-medium mt-2"
                >
                  Renvoyer le lien
                </button>
              </div>
              
              <div className="mt-8">
                <NavLink 
                  to="/login" 
                  className="inline-flex items-center justify-center w-full border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                >
                  Retour à la connexion
                  <ChevronRight className="w-4 h-4 ml-2" />
                </NavLink>
              </div>
            </div>
          )}
          
          {/* Liens légaux */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <NavLink 
                to="/privacy-policy" 
                className="hover:text-gray-700 transition-colors underline-offset-4 hover:underline"
              >
                Politique de confidentialité
              </NavLink>
              <NavLink 
                to="/terms" 
                className="hover:text-gray-700 transition-colors underline-offset-4 hover:underline"
              >
                Conditions d'utilisation
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ForgotPasswordPage;