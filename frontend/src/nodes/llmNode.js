import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="LLM"
      color="#8b5cf6"
      inputHandles={[
        { id: `${id}-system` },
        { id: `${id}-prompt` }
      ]}
      outputHandles={[{ id: `${id}-response` }]}
    >
      <div style={{ fontSize: '12px', color: '#6b7280' }}>
        Large Language Model
      </div>
    </BaseNode>
  );
}
