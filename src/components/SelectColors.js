import React, { Component } from "react";
import ColorContext from "../contexts/color";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

class SelectColors extends Component {
    static contextType = ColorContext;
    // this.context를 조회하면 Context의 value를 가리키게 된다.
    // ex => setColor를 호출 => this.context.actions.setColor

    handleSetColor = color => {
        this.context.actions.setColor(color);
    };
    handleSetSubcolor = subcolor => {
        this.context.actions.setSubcolor(subcolor);
    };
    
    render() {
        return (
            <div>
                <h2>색상을 선택하세요</h2>
                    {({ actions }) => (
                        <div style={{ display: 'flex' }}>
                            {colors.map(color => (
                            <div
                                key={color}
                                style={{ background: color, width: '24px', height: '24px', cursor: 'pointer' }}
                                onClick={() => this.handleSetColor(color)}
                                onContextMenu={e => {
                                    e.preventDefault();
                                    this.handleSetSubcolor(color);
                                }}
                            />
                            ))}
                        </div>
                    )}
                <hr />
            </div>
        );
    }
}


export default SelectColors;