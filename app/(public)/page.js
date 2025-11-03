"use client";

import {
  RiRocketLine,
  RiCodeLine,
  RiSettingsLine,
  RiLoginBoxLine,
} from "react-icons/ri";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };
    getUser();
  }, [supabase.auth]);

  const handleLogin = () => {
    router.push("/login");
  };

  const handleDashboard = () => {
    router.push("/private");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <RiRocketLine className="text-2xl text-blue-600" />
          <h1 className="text-2xl font-semibold text-gray-800">
            Mi Proyecto
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <button
              onClick={handleDashboard}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Ir al Dashboard
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors cursor-pointer"
            >
              <RiLoginBoxLine />
              <span>Iniciar Sesión</span>
            </button>
          )}
        </div>
      </header>

      <main className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Mi Proyecto
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Una base sólida para comenzar tu próximo proyecto web con Next.js
            </p>
            {!user && (
              <button
                onClick={handleLogin}
                className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 text-lg rounded-lg flex items-center space-x-2 mx-auto transition-colors cursor-pointer"
              >
                <RiLoginBoxLine />
                <span>Comenzar Ahora</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-colors p-6 text-center">
              <RiRocketLine className="text-5xl text-blue-600 mb-6 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Inicio Rápido
              </h3>
              <p className="text-gray-600 text-base">
                Configuración lista para usar con Next.js 15, Tailwind CSS y
                autenticación
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-2 border-green-100 hover:border-green-300 transition-colors p-6 text-center">
              <RiCodeLine className="text-5xl text-green-600 mb-6 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Código Limpio
              </h3>
              <p className="text-gray-600 text-base">
                Estructura organizada y componentes reutilizables para un
                desarrollo eficiente
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-colors p-6 text-center">
              <RiSettingsLine className="text-5xl text-purple-600 mb-6 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Fácil Personalización
              </h3>
              <p className="text-gray-600 text-base">
                Modifica y adapta según tus necesidades específicas del proyecto
              </p>
            </div>
          </div>

          <div className="text-center bg-gray-50 p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              ¿Listo para construir algo increíble?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Este starter te da todo lo que necesitas para comenzar tu proyecto
            </p>
            {!user && (
              <button
                onClick={handleLogin}
                className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 text-lg rounded-lg transition-colors cursor-pointer"
              >
                Crear Cuenta Gratuita
              </button>
            )}
          </div>
        </div>
      </main>

      <footer className="text-center bg-gray-50 border-t border-gray-200 py-6">
        <p className="text-gray-500">
          © 2024 Mi Proyecto. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
