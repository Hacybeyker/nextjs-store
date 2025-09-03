# Deployment en Vercel 🚀

## Variables de Entorno Requeridas

Configura las siguientes variables de entorno en tu proyecto de Vercel:

### Shopify Configuration
```
SHOPIFY_HOSTNAME=https://tu-tienda.myshopify.com
SHOPIFY_API_KEY=tu_api_key_de_shopify
NEXT_PUBLIC_SHOPIFY_HOSTNAME=https://tu-tienda.myshopify.com
SHOPIFY_GRAPHQL_ENDPOINT=https://tu-tienda.myshopify.com/api/2025-04/graphql
SHOPIFY_STOREFRONT_TOKEN=tu_storefront_token
```

### OpenAI Configuration
```
OPENAI_API_KEY=tu_openai_api_key
```

### Optional Configuration
```
CACHE_TOKEN=optional_cache_token
```

## Pasos para Deployment

1. **Push tu código a GitHub/GitLab/Bitbucket**
2. **Conecta tu repositorio con Vercel**
3. **Configura las variables de entorno** en el panel de Vercel
4. **Deploy automáticamente**

## Configuraciones Específicas de Vercel

- **Framework Preset**: Next.js
- **Node.js Version**: 18.x o superior
- **Build Command**: `npm run build`
- **Install Command**: `npm install`
- **Output Directory**: `.next` (automático)

## Problemas Comunes Solucionados

✅ **Case-sensitivity**: Nombres de archivos corregidos para compatibilidad Linux
✅ **Variables de entorno**: Documentadas todas las variables necesarias
✅ **Edge Runtime**: Configurado correctamente para API routes
✅ **Build optimizado**: Configuración de Next.js optimizada para producción

## Verificaciones Pre-Deployment

- ✅ `npm run build` - Build local exitoso
- ✅ `npm run lint` - Sin errores de ESLint
- ✅ `npm run format:check` - Código formateado correctamente
- ✅ Variables de entorno configuradas
- ✅ Nombres de archivos con case-sensitivity correcta
