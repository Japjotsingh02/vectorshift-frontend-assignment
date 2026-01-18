import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { useStore } from '../../store/store';

export const TransformNode = ({ id, data }) => {
  const [transformType, setTransformType] = useState(data?.transformType || 'uppercase');
  const updateNodeField = useStore((state) => state.updateNodeField);

  const handleTransformTypeChange = (e) => {
    const value = e.target.value;
    setTransformType(value);
    updateNodeField(id, 'transformType', value);
  };

  return (
    <BaseNode
      id={id}
      title="Transform"
      color="#ec4899"
      inputHandles={[
        { id: `${id}-input` }
      ]}
      outputHandles={[{ id: `${id}-output` }]}
    >
      <label>
        Transform Type:
        <select value={transformType} onChange={handleTransformTypeChange}>
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="reverse">Reverse</option>
          <option value="trim">Trim Whitespace</option>
          <option value="capitalize">Capitalize</option>
        </select>
      </label>
    </BaseNode>
  );
}

