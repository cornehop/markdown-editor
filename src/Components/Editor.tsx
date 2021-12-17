import MDEditor, { commands } from "@uiw/react-md-editor";
import React from "react";
import { Container } from "react-bootstrap";
import { openFileCommand } from "../EditorCommands/OpenFile";
import { saveFileCommand } from "../EditorCommands/SaveFile";

import '../Styles/Editor.css';

export default function Editor() {
    const [value, setValue] = React.useState("**Hello world!!!**");
    return (
        <Container className="editor-container">
            <MDEditor
                value={value}
                onChange={(value) => setValue(value!)}
                commands={[
                    commands.title1,
                    commands.title2,
                    commands.title3,
                    commands.title4,
                    commands.title5,
                    commands.title6,
                    commands.divider,
                    commands.bold,
                    commands.italic,
                    commands.strikethrough,
                    commands.divider,
                    commands.link,
                    commands.quote,
                    commands.image,
                    commands.codeBlock,
                    commands.code,
                    commands.divider,
                    commands.unorderedListCommand,
                    commands.orderedListCommand,
                    commands.checkedListCommand,
                    commands.divider,
                    openFileCommand,
                    saveFileCommand
                ]}
                height={750}
                visiableDragbar={false}
            />
        </Container>
    );
}