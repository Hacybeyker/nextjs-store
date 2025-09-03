# Future World 🚀

Un moderno e-commerce construido con Next.js 15, integrado con Shopify y potenciado por IA para asistencia al cliente.

## ✨ Características

- **🛍️ E-commerce completo**: Integración con Shopify para productos y colecciones
- **🤖 Chat con IA**: Asistente virtual powered by OpenAI para recomendaciones de productos
- **👤 Autenticación**: Sistema de login/registro con gestión de sesiones
- **🛒 Carrito de compras**: Gestión de estado con Zustand
- **📱 Responsive**: Diseño adaptativo para todos los dispositivos
- **🎨 Estilos modernos**: Sass/SCSS con arquitectura modular
- **⚡ Performance**: Next.js 15 con Turbopack para desarrollo rápido
- **🔒 Type Safety**: TypeScript en todo el proyecto

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 15, React 19, TypeScript
- **Estilos**: Sass/SCSS, CSS Modules
- **Estado**: Zustand para gestión de carrito
- **Backend**: Shopify GraphQL API
- **IA**: OpenAI API para el chat asistente
- **Herramientas**: ESLint, Prettier, Bundle Analyzer

## 🚀 Inicio Rápido

### 1. Clona el repositorio
```bash
git clone <repository-url>
cd nextjs-store
```

### 2. Instala las dependencias
```bash
npm install
```

### 3. Configura las variables de entorno
Copia `.env.example` a `.env.local` y completa las variables:

```bash
cp .env.example .env.local
```

**Variables requeridas:**
- `SHOPIFY_HOSTNAME`: Tu tienda de Shopify
- `SHOPIFY_API_KEY`: API Key de Shopify
- `SHOPIFY_GRAPHQL_ENDPOINT`: Endpoint GraphQL de Shopify
- `SHOPIFY_STOREFRONT_TOKEN`: Token del Storefront API
- `OPENAI_API_KEY`: API Key de OpenAI para el chat
- `CACHE_TOKEN`: Token para cachéo (opcional)

### 4. Ejecuta el proyecto
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── (home)/            # Grupo de rutas para home
│   ├── store/             # Páginas de la tienda
│   ├── login/             # Autenticación
│   └── my-account/        # Panel de usuario
├── components/            # Componentes React
│   ├── shared/           # Componentes compartidos
│   ├── home/             # Componentes de home
│   └── store/            # Componentes de tienda
├── services/             # Servicios externos
│   └── shopify/          # API de Shopify
├── utils/                # Utilidades
├── types/                # Definiciones TypeScript
├── hooks/                # Custom hooks
└── sass/                 # Estilos globales
```

## 📜 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo con Turbopack
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta ESLint
- `npm run format` - Formatea el código con Prettier
- `npm run format:check` - Verifica el formato del código
- `npm run analyze` - Analiza el bundle de la aplicación

## 🌟 Funcionalidades Principales

### E-commerce
- Catálogo de productos dinámico desde Shopify
- Filtrado por colecciones
- Carrito de compras persistente
- Páginas de producto detalladas

### Chat con IA
- Asistente virtual para recomendaciones
- Integración con OpenAI
- Respuestas contextuales basadas en el inventario

### Autenticación
- Sistema de login/registro
- Gestión de sesiones con cookies
- Páginas protegidas
- Panel de usuario con historial de órdenes

## 🔧 Configuración de Desarrollo

### ESLint y Prettier
El proyecto usa ESLint y Prettier para mantener consistencia en el código:

```bash
# Verificar linting
npm run lint

# Formatear código
npm run format
```

### Análisis de Bundle
Para analizar el tamaño del bundle:

```bash
npm run analyze
```

## 🚢 Deployment

### Vercel (Recomendado)
1. Conecta tu repositorio con Vercel
2. Configura las variables de entorno en Vercel
3. Deploy automático en cada push

### Otras plataformas
El proyecto es compatible con cualquier plataforma que soporte Next.js:
- Netlify
- Railway
- Heroku

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

---

**Future World** - Un e-commerce del futuro 🌟
