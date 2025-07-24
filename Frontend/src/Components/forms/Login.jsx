import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, User, Building2, ChevronRight } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simuler une requête API
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Données soumises:", data);
      navigate('/user');
      // Redirection après connexion réussie
    } catch (error) {
      console.error("Erreur de connexion:", error);
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
    showToggle = false,
    onToggleShow,
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
          
          {showToggle && (
            <button
              type="button"
              onClick={onToggleShow}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label={showPassword ? "Cacher le mot de passe" : "Afficher le mot de passe"}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          )}
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
        {/* Header login */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-md">
            <Lock className="w-8 h-8 text-white"/>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Connexion</h1>
            <p className="text-gray-600">Accéder à votre compte</p>
          </div>
        </div>
        
        {/* Formulaire */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
          <div className="text-center mb-1">
            <Building2 className="text-blue-900 w-8 h-8 my-2 mx-auto"/> 
            <div>
              <h1 className="text-xl font-bold text-blue-900">IMMOGEST</h1>
              <p className="text-gray-500">Votre partenaire immobilier</p>
            </div>
          </div>
          
          <div>
            <form 
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 w-80 p-4 mx-auto mt-10"
              noValidate
              >
                {/* Champ Username avec validation */}
                <Controller
                  name="username"
                  control={control}
                  rules={{ 
                    required: "Le nom d'utilisateur est requis",
                    minLength: {
                      value: 3,
                      message: "Minimum 3 caractères"
                    }
                  }}
                  render={({ field, fieldState }) => (
                    <FloatingInput
                      id="username"
                      type="text"
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      placeholder="Nom d'utilisateur"
                      icon={User}
                      error={fieldState.error}
                    />
                  )}
                />

                {/* Champ Password avec validation */}
                <Controller
                  name="password"
                  control={control}
                  rules={{ 
                    required: "Le mot de passe est requis",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 caractères"
                    }
                  }}
                  render={({ field, fieldState }) => (
                    <FloatingInput
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      placeholder="Mot de passe"
                      icon={Lock}
                      showToggle={true}
                      onToggleShow={() => setShowPassword(!showPassword)}
                      error={fieldState.error}
                    />
                  )}
                />

                {/* Mot de passe oublié avec NavLink */}
                <div className="flex justify-end -mt-3">
                  <NavLink 
                    to="/forgot-password" 
                    className="text-sm text-blue-700 hover:text-blue-900 font-medium transition-colors flex items-center"
                  >
                    Mot de passe oublié ? <ChevronRight className="w-4 h-4" />
                  </NavLink>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-3 rounded-xl hover:opacity-90 transition shadow-md font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Connexion...
                    </span>
                  ) : "Se connecter"}
                </button>
            </form>
          </div>
          
          {/* Séparateur */}
          <div>
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">ou</span>
              </div>
            </div>

            {/* Création de compte avec NavLink */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">Vous n'avez pas de compte ?</p>
              <NavLink 
                to="/register" 
                className="inline-block w-full border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
              >
                Créer un compte
              </NavLink>
            </div>

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
    </div>
  );
}
 
export default Login;