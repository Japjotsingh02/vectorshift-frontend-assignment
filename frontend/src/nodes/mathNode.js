import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');
  const updateNodeField = useStore((state) => state.updateNodeField);

  const handleOperationChange = (e) => {
    const value = e.target.value;
    setOperation(value);
    updateNodeField(id, 'operation', value);
  };

  return (
    <BaseNode
      id={id}
      title="Math"
      color="#06b6d4"
      inputHandles={[
        { id: `${id}-a` },
        { id: `${id}-b` }
      ]}
      outputHandles={[{ id: `${id}-result` }]}
    >
      <label>
        Operation:
        <select value={operation} onChange={handleOperationChange}>
          <option value="add">Add (+)</option>
          <option value="subtract">Subtract (-)</option>
          <option value="multiply">Multiply (×)</option>
          <option value="divide">Divide (÷)</option>
          <option value="power">Power (^)</option>
        </select>
      </label>
      <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '4px' }}>
        Performs: a {operation === 'add' ? '+' : operation === 'subtract' ? '-' : operation === 'multiply' ? '×' : operation === 'divide' ? '÷' : '^'} b
      </div>
    </BaseNode>
  );
}

