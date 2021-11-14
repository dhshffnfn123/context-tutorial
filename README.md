# 🔌 Context API
> + __Context__ __API__ 는 리액트 프로젝트에서 전역적으로 사용할 데이터가 있을 때 유용한 기능이다.
> - 사용자 로그인 정보, 애플리케이션 환경 설정, 테마 등 여러 종류가 있다.
> * 새 Context를 만들 때는 createContext 함수를 사용하며, 파라미터에는 기본 상태를 지정한다.

## Consumer
> + Consumer 사이에 중괄호를 열어서 그 안에 함수를 넣어 주는 패턴을 Funtion as a child, 혹은 Render Props라고 한다.
> - 컴포넌트의 children이 있어야 할 자리에 일반 JSX 혹은 문자열이 아닌 함수를 전달하는 것이다.
> * color.js와 ColorBox.js 참고

## Provider
> + provider를 사용하면 Context의 value를 변경할 수 있다.
> - provider를 사용할 때는 value 값을 명시해 주어야 제대로 작동한다.

## 동적 Context 파일 수정하기
> + Context의 value에는 상태 값만이 아닌 함수를 전달해 줄 수 있다.