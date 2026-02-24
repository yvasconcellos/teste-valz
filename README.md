# Área do Aluno - Front-end

Este projeto é uma implementação de uma Área do Aluno, desenvolvida como parte de um teste técnico.

---

## 1. Contexto

O objetivo deste projeto é permitir que o usuário:

- Visualize seus cursos
- Acesse detalhes e aulas de cada curso
- Navegue por conteúdos e materiais complementares

**Observações importantes:**

- Todos os dados são mockados localmente (pasta `data/`)
---

## 2. Stack Utilizada

- **Framework:** Nuxt 4
- **CSS:** Tailwind CSS
- **Gerenciador de pacotes:** npm
- **Linguagem:** TypeScript

---

## 3. Rodando localmente

### Instalar dependências
```bash
npm install
# ou
pnpm install
```

### Rodar em desenvolvimento
```bash
npm run dev
# ou
pnpm dev
```

### Gerar build estático
```bash
npm run generate
# ou
pnpm generate
```

### Visualizar build estático
```bash
npm run preview
# ou
pnpm preview
```
---

## 4. Scripts disponíveis

```json
{
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write ."
  }
}
```
---

## 5. Estrutura do Projeto

```json
app/
├─ components/
│  ├─ auth/
│  │  ├─ AuthCard.vue
│  │  ├─ LoginForm.vue
│  │  └─ RecoverPasswordForm.vue
│  ├─ lesson/
│  │  ├─ LessonContent.vue
│  │  └─ LessonList.vue
│  ├─ AppHeader.vue
│  ├─ CourseCard.vue
│  ├─ ProgressBar.vue
│  ├─ SkeletonCourseCard.vue
│  ├─ SkeletonCourseDetail.vue
│  └─ VideoPlayer.vue
├─ composables/
│  ├─ useAuth.ts
│  ├─ useCourseProgress.ts
│  └─ useCourses.ts
├─ data/
│  ├─ courses.ts
│  └─ lessons.ts
├─ layouts/
│  ├─ auth.vue
│  └─ default.vue
├─ middleware/
│  └─ auth.ts
├─ pages/
│  ├─ cursos/
│  │  ├─ [slug].vue
│  │  └─ index.vue
│  ├─ login.vue
│  ├─ materiais-complementares.vue
│  └─ meus-cursos.vue
├─ types/
│  ├─ Course.ts
│  └─ Lesson.ts
└─ utils/
   ├─ cpf.ts
   └─ matricula.ts
   ```
