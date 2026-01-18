import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { useStore } from '../../store/store';

export const JoinNode = ({ id, data }) => {
  const [joinMethod, setJoinMethod] = useState(data?.joinMethod || 'concatenate');
  const [separator, setSeparator] = useState(data?.separator || ', ');
  const updateNodeField = useStore((state) => state.updateNodeField);

  const handleJoinMethodChange = (e) => {
    const value = e.target.value;
    setJoinMethod(value);
    updateNodeField(id, 'joinMethod', value);
  };

  const handleSeparatorChange = (e) => {
    const value = e.target.value;
    setSeparator(value);
    updateNodeField(id, 'separator', value);
  };

  return (
    <BaseNode
      id={id}
      title="Join"
      color="#6366f1"
      inputHandles={[
        { id: `${id}-input1` },
        { id: `${id}-input2` },
        { id: `${id}-input3` }
      ]}
      outputHandles={[{ id: `${id}-output` }]}
    >
      <label>
        Join Method:
        <select value={joinMethod} onChange={handleJoinMethodChange}>
          <option value="concatenate">Concatenate</option>
          <option value="merge">Merge Objects</option>
          <option value="zip">Zip Arrays</option>
        </select>
      </label>
      {joinMethod === 'concatenate' && (
        <label>
          Separator:
          <input 
            type="text" 
            value={separator} 
            onChange={handleSeparatorChange} 
          />
        </label>
      )}
    </BaseNode>
  );
}

