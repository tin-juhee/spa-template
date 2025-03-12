# 🚀 Frontend Template (React + TypeScript + Vite)

이 리포지토리는 **React + TypeScript + Vite** 기반의 프런트엔드 프로젝트 템플릿입니다.  
빠른 개발을 위해 **eslint, prettier, tailwindcss, storybook, Zustand** 등 다양한 개발 환경을 사전 구성했습니다.

## 📌 주요 기술 스택

- **⚡ Vite** - 빠른 빌드 및 개발 서버
- **⚛ React 19 + TypeScript** - 최신 React 환경
- **🎨 TailwindCSS** - 스타일링 프레임워크
- **📚 Storybook** - UI 컴포넌트 개발 및 문서화
- **📦 Zustand** - 전역 상태 관리
- **🔍 ESLint + Prettier** - 코드 스타일 및 린팅 설정

## 🛠️ 설치 및 실행 방법

```bash
# 1️⃣ 템플릿 클론
git clone https://github.com/내아이디/frontend-template.git my-project
cd my-project

# 2️⃣ 패키지 설치
pnpm install  # 또는 npm install / yarn install

# 3️⃣ 개발 서버 실행
pnpm dev  # 또는 npm run dev / yarn dev
```

## 📁 프로젝트 구조

```
📦 src
 ┣ 📂 components  # UI 컴포넌트
 ┣ 📂 hooks       # 커스텀 훅
 ┣ 📂 lib         # 유틸리티 함수
 ┣ 📂 pages       # 페이지 컴포넌트
 ┣ 📂 store       # Zustand 상태 관리
 ┗ 📜 main.tsx    # 엔트리 포인트
```

## 🏗️ 사용된 패키지

### ✨ 필수 패키지 (`dependencies`)

- `react`, `react-dom`
- `zustand` (상태 관리)
- `lucide-react`, `@radix-ui/react-icons` (아이콘)
- `tailwindcss`, `tailwind-merge`, `class-variance-authority` (스타일링)

### 🛠️ 개발 도구 (`devDependencies`)

- `vite`, `@vitejs/plugin-react`
- `storybook`, `@storybook/react-vite` (UI 컴포넌트 개발)
- `eslint`, `prettier` (코드 스타일 관리)
- `typescript`, `@types/react`, `@types/node`

## 🌟 Storybook 실행

컴포넌트 문서화를 위해 Storybook을 포함하였습니다.

```bash
pnpm storybook  # 또는 npm run storybook / yarn storybook
```

## 🚀 배포

Vite 기반의 프로젝트로 **Netlify, Vercel** 등에 쉽게 배포할 수 있습니다.

```bash
pnpm build  # 또는 npm run build / yarn build
```

## 📜 라이선스

이 프로젝트는 **MIT 라이선스** 하에 배포됩니다.  
자유롭게 수정하고 사용하세요! 🚀
