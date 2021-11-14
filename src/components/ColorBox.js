import React from "react";
import { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
    return (
        <ColorConsumer>
            {({ state }) => (    // 객체 비구조화 할당 문법을 사용하여 value를 조회하는 것을 생략할 수 있다.
                <>
                    <div
                        style={{
                            width: '64px',
                            height: '64px',
                            background: state.color
                        }}
                    />
                    <div
                        style={{
                            width: '32px',
                            height: '32px',
                            background: state.subcolor
                        }}
                    />
                </>
            )}
        </ColorConsumer>
    );
};

export default ColorBox;


// Consumer 사이에 중괄호를 열어서 그 안에 함수를 넣어 주는 패턴을 Funtion as a child, 혹은 Render Props라고 한다.
// 컴포넌트의 children이 있어야 할 자리에 일반 JSX 혹은 문자열이 아닌 함수를 전달하는 것이다.