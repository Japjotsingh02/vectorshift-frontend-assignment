import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const ConditionalNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'x > 0');
  const updateNodeField = useStore((state) => state.updateNodeField);

  const handleConditionChange = (e) => {
    const value = e.target.value;
    setCondition(value);
    updateNodeField(id, 'condition', value);
  };

  return (
    <BaseNode
      id={id}
      title="Conditional"
      color="#f59e0b"
      inputHandles={[
        { id: `${id}-input` }
      ]}
      outputHandles={[
        { id: `${id}-true` },
        { id: `${id}-false` }
      ]}
    >
      <label>
        Condition:
        <input 
          type="text" 
          value={condition} 
          onChange={handleConditionChange} 
          placeholder="e.g., x > 0"
        />
      </label>
      <div style={{ fontSize: '11px', color: '#6b7280' }}>
        True: Right output | False: Bottom output
      </div>
    </BaseNode>
  );
}

