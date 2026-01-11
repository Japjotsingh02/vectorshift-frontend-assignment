import { useState, useEffect, useMemo, useRef } from "react";
import { BaseNode } from "./BaseNode";
import { useStore } from "../store";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [dimensions, setDimensions] = useState({ width: 200, height: 150 });
  const textareaRef = useRef(null);
  const updateNodeField = useStore((state) => state.updateNodeField);

  const variables = useMemo(() => {
    const variablePattern = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [];
    let match;
    while ((match = variablePattern.exec(currText)) !== null) {
      const varName = match[1];
      if (!matches.includes(varName)) {
        matches.push(varName);
      }
    }
    return matches;
  }, [currText]);

  const inputHandles = variables.map((varName) => ({
    id: `${id}-${varName}`,
    label: varName,
  }));

  const handleTextChange = (e) => {
    const value = e.target.value;
    setCurrText(value);
    updateNodeField(id, "text", value);
    updateNodeField(id, "variables", variables);
  };

  useEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = "auto";
    const newHeight = textareaRef.current.scrollHeight;

    const minHeight = 150;
    const maxHeight = 300;

    setDimensions({
      width: Math.max(200, Math.min(400, currText.length * 6)),
      height: Math.max(minHeight, Math.min(maxHeight, newHeight + 60)),
    });
  }, [currText]);

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text"
      width={dimensions.width}
      height={dimensions.height}
      color="#10b981"
      inputHandles={inputHandles}
      outputHandles={[{ id: `${id}-output` }]}
    >
      <label>
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          className="w-full overfow-hidden resize-none font-mono text-[11px] box-border"
        />
      </label>
      {variables.length > 0 && (
        <div className="text-[10px] text-gray-500 italic">
          Variables: {variables.join(", ")}
        </div>
      )}
    </BaseNode>
  );
};
