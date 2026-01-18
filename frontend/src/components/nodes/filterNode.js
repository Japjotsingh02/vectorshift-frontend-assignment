import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { useStore } from '../../store/store';

export const FilterNode = ({ id, data }) => {
  const [filterCriteria, setFilterCriteria] = useState(data?.filterCriteria || '');
  const updateNodeField = useStore((state) => state.updateNodeField);

  const handleFilterCriteriaChange = (e) => {
    const value = e.target.value;
    setFilterCriteria(value);
    updateNodeField(id, 'filterCriteria', value);
  };

  return (
    <BaseNode
      id={id}
      title="Filter"
      inputHandles={[
        { id: `${id}-input` }
      ]}
      outputHandles={[{ id: `${id}-output` }]}
    >
      <label>
        Filter Criteria:
        <input 
          type="text" 
          value={filterCriteria} 
          onChange={handleFilterCriteriaChange} 
          placeholder="e.g., item.length > 5"
        />
      </label>
      <div style={{ fontSize: '11px', color: '#6b7280' }}>
        Filters items based on criteria
      </div>
    </BaseNode>
  );
}

